import * as yup from 'yup';

export const productSchema = yup.object({
  name: yup.string().required(),
  imageUrl: yup.string().required(),
  count: yup.string().required(),
  weight: yup.string().required(),
  width: yup.string().required(),
  height: yup.string().required(),
});
