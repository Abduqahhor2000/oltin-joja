import { useGet,usePost,usePut,usePatch,useDelete } from "./fetch";
  
export const UseLogin = (data) => usePost(`https://food-delivery-production.up.railway.app/v1/auth/admin/login`,data);