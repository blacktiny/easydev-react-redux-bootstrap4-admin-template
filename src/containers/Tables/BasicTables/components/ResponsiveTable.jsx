import React from 'react';
import {
  Card, CardBody, Col, Badge, Table,
} from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const ResponsiveTable = ({ t }) => (
  <Col md={12} lg={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">{t('tables.basic_tables.responsive_table')}</h5>
          <h5 className="subhead">Use default table with property <span className="red-text">responsive</span></h5>
        </div>
        <Table responsive className="table--bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Age</th>
              <th>Date</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Maria</td>
              <td>Morisson</td>
              <td>@dragon</td>
              <td>21</td>
              <td>1990/12/01</td>
              <td>Melbourne</td>
              <td><Badge color="success">In Progress</Badge></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Bobby</td>
              <td>Brown</td>
              <td>@boboby</td>
              <td>35</td>
              <td>1992/12/01</td>
              <td>Tokio</td>
              <td><Badge color="primary">Completed</Badge></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Alexander</td>
              <td>Medinberg</td>
              <td>@medimedi</td>
              <td>41</td>
              <td>1975/12/01</td>
              <td>Moscow</td>
              <td><Badge color="success">In Progress</Badge></td>
            </tr>
            <tr>
              <td>4</td>
              <td>Vera</td>
              <td>Lori</td>
              <td>@lori</td>
              <td>44</td>
              <td>1978/12/01</td>
              <td>Melbourne</td>
              <td><Badge color="primary">Completed</Badge></td>
            </tr>
            <tr>
              <td>5</td>
              <td>Maria</td>
              <td>Morisson</td>
              <td>@dragon</td>
              <td>25</td>
              <td>1992/12/01</td>
              <td>London</td>
              <td><Badge color="primary">Completed</Badge></td>
            </tr>
            <tr>
              <td>6</td>
              <td>Bobby</td>
              <td>Brown</td>
              <td>@boboby</td>
              <td>29</td>
              <td>1988/12/01</td>
              <td>Rome</td>
              <td><Badge color="primary">Completed</Badge></td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
  </Col>
);

ResponsiveTable.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(ResponsiveTable);
