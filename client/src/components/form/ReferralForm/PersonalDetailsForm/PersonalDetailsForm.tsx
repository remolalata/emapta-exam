import React from "react";
import FormInput from "~components/form/FormInput";
import SectionHeader from "~components/common/SectionHeaders";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormValues } from "~types/forms";
import { SECTION_HEADER_TEXT, TEXT_INPUT_LABEL } from "~constants/label";

interface PersonalDetailsFormProps {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
}

const PersonalDetailsForm: React.FC<PersonalDetailsFormProps> = ({
  register,
  errors,
}) => (
  <div className="flex flex-col gap-8">
    <SectionHeader title={SECTION_HEADER_TEXT.PERSONAL_DETAILS} />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <FormInput
        label={TEXT_INPUT_LABEL.GIVEN_NAME}
        name="given_name"
        register={register}
        error={errors.given_name}
      />
      <FormInput
        label={TEXT_INPUT_LABEL.SURNAME}
        name="surname"
        register={register}
        error={errors.surname}
      />
      <FormInput
        label={TEXT_INPUT_LABEL.EMAIL}
        name="email_address"
        register={register}
        error={errors.email_address}
      />
      <FormInput
        label={TEXT_INPUT_LABEL.PHONE}
        name="phone_number"
        register={register}
        error={errors.phone_number}
      />
    </div>
  </div>
);

export default PersonalDetailsForm;