import React, { PureComponent } from 'react';
import {
  Col, Card, Row, CardBody,
} from 'reactstrap';
import PropTypes from 'prop-types';
import WizardFormOne from './WizardFormOne';
import WizardFormTwo from './WizardFormTwo';
import WizardFormThree from './WizardFormThree';

export default class WizardForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      page: 1,
    };
  }

  nextPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  previousPage = () => {
    this.setState(prevState => ({ page: prevState.page - 1 }));
  };

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;

    return (
      <Row>
        <Col md={12} lg={12}>
          <Card>
            <CardBody className="wizard">
              <div className="wizard__steps">
                <div className={`wizard__step${page === 1 ? ' wizard__step--active' : ''}`}><p>Step 1</p></div>
                <div className={`wizard__step${page === 2 ? ' wizard__step--active' : ''}`}><p>Step 2</p></div>
                <div className={`wizard__step${page === 3 ? ' wizard__step--active' : ''}`}><p>Step 3</p></div>
              </div>
              <div className="wizard__form-wrapper">
                {page === 1 && <WizardFormOne onSubmit={this.nextPage} />}
                {page === 2
                && (
                <WizardFormTwo
                  previousPage={this.previousPage}
                  onSubmit={this.nextPage}
                />
                )}
                {page === 3
                && (
                <WizardFormThree
                  previousPage={this.previousPage}
                  onSubmit={onSubmit}
                />
                )}
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}
