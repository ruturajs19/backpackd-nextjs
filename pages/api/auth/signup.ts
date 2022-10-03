import { NextApiRequest, NextApiResponse } from "next";
import { hashPassword } from "../../../lib/auth";
import { connectToDb } from "../../../lib/db";

interface SignUpData {
  message: string;
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<SignUpData>
) => {
  const data = JSON.parse(req.body);
  const { email, password } = data;

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({ message: "Invalid creds!" });
    return;
  }
  const client = await connectToDb();
  const db = client.db();

  const existingUser = await db.collection("users").findOne({ email });

  if (existingUser) {
    res.status(422).json({ message: "User already exists!" });
    return;
  }

  const hashedPassword = await hashPassword(password);
  const result = await db.collection("users").insertOne({
    email,
    password: hashedPassword,
  });
  res.status(201).json({ message: "User Created!" });
};

export default handler;
