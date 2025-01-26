import axiosInstance from "./axiosInstance";

interface ApiResponse<T> {
  data: T;
  status: number;
}

const apiClient = {
  get: async <T>(url: string, params?: object): Promise<ApiResponse<T>> => {
    const response = await axiosInstance.get(url, { params });
    return response;
  },
  post: async <T>(
    url: string,
    body: object,
    params?: object
  ): Promise<ApiResponse<T>> => {
    const response = await axiosInstance.post(url, body, { params });
    return response;
  },
  put: async <T>(
    url: string,
    body: object,
    params?: object
  ): Promise<ApiResponse<T>> => {
    const response = await axiosInstance.put(url, body, { params });
    return response;
  },
  delete: async <T>(url: string, params?: object): Promise<ApiResponse<T>> => {
    const response = await axiosInstance.delete(url, { params });
    return response;
  },
};

export default apiClient;
