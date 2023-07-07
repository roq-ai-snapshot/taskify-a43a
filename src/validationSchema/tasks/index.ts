import * as yup from 'yup';

export const taskValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  start_time: yup.date(),
  end_time: yup.date(),
  user_id: yup.string().nullable(),
});
