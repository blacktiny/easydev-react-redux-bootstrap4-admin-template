import React, { PureComponent } from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Progress } from 'reactstrap';
import Panel from '../../../../shared/components/Panel';


class SocialScore extends PureComponent {
    static propTypes = {
      progress: PropTypes.number.isRequired,
      children: PropTypes.string.isRequired,
    };

    render() {
      const { children, progress } = this.props;
      return (
        <div className="dashboard__social-stat-item">
          <div className="dashboard__social-stat-title">
            {children}
          </div>
          <div className="dashboard__social-stat-progress progress--wide">
            <div className="progress-wrap progress-wrap--small progress-wrap--blue-gradient progress-wrap--rounded">
              <p className="progress__label">{progress}%</p>
              <Progress value={progress} />
            </div>
          </div>
        </div>
      );
    }
}

const SocialMarketing = ({ t }) => (
  <Panel
    md={12}
    lg={6}
    xl={3}
    xs={12}
    title={t('dashboard_mobile_app.social_marketing_mobile')}
    subhead="Comes from social networks"
  >
    <div className="dashboard__social-marketing">
      <div className="dashboard__social-stat">
        <SocialScore progress={87}>
            Twitter
        </SocialScore>
        <SocialScore progress={65}>
            Facebook
        </SocialScore>
        <SocialScore progress={92}>
            VK
        </SocialScore>
        <SocialScore progress={81}>
            Instagram
        </SocialScore>
        <SocialScore progress={81}>
            Linkedin
        </SocialScore>
      </div>
    </div>
  </Panel>
);

SocialMarketing.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(SocialMarketing);
