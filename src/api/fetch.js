import axios from "axios";

const prodoctionInstance = createInstance(process.env.REACT_APP_BASE_URL);

function createInstance(baseURL){
    return axios.create({
         baseURL,
         headers:{
            // Authorization:`Bearar ${JSON.parse(
            //     localStorage.getItem("Authorization")
            // )}`,
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZnVsbF9uYW1lIjoiU2lyb2ppZGluIElzbW9pbG92IiwicGhvbmUiOiIrOTk4OTMwNTQwOTA1IiwiYmlydGhfZGF0ZSI6IjIwMDItMDktMDVUMDA6MDA6MDAuMDAwWiIsImF2YXRhciI6ImF2YXRhciIsInJvbGUiOiJzdXBlcl9hZG1pbiIsImNoYXRfaWQiOm51bGwsImNyZWF0ZWRfYXQiOiIyMDIyLTEyLTEyVDA3OjUzOjUxLjEzMFoiLCJ1c2VyX2lkIjoxLCJpYXQiOjE2NzA4MzMwMDgsImV4cCI6MTY3MDg2OTAwOH0.dMTxHJ6P8-e2rROr5Z-Ta7aWRKfQyfwJVCF_su4tJzE`
         }  
    })
}

export const useGet = (url, params) => prodoctionInstance.get(url, { params });
export const usePost = (url, data) => prodoctionInstance.post(url, data)
export const usePut = (url, data) => prodoctionInstance.put(url,data)
export const usePatch = (url, data) => prodoctionInstance.patch(url,data)
export const useDelete = (url,data) => prodoctionInstance.delete(url,data)