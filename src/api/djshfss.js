import axios from 'axios'

function createInstance(baseURL, type, authorization) {

  const axiosInstance = axios.create({ baseURL })

  axiosInstance.interceptors.request.use(
    (config) => {
      if (authorization && config.headers) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('Authorization')}`
      }
      return config
    },
    (error) => Promise.reject(error)
  )

  axiosInstance.interceptors.response.use(
    async (res) => res,
    (error) => {
        if(error.response?.status === 401){
            localStorage.clear()
            window.location.reload()
        }
        return Promise.reject(error)
    }
  )

  return axiosInstance
}

const instance = (authorization = true) => createInstance(process.env.REACT_APP_BASE_URL, 'application/json', authorization);
const mediaInstance = createInstance(process.env.REACT_APP_BASE_URL, 'multipart/form-data', true)



export const useGet = (url, params, authorization) => {
  return instance(authorization).get(url, { params })
}

export const usePost = (url, data, type, authorization) => {
  if (type === 'media') {
    return mediaInstance.post(url, data)
  } else {
    return instance(authorization).post(url, data)
  }
}

export const usePut = (url, data, authorization) => {
  return instance(authorization).put(url, data)
}

export const usePatch = (url, data, type, authorization) => {
  if (type === 'media') {
    return mediaInstance.patch(url, data)
  } else {
    return instance(authorization).patch(url, data)
  }
}

export const useDelete = (url, data, authorization) => {
  return instance(authorization).delete(url, data)
}