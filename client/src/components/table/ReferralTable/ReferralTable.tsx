import React from "react";
import { FaPencil, FaTrash } from "react-icons/fa6";
import { toast } from "react-toastify";

import { useSelector } from "react-redux";
import { RootState } from "~store/index";

import { useUser } from "~root/hooks/useUser";

import { TABLE_HEAD_LABEL } from "~root/constants/label";
import { API_ERROR_TEXT } from "~root/constants/api";

const ReferralTable: React.FC = () => {
  const { data } = useSelector((state: RootState) => state.user);
  const { deleteUser, setSelectedUser } = useUser();

  const handleDelete = async (id: string) => {
    try {
      await deleteUser(id);
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error(err.message || API_ERROR_TEXT.UNEXPECTED);
      } else {
        toast.error(API_ERROR_TEXT.UNEXPECTED);
      }
    }
  }

  const handleEdit = (id: string) => {
    setSelectedUser(id);
  }

  return (
    <div className="p-12 bg-white border border-gray-300 shadow-md">
      <div className="overflow-x-auto">
        <table className="referral-table w-full border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2">{TABLE_HEAD_LABEL.GIVEN_NAME}</th>
              <th className="px-4 py-2">{TABLE_HEAD_LABEL.SURNAME}</th>
              <th className="px-4 py-2">{TABLE_HEAD_LABEL.EMAIL}</th>
              <th className="px-4 py-2">{TABLE_HEAD_LABEL.PHONE}</th>
              <th className="px-4 py-2" align="center">
                {TABLE_HEAD_LABEL.ACTIONS}
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-400 text-sm">
            {data.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="px-4 py-2">{user.given_name}</td>
                <td className="px-4 py-2">{user.surname}</td>
                <td className="px-4 py-2">{user.email_address}</td>
                <td className="px-4 py-2">{user.phone_number}</td>
                <td className="px-4 py-2" align="center">
                  <div className="flex gap-x-3 items-center justify-center">
                    <button type="button" title="Edit" onClick={() => handleEdit(user.id)}>
                      <FaPencil size={18} />
                    </button>
                    <button type="button" title="Delete">
                      <FaTrash size={18} onClick={() => handleDelete(user.id)} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReferralTable;
