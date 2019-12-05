import React from 'react';
import { Card, CardBody } from 'reactstrap';
import CodeHighlither from '../../../../shared/components/CodeHighlither';

const Firebase = () => (
  <Card className="card--not-full-height">
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">Auth0</h5>
      </div>
      <p>For authorization using auth0 you need:</p>
      <ol>
        <li>
          Register the application
          <a href="https://auth0.com/"> Auth0</a>
        </li>
        <li>
          You must copy from the settings of the created application domain and clientId.
          Past in file <b>template/src/config/auth0.js</b>
          <CodeHighlither>
            {`export default {
  domain: 'DOMAIN',
  clientId: 'CLIENT_ID',
};
`}
          </CodeHighlither>
        </li>
        <li>
          To enable auth0 authorization, you must connect AuthProvider to the App.jsx component
          <CodeHighlither>
            {`import Auth0Provider from '../../shared/components/auth/withAuth0';
import auth0Config from '../../config/auth0';

const onRedirectCallbackAuth0 = (appState) => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname,
  );
}

export default const app = () => (
  <div>
   <Auth0Provider
     domain={auth0Config.domain}
     client_id={auth0Config.clientId}
     redirect_uri={\`${window.location.origin}/easydev/dashboard_default\`}
     onRedirectCallback={onRedirectCallbackAuth0}
   >
   <div>

  </div>
   </Auth0Provider>
  </div>
`
            }
          </CodeHighlither>
        </li>
        <li>
          Import hooks auth in component login.
          <CodeHighlither>
            {`import { useAuth0 } from '../auth/withAuth0';

const {
    loginWithRedirect, loading,
} = useAuth0();

<Button className="account__social-btn account__social-btn--auth0" onClick={() => loginWithRedirect({})}>
   <img className="customizer__btn-icon" src={auth0Icon} alt="icon" />
</Button>
            `
            }
          </CodeHighlither>
        </li>
      </ol>
    </CardBody>
  </Card>
);

export default Firebase;
