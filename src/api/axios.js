import { useGet,usePost,usePut,usePatch,useDelete } from "./fetch";
  
export const UseLogin = (data) => usePost(`auth/admin/login`, data);
export const UseGetAdmins = () => useGet(`users/admins`);
export const UsePostAdmin = (data) => usePost(`users/admin`, data);

