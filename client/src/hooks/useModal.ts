import { useDispatch, useSelector } from "react-redux";
import { RootState } from "~root/store";
import { openModal, closeModal } from "~store/slices/modalSlice";

const useModal = (modalKey: string) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.modal[modalKey] || false);

  const handleOpen = () => {
    dispatch(openModal(modalKey));
  };

  const handleClose = () => {
    dispatch(closeModal(modalKey));
  };

  return {
    isOpen,
    handleOpen,
    handleClose,
  };
};

export default useModal;