import * as yup from 'yup';

export const calendarValidationSchema = yup.object().shape({
  meeting_date: yup.date().required(),
  meeting_time: yup.date().required(),
  user_id: yup.string().nullable(),
});
