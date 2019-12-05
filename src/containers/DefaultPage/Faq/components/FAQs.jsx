import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import Collapse from '../../../../shared/components/Collapse';

const FAQs = () => (
  <Col md={12} lg={12}>
    <Card>
      <CardBody>
        <Collapse className="with-shadow" title="How I can manage my account? ">
          <p>
            Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Enough at tastes
            really so cousin am of. Extensive therefore supported by extremity of contented. Is pursuit compact
            demesne invited elderly be. View him she roof tell her case has sigh. Moreover is possible he admitted
            sociable concerns. By in cold no less been sent hard hill.
          </p>
        </Collapse>
        <Collapse className="with-shadow" title="How much a annual subscribe costs?">
          <p>
            Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Enough at tastes
            really so cousin am of. Extensive therefore supported by extremity of contented. Is pursuit compact
            demesne invited elderly be. View him she roof tell her case has sigh. Moreover is possible he admitted
            sociable concerns. By in cold no less been sent hard hill.
          </p>
        </Collapse>
        <Collapse className="with-shadow" title="How to modify Admin Template UI?">
          <p>
            Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Enough at tastes
            really so cousin am of. Extensive therefore supported by extremity of contented. Is pursuit compact
            demesne invited elderly be. View him she roof tell her case has sigh. Moreover is possible he admitted
            sociable concerns. By in cold no less been sent hard hill.
          </p>
        </Collapse>
        <Collapse className="with-shadow" title="How to get support? How often can I get technical consultations?">
          <p>
            Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Enough at tastes
            really so cousin am of. Extensive therefore supported by extremity of contented. Is pursuit compact
            demesne invited elderly be. View him she roof tell her case has sigh. Moreover is possible he admitted
            sociable concerns. By in cold no less been sent hard hill.
          </p>
        </Collapse>
      </CardBody>
    </Card>
  </Col>
);

export default FAQs;
