import React from "react";
import FormInput from "~components/form/FormInput";
import SectionHeader from "~components/common/SectionHeaders";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormValues } from "~types/forms";
import { SECTION_HEADER_TEXT, TEXT_INPUT_LABEL } from "~constants/label";

interface AddressFormProps {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
}

const AddressForm: React.FC<AddressFormProps> = ({ register, errors }) => (
  <div className="flex flex-col gap-8 mt-8">
    <SectionHeader title={SECTION_HEADER_TEXT.ADDRESS} />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <FormInput
        label={TEXT_INPUT_LABEL.HOME_NAME}
        type="text"
        name="home_number"
        register={register}
        error={errors.home_number}
      />
      <FormInput
        label={TEXT_INPUT_LABEL.STREET}
        type="text"
        name="street_name"
        register={register}
        error={errors.street_name}
      />
      <FormInput
        label={TEXT_INPUT_LABEL.SUBURB}
        type="text"
        name="suburb"
        register={register}
        error={errors.suburb}
      />
      <FormInput
        label={TEXT_INPUT_LABEL.STATE}
        type="text"
        name="state"
        register={register}
        error={errors.state}
      />
      <FormInput
        label={TEXT_INPUT_LABEL.POST_CODE}
        type="text"
        name="postcode"
        register={register}
        error={errors.postcode}
      />
      <FormInput
        label={TEXT_INPUT_LABEL.COUNTRY}
        type="text"
        name="country"
        register={register}
        error={errors.country}
      />
    </div>
  </div>
);

export default AddressForm;