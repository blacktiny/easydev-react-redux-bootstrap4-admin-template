import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import LoadingIcon from 'mdi-react/LoadingIcon';
import classNames from 'classnames';

export default class Expand extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    outline: PropTypes.bool,
    color: PropTypes.string,
  };

  static defaultProps = {
    title: '',
    outline: false,
    color: 'secondary',
  };

  constructor() {
    super();
    this.state = {
      load: false,
    };
  }

  onLoad = () => {
    this.setState({
      load: true,
    });
    this.request();
  };

  request = () => {
    // your async logic here
    setTimeout(() => this.setState({ load: false }), 5000);
  };

  render() {
    const { load } = this.state;
    const { color, outline, title } = this.props;
    const expandClass = classNames({
      icon: true,
      expand: true,
      'expand--load': load,
    });

    return (
      <Button
        onClick={this.onLoad}
        className={expandClass}
        color={color}
        outline={outline}
      >
        <p><LoadingIcon /> {title}</p>
      </Button>
    );
  }
}
