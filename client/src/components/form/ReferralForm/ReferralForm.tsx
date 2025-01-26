import React from "react";

import { toast } from "react-toastify";
import { SubmitHandler } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "~root/store";

import PersonalDetailsForm from "~components/form/ReferralForm/PersonalDetailsForm";
import AddressForm from "~components/form/ReferralForm/AddressForm";
import Button from "~components/common/Button";

import { useCustomForm } from "~hooks/useCustomForm";
import { useUser  } from "~hooks/useUser";
import { FormValues } from "~types/forms";

import { TITLE, BUTTON_TEXT } from "~constants/label";
import { API_ERROR_TEXT, USER_API } from "~root/constants/api";

const ReferralForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useCustomForm();

  const { data: users } = useSelector((state: RootState) => state.user);
  const { addUser } = useUser();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const email = data.email_address;
      const emailExists = users.some((user) => user.email_address === email);

      if (emailExists) {
        toast.error(USER_API.CREATE_USER_EMAIL_EXISTS);
        return;
      }

      await addUser(data);
      reset();
    } catch (error) {
      toast.error(API_ERROR_TEXT.UNEXPECTED);
    }
  };

  return (
    <div className="p-12 bg-white border border-gray-300 shadow-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="font-extrabold text-2xl text-gray-700 mb-3">{TITLE}</h1>

        <PersonalDetailsForm register={register} errors={errors} />
        <AddressForm register={register} errors={errors} />

        <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-8">
          <Button label={BUTTON_TEXT.UPLOAD_AVATAR} variant="secondary" />
          <Button label={BUTTON_TEXT.CREATE_REFERRAL} type="submit" />
        </div>
      </form>
    </div>
  );
};

export default ReferralForm;
