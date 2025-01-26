import { useForm, UseFormReturn } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormValues } from "../types";

import { FORM_ERRORS_TEXT } from "~root/constants/label";

export const schema = yup.object({
  given_name: yup.string().required(FORM_ERRORS_TEXT.GIVEN_NAME),
  surname: yup.string().required(FORM_ERRORS_TEXT.SURNAME),
  email_address: yup
    .string()
    .email(FORM_ERRORS_TEXT.EMAIL_INVALID)
    .required(FORM_ERRORS_TEXT.EMAIL),
  phone_number: yup
    .string()
    .matches(/^[0-9\-\s]+$/, FORM_ERRORS_TEXT.PHONE_INVALID)
    .required(FORM_ERRORS_TEXT.PHONE),
  home_number: yup.string().optional(),
  street_name: yup.string().optional(),
  suburb: yup.string().optional(),
  state: yup.string().optional(),
  postcode: yup.string().optional(),
  country: yup.string().optional(),
});

export const useCustomForm = (): UseFormReturn<FormValues> => {
  return useForm<FormValues>({
    resolver: yupResolver(schema),
  });
};
