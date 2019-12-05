import PropTypes from 'prop-types';

const {
  string, arrayOf, shape, bool, element,
} = PropTypes;

export const EmailProps = shape({
  name: string,
  subject: string,
  preview: string,
  attach: bool,
  favorite: bool,
  time: string,
  unread: bool,
});

export const EmailsProps = arrayOf(EmailProps);

export const EmailAttachmentProps = shape({
  name: string,
  size: string,
  link: string,
});

export const EmailBodyProps = shape({
  ava: string,
  name: string,
  email: string,
  favorite: bool,
  time: string,
  body: element,
  attachment: arrayOf(EmailAttachmentProps),
});
