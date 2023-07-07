import * as yup from 'yup';

export const timesheetValidationSchema = yup.object().shape({
  date: yup.date().required(),
  total_time: yup.date().required(),
  user_id: yup.string().nullable(),
});
