/* eslint-disable */
const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Username field shouldn’t be empty';
  }
  if (!values.email) {
    errors.email = 'Email field shouldn’t be empty';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.url) {
    errors.url = 'Url field shouldn’t be empty';
  } else if (!/^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i
    .test(values.url)) {
    errors.url = 'Invalid url';
  }
  if (!values.password) {
    errors.password = 'Password field shouldn’t be empty';
  } else if (values.password !== 'dragon') {
    errors.password = 'The password is incorrect';
  }
  if (!values.select) {
    errors.select = 'Please select the option';
  }

  return errors;
};

export default validate;
