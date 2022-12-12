import { useGet,usePost,usePut,usePatch,useDelete } from "./fetch";
  
export const UseLogin = () => usePost(`auth/admin/login`);