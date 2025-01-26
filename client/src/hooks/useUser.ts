import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import {
  setUsers,
  addUser as addUserAction,
  deleteUser as deleteUserAction,
  setSelectedUser as setSelectedUserAction,
  setLoading,
  setError,
} from "~store/slices/userSlice";
import { useApi } from "~hooks/useApi";
import { User } from "~root/types/user";
import { FormValues } from "~root/types";

import { USER_API } from "~root/constants/api";

export const useUser = () => {
  const dispatch = useDispatch();

  const { callApi: fetchUsers } = useApi<User[]>("/users", "get");
  const { callApi: createUser } = useApi<User>("/users", "post");
  const { callApi: removeUser } = useApi<User>("/users", "delete");
  const { callApi: updateUser } = useApi<User>("/users", "put");

  const getUsers = useCallback(async () => {
    dispatch(setLoading(true));
    try {
      const response = await fetchUsers();
      if (response) {
        dispatch(setUsers(response));
      }
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message || USER_API.GET_USERS_ERROR);
        dispatch(setError(err.message || USER_API.GET_USERS_ERROR));
      } else {
        toast.error(USER_API.GET_USERS_ERROR);
        dispatch(setError(USER_API.GET_USERS_ERROR));
      }
      return null;
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch, fetchUsers]);

  const addUser = useCallback(
    async (user: FormValues) => {
      dispatch(setLoading(true));
      try {
        const response = await createUser(user);
        if (response) {
          dispatch(addUserAction(response));
          toast.success(USER_API.CREATE_USER);
        }
      } catch (err) {
        if (err instanceof Error) {
          toast.error(err.message || USER_API.CREATE_USER_ERROR);
          dispatch(setError(err.message || USER_API.CREATE_USER_ERROR));
        } else {
          toast.error(USER_API.CREATE_USER_ERROR);
          dispatch(setError(USER_API.CREATE_USER_ERROR));
        }
      } finally {
        dispatch(setLoading(false));
      }
    },
    [dispatch, createUser]
  );

  const deleteUser = useCallback(
    async (id: string) => {
      dispatch(setLoading(true));
      try {
        await removeUser({}, `/${id}`);
        dispatch(deleteUserAction(id));
        toast.success(USER_API.DELETE_USER);
      } catch (err) {
        if (err instanceof Error) {
          toast.error(err.message || USER_API.DELETE_USER_ERROR);
          dispatch(setError(err.message || USER_API.DELETE_USER_ERROR));
        } else {
          toast.error(USER_API.DELETE_USER_ERROR);
          dispatch(setError(USER_API.DELETE_USER_ERROR));
        }
      } finally {
        dispatch(setLoading(false));
      }
    },
    [dispatch, removeUser]
  );

  const editUser = useCallback(
    async (id: string) => {
      dispatch(setLoading(true));
      try {
        await updateUser({}, `/${id}`);
        dispatch(deleteUserAction(id));
        toast.success(USER_API.DELETE_USER);
      } catch (err) {
        if (err instanceof Error) {
          toast.error(err.message || USER_API.DELETE_USER_ERROR);
          dispatch(setError(err.message || USER_API.DELETE_USER_ERROR));
        } else {
          toast.error(USER_API.DELETE_USER_ERROR);
          dispatch(setError(USER_API.DELETE_USER_ERROR));
        }
      } finally {
        dispatch(setLoading(false));
      }
    },
    [dispatch, updateUser]
  );

  const setSelectedUser = useCallback(async (id: string) => {
    dispatch(setSelectedUserAction(id));
  }, [dispatch]);

  return { getUsers, addUser, deleteUser, editUser, setSelectedUser };
};
