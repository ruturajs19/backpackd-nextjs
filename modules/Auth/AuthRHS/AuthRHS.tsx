import { FormEvent, RefObject, useRef, useState } from "react";
import Button from "../../../components/Button/Button";
import { FormContent, Input } from "./AuthRHS.styles";
import { signIn } from "next-auth/client";

const createUser = async (email: string, password: string) => {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
};

const AuthRHS = () => {
  const [isLogin, setLogin] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>();
  const passwordInputRef = useRef<HTMLInputElement>();

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current?.value as string;
    const enteredPassword = passwordInputRef.current?.value as string;

    if (isLogin) {
      const result = await signIn("credentials", {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });
      // alert("LoggedIn");
      console.log("result:", result);
    } else {
      try {
        const result = await createUser(enteredEmail, enteredPassword);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <FormContent style={{ textAlign: "center" }}>
        <h2>{`${isLogin ? `Login` : `Sign Up`}`}</h2>
        <Input ref={emailInputRef as RefObject<HTMLInputElement>} required />
        <Input
          ref={passwordInputRef as RefObject<HTMLInputElement>}
          type="password"
          required
        />
        <Button type="submit" height="2rem">
          Submit
        </Button>
        <Button
          clickHandler={() => setLogin((prevState) => !prevState)}
        >{`Switch to ${isLogin ? `Sign Up` : `Login`}`}</Button>
      </FormContent>
    </form>
  );
};

export default AuthRHS;
