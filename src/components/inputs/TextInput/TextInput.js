import React from 'react';
import MTextField from '@material-ui/core/TextField';

export default ({ field, label, type = 'text', variant = 'outlined', form: { errors, touched } }) => {
  const error = errors[field.name] && touched[field.name];
  return (
    <MTextField
      {...field}
      size="medium"
      variant={variant}
      label={label}
      type={type}
      id={field.name}
      fullWidth
      margin="dense"
      error={error}
      helperText={error ? errors[field.name] : null}
    />
  );
};
