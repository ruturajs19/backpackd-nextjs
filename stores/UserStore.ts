import create from "zustand";
import UsersMock from "../mocks/Users.json";

interface UserStoreModel {
  userList: any[];
  fetchUsers: () => void;
}

const useUserStore = create<UserStoreModel>((set) => ({
  userList: UsersMock,
  fetchUsers: () => {
    const users: any[] = [];
    set({
      userList: users,
    });
  },
}));

export default useUserStore;
