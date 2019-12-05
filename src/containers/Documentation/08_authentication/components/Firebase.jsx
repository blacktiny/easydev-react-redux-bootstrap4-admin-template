import React from 'react';
import { Card, CardBody } from 'reactstrap';
import CodeHighlither from '../../../../shared/components/CodeHighlither';

const Firebase = () => (
  <Card className="card--not-full-height">
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">Firebase</h5>
      </div>
      <p>For authorization using firebase you need:</p>
      <ol>
        <li>
          Register the application
          <a href="https://firebase.google.com/"> Firebase</a>
        </li>
        <li>
          Get the keys after registration and copy them to a file <b>template/src/config/firebase.js</b>
          <CodeHighlither>
            {`export default {
  apiKey: 'API_KEY',
  authDomain: 'AUTH_DOMAIN',
  databaseURL: 'DATABASE_URL',
  projectId: 'PROJECT_ID',
  storageBucket: '',
  messagingSenderId: 'MESSAGING_SENDER_ID',
  appId: 'APP_ID',
};`}
          </CodeHighlither>
        </li>
        <li>Then, if you did everything right, just plug the HoC (withAuthFireBase)
          of src/shared/auth/withAuthFirebase.jsx  in Login Page into your application
          <CodeHighlither>
            {`import withAuthFirebase from '../auth/withAuthFirebase';
export default withAuthFirebase(LoginCard);`
            }
          </CodeHighlither>
        </li>
        <li>
          Call onClick, on the button on which you will be called firebase authorization call
          <CodeHighlither>
            {`<Button
  className="account__social-btn account__social-btn--firebase"
  onClick={changeIsOpenModalFireBase}
><FirebaseIcon />
</Button>`
            }
          </CodeHighlither>
        </li>
      </ol>
    </CardBody>
  </Card>
);

export default Firebase;
