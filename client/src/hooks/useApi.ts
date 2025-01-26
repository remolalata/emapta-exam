import { useState, useCallback } from "react";
import { toast } from "react-toastify";
import apiClient from "~api/apiClient";

import { API_ERROR_TEXT } from "~root/constants/api";

export const useApi = <T>(
  endpoint: string,
  method: "get" | "post" | "put" | "delete"
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const callApi = useCallback(
    async (body?: object, urlParams?: string): Promise<T | null> => {
      setLoading(true);
      setError(null);

      try {
        let response;
        const url = urlParams ? `${endpoint}${urlParams}` : endpoint;
        switch (method) {
          case "get":
            response = await apiClient.get<T>(url);
            break;
          case "post":
            response = await apiClient.post<T>(url, body || {});
            break;
          case "put":
            response = await apiClient.put<T>(url, body || {});
            break;
          case "delete":
            response = await apiClient.delete<T>(url);
            break;
          default:
            toast.error(API_ERROR_TEXT.HTTP_METHOD);
            throw new Error(API_ERROR_TEXT.HTTP_METHOD);
        }
        return response.data;
      } catch (err: unknown) {
        if (err instanceof Error) {
          toast.error(err.message);
          setError(err.message);
        } else {
          toast.error(API_ERROR_TEXT.UNEXPECTED);
          setError(API_ERROR_TEXT.UNEXPECTED);
        }
        return null;
      } finally {
        setLoading(false);
      }
    },
    [endpoint, method]
  );

  return { loading, error, callApi };
};  