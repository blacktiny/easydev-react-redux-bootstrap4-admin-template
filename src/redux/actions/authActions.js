export const AUTHENTICATE = 'AUTHENTICATE';
export const AUTHENTICATE_ERROR_AUTH = 'AUTHENTICATE_ERROR_AUTH';

export function auth({ name, avatar }) {
  return {
    type: AUTHENTICATE,
    user: { name, avatar },
  };
}

export function authError(error) {
  return {
    type: AUTHENTICATE_ERROR_AUTH,
    error,
  };
}
