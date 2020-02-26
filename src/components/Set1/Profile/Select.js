import React from "react";
import Select from "react-select";

export const Selectbox = ({ field, form, ...props }) => {
  const { options } = props;

  return (
    <Select
      {...field}
      {...props}
      options={options}
      value={field.value} // This can be set like this as a result of the change
      onChange={option => form.setFieldValue(field.name, option)}
    />
  );
};
export default Selectbox;
