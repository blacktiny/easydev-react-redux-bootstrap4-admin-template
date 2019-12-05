import React, { PureComponent } from 'react';
import {
  Nav, NavItem, NavLink, TabContent, TabPane,
} from 'reactstrap';
import classnames from 'classnames';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Panel from '../../../../shared/components/Panel';

class TabsPanelDivider extends PureComponent {
  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      activeTab: '1',
    };
  }

  toggle = (tab) => {
    const { activeTab } = this.state;
    if (activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  };

  render() {
    const { t } = this.props;
    const { activeTab } = this.state;

    return (
      <Panel xs={12} md={12} lg={6} divider title={t('ui_elements.panels.tabs_panel_divider')}>
        <div className="tabs--bordered-bottom">
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => {
                  this.toggle('1');
                }}
              >
                Sales
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => {
                  this.toggle('2');
                }}
              >
                Statistic
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '3' })}
                onClick={() => {
                  this.toggle('3');
                }}
              >
                Offers
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '4' })}
                onClick={() => {
                  this.toggle('4');
                }}
              >
                Refounds
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <p className="typography-message">
                Direction has strangers now believing. Respect enjoyed gay far exposed parlors towards. Enjoyment
                use tolerably dependent listening men.
              </p>
            </TabPane>
            <TabPane tabId="2">
              <p className="typography-message">
                Direction has strangers now believing. Respect enjoyed gay far exposed parlors towards. Enjoyment
                use tolerably dependent listening men. No peculiar in handsome together unlocked do by.
              </p>
            </TabPane>
            <TabPane tabId="3">
              <p className="typography-message">
                Direction has strangers now believing. Respect enjoyed gay far exposed parlors towards. Enjoyment
                use tolerably dependent listening men. No peculiar in handsome together unlocked do by.
              </p>
            </TabPane>
            <TabPane tabId="4">
              <p className="typography-message">
                Enjoyment use tolerably dependent listening men. No peculiar in handsome together unlocked do by.
                Article concern joy anxious did picture sir her.
              </p>
            </TabPane>
          </TabContent>
        </div>
      </Panel>
    );
  }
}

export default withTranslation('common')(TabsPanelDivider);
