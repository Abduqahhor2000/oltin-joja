import { useGet,usePost,usePut,usePatch,useDelete } from "./fetch";
  
export const UseLogin = () => usePost(`auth/admin/login`);
export const UseGetAdmins = () => useGet(`users/admins`);
export const UsePostAdmin = (data) => usePost(`users/admin`, data);