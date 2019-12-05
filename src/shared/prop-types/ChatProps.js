import PropTypes from 'prop-types';

const {
  string, arrayOf, shape, instanceOf,
} = PropTypes;

export const CurrentUserProps = shape({
  avatar: string,
  name: string,
  userName: string,
});

export const MessageProps = shape({
  userName: string,
  message: string,
  date: instanceOf(Date),
});

export const ContactProps = shape({
  avatar: string,
  name: string,
  userName: string,
  post: string,
  messages: arrayOf(MessageProps),
});

export const ContactsProps = arrayOf(ContactProps);
