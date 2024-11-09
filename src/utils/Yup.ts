import * as Yup from "yup";

export const restaurantValidationSchema = Yup.object().shape({
  name: Yup.string().required('Restaurant name is required'),
  address: Yup.string().required('Address is required'),
  contact: Yup.string()
    .matches(/^\d+$/, 'Contact must be a valid number')
    .required('Contact is required'),
});

export const shelterValidationSchema = Yup.object().shape({
  name: Yup.string().required('Shelter name is required'),
  location: Yup.string().required('Location is required'),
  contact: Yup.string()
    .matches(/^\d+$/, 'Contact must be a valid number')
    .required('Contact is required'),
});