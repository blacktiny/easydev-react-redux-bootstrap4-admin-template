import {
  AUTHENTICATE,
  AUTHENTICATE_ERROR_AUTH,
} from '../actions/authActions';

const initialState = {
  fullName: 'Roman Johanson',
  avatar: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATE:
      return { fullName: action.user.name, avatar: action.user.avatar };
    case AUTHENTICATE_ERROR_AUTH:
      return { error: action.error };
    default:
      return state;
  }
}
