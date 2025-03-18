import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required("Name must be"),
  email: yup.string().email().required("Email must be"),
  password: yup.string().min(8,"Password must be longer").required("Password must be")
});

export default schema;

