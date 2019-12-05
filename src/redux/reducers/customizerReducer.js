import {
  CHANGE_BORDER_RADIUS,
  TOGGLE_BOX_SHADOW,
  TOGGLE_TOP_NAVIGATION,
} from '../actions/customizerActions';

const initialState = {
  squaredCorners: false,
  withBoxShadow: false,
  topNavigation: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_BORDER_RADIUS:
      return { ...state, squaredCorners: !state.squaredCorners };
    case TOGGLE_BOX_SHADOW:
      return { ...state, withBoxShadow: !state.withBoxShadow };
    case TOGGLE_TOP_NAVIGATION:
      return { ...state, topNavigation: !state.topNavigation };
    default:
      return state;
  }
}
