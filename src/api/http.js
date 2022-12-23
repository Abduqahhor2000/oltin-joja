import axios from 'axios'

function createInstance(baseURL, type, authorization) {
  const headers = {
    Accept: 'application/json',
    'Content-Type': type
  }
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
      const refreshToken = localStorage.getItem('refreshToken') 
      // console.log(refreshToken, error)
      if (error.response?.status === 401 && refreshToken) {
        axios
          .post(
            `${process.env.REACT_APP_BASE_URL}/v1/auth/admin/refresh`,
            { refreshToken },
            {
              headers: {
                ...headers,
                Authorization: `Bearer ${refreshToken}`
              }
            }
          )
          .then(({ data }) => {
            console.log(data)
            localStorage.setItem('Authorization', data.token)
            window.location.reload()
          })
          .catch(() => {
            localStorage.clear()
            window.location.reload()
          })
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