/** @format */

import { useState } from "react";

export const useForm = (formIninalValue) => {
  const [formValue, setFormValue] = useState(formIninalValue);

  const update = (value) => {
    setFormValue(value);
  };

  return [formValue, update];
};
