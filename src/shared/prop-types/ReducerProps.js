import PropTypes from 'prop-types';

const {
  string, bool, shape, func,
} = PropTypes;

export const CustomizerProps = shape({
  squaredCorners: bool,
  withBoxShadow: bool,
  topNavigation: bool,
});

export const SidebarProps = shape({
  show: PropTypes.bool,
  collapse: PropTypes.bool,
});

export const ThemeProps = shape({
  className: string,
});

export const RTLProps = shape({
  direction: string,
});

export const UserProps = shape({
  fullName: string,
  avatar: string,
});

export const AuthOProps = shape({
  isAuthenticated: bool,
  loading: bool,
  user: shape({
    name: string,
    picture: string,
  }),
  logout: func,
});
