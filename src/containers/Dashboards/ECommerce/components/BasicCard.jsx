import React from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Panel from '../../../../shared/components/Panel';

const Dog = `${process.env.PUBLIC_URL}/img/for_store/dog/1.png`;

const BasicCard = ({ t }) => (
  <Panel md={12} lg={6} xl={3} xs={12}>
    <div className="dashboard__product">
      <div className="dashboard__product-img">
        <img src={Dog} alt="" />
      </div>
      <h5 className="bold-text dashboard__product-title">{t('dashboard_commerce.basic_card')}</h5>
      <h5 className="subhead dashboard__product-subhead">Knowledge nay estimable questions repulsive daughters
            boy.
      </h5>
      <p className="typography-message"><Link to="/e-commerce/catalog">View in the item list</Link></p>
    </div>
  </Panel>
);


BasicCard.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(BasicCard);
