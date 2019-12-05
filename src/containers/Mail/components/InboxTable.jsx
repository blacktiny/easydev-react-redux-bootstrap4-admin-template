/* eslint-disable react/no-array-index-key,react/no-unused-state */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import EmailListItem from './EmailListItem';
import EmailsControls from './EmailsControls';
import { EmailsProps } from '../../../shared/prop-types/EmailProps';

export default class InboxTable extends PureComponent {
  static propTypes = {
    emails: EmailsProps.isRequired,
    onLetter: PropTypes.func.isRequired,
  };

  state = {
    isChecked: false,
  };

  onChangePage = (pageOfItems) => {
    this.setState({ pageOfItems });
  };

  onChangeSelect = () => {
    const { isChecked } = this.state;
    this.setState({ isChecked: !isChecked });
  }

  render() {
    const { emails, onLetter } = this.props;
    const { isChecked } = this.state;

    return (
      <div className="inbox__content">
        <EmailsControls
          emails={emails}
          onChangePage={this.onChangePage}
          onChangeSelect={this.onChangeSelect}
        />
        <Table className="table--bordered inbox__emails-table" responsive>
          <tbody>
            {emails.slice(1, 15).map((e, i) => (
              <EmailListItem
                email={e}
                key={i}
                itemId={i}
                onLetter={onLetter}
                isChecked={isChecked}
              />
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
