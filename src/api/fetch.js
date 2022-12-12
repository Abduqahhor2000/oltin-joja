import axios from "axios";

const prodoctionInstance = createInstance(process.env.REACT_APP_BASE_URL);

function createInstance(baseURL){
    return axios.create({
         baseURL,
         headers:{
            Authorization:`Bearar ${JSON.parse(
                localStorage.getItem("Authorization")

            )}`,

         }
         
    })
}

export const useGet = (url, params) => prodoctionInstance.get(url,{params})
export const usePost = (url, data) => prodoctionInstance.post(url,data)
export const usePut = (url, data) => prodoctionInstance.put(url,data)
export const usePatch = (url, data) => prodoctionInstance.patch(url,data)
export const useDelete = (url,data) => prodoctionInstance.delete(url,data)