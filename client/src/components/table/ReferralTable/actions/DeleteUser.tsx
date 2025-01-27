import { toast } from "react-toastify";
import { FaTrash } from "react-icons/fa6";

import useModal from "~hooks/useModal";
import { useUser } from "~hooks/useUser";

import Modal from "~components/common/Modal";
import ConfirmModal from "~components/common/Modal/ModalContents/ConfirmModal/ConfirmModal";

import { API_ERROR_TEXT } from "~root/constants/api";

interface DeleteUserProps {
  id: string;
}

export const DeleteUser: React.FC<DeleteUserProps> = ({ id }) => {
  const { deleteUser } = useUser();
  const deleteUserModal = useModal("deleteUser");

  const handleConfirm = async () => {
    try {
      await deleteUser(id);
      deleteUserModal.handleClose();
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error(err.message || API_ERROR_TEXT.UNEXPECTED);
      } else {
        toast.error(API_ERROR_TEXT.UNEXPECTED);
      }
    }
  };

  return (
    <>
      <button type="button" title="Delete">
        <FaTrash size={18} onClick={deleteUserModal.handleOpen} />
      </button>
      <Modal modalKey="deleteUser" title="Delete User" size="sm">
        <ConfirmModal
          onConfirm={handleConfirm}
          onCancel={deleteUserModal.handleClose}
        />
      </Modal>
    </>
  );
};
