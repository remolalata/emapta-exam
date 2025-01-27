import Button from "~components/common/Button";

import { CONFIRM_MODAL_BUTTON_TEXT } from "~root/constants/label";

interface ConfirmModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ onConfirm, onCancel }) => {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h2 className="text-xl font-semibold">Are you sure?</h2>
      <p className="text-sm text-gray-600">
        This action cannot be undone. Do you want to proceed?
      </p>
      <div className="flex gap-2 mt-4">
        <Button
          label={CONFIRM_MODAL_BUTTON_TEXT.CANCEL}
          variant="secondary"
          className="w-24"
          onClick={onCancel}
        />
        <Button
          label={CONFIRM_MODAL_BUTTON_TEXT.CONFIRM}
          className="w-24"
          onClick={onConfirm}
        />
      </div>
    </div>
  );
};

export default ConfirmModal;
