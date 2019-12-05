import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'reactstrap';

const MailBox = ({
  title, amount, selected, children,
}) => (
  <div className={`inbox__mailbox${selected ? ' active' : ''}`}>
    {children}
    <p className="inbox__mailbox-title">{title}</p>
    {amount ? <Badge className="inbox__mailbox-label">{amount}</Badge> : ''}
  </div>
);

MailBox.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  amount: PropTypes.number,
  selected: PropTypes.bool,
};

MailBox.defaultProps = {
  amount: 0,
  selected: false,
};

export default MailBox;
