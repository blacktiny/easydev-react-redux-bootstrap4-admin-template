import React from 'react';
import { Card, Col, CardBody } from 'reactstrap';
import Chat from './Chat';
import myContacts from './contacts';

const ChatCard = () => (
  <Col md={12} lg={12}>
    <Card>
      <CardBody>
        <Chat
          contacts={myContacts}
          currentUser={{
            avatar: `${process.env.PUBLIC_URL}/img/ava.png`,
            name: 'Roman Johanson',
            userName: 'dragonKing',
          }}
        />
      </CardBody>
    </Card>
  </Col>
);

export default ChatCard;
