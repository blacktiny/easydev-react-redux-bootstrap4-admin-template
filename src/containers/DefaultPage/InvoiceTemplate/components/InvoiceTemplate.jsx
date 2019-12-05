/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Card, Col, Button, ButtonToolbar, Table, CardBody,
} from 'reactstrap';

const invoiceData = [
  { title: 'Wordpress Plugin Apollo 200', quantity: 1, cost: 27 },
  { title: 'Easy Pro Admin Template', quantity: 1, cost: 59 },
  { title: 'Spirit HTML Template', quantity: 2, cost: 20 },
];

const InvoiceTemplate = () => (
  <Col md={12} lg={12}>
    <Card>
      <CardBody className="invoice">
        <div className="invoice__head">
          <div className="invoice__head-left">
            <div className="invoice__logo" />
            <p>Aspirity Creative Web Studio </p>
            <p>44 Shirley Ave.</p>
            <p>West Chicago,</p>
            <p>IL 60185 </p>
            <p dir="ltr">+8 (224) 243-4543</p>
          </div>
          <div className="invoice__head-right">
            <h4>Invoice #2308</h4>
            <p className="invoice__date">August 23, 2016</p>
            <p>Maria Morris</p>
            <p>Project Manager at BLX</p>
            <p>mariam@company.co</p>
            <p>44 Shirley Ave.</p>
            <p>West Chicago, IL 60185</p>
          </div>
        </div>
        <Table className="table--bordered" responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Unit Cost</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {invoiceData.map((i, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{i.title}</td>
                <td>{i.quantity}</td>
                <td>${i.cost}</td>
                <td>${i.quantity * i.cost}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="invoice__total">
          <p>Sub - Total amount: $126.00</p>
          <p>VAT: $20.00</p>
          <p className="invoice__grand-total">Grand Total: $146.00</p>
          <ButtonToolbar className="invoice__toolbar">
            <Button color="primary">Proceed to payment</Button>
            <Button>Print</Button>
          </ButtonToolbar>
        </div>
      </CardBody>
    </Card>
  </Col>
);

export default InvoiceTemplate;
