import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, ButtonToolbar, Modal } from 'reactstrap';
import classNames from 'classnames';
import { RTLProps } from '../prop-types/ReducerProps';

class ModalComponent extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    message: PropTypes.string,
    color: PropTypes.string.isRequired,
    colored: PropTypes.bool,
    header: PropTypes.bool,
    btn: PropTypes.string.isRequired,
    rtl: RTLProps.isRequired,
  };

  static defaultProps = {
    title: '',
    message: '',
    colored: false,
    header: false,
  };

  constructor() {
    super();
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({ modal: !prevState.modal }));
  }

  render() {
    const {
      color, btn, title, message, colored, header, rtl,
    } = this.props;
    const { modal } = this.state;
    let Icon;

    switch (color) {
      case 'primary':
        Icon = <span className="lnr lnr-pushpin modal__title-icon" />;
        break;
      case 'success':
        Icon = <span className="lnr lnr-thumbs-up modal__title-icon" />;
        break;
      case 'warning':
        Icon = <span className="lnr lnr-flag modal__title-icon" />;
        break;
      case 'danger':
        Icon = <span className="lnr lnr-cross-circle modal__title-icon" />;
        break;
      default:
        break;
    }
    const modalClass = classNames({
      'modal-dialog--colored': colored,
      'modal-dialog--header': header,
    });

    return (
      <div>
        <Button color={color} onClick={this.toggle}>{btn}</Button>
        <Modal
          isOpen={modal}
          toggle={this.toggle}
          modalClassName={`${rtl.direction}-support`}
          className={`modal-dialog--${color} ${modalClass}`}
        >
          <div className="modal__header">
            <button className="lnr lnr-cross modal__close-btn" type="button" onClick={this.toggle} />
            {header ? '' : Icon}
            <h4 className="text-modal  modal__title">{title}</h4>
          </div>
          <div className="modal__body">
            {message}
          </div>
          <ButtonToolbar className="modal__footer">
            <Button className="modal_cancel" onClick={this.toggle}>Cancel</Button>{' '}
            <Button className="modal_ok" outline={colored} color={color} onClick={this.toggle}>Ok</Button>
          </ButtonToolbar>
        </Modal>
      </div>
    );
  }
}

export default connect(state => ({
  rtl: state.rtl,
}))(ModalComponent);
