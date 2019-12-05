export const CHANGE_DIRECTION_TO_LTR = 'CHANGE_DIRECTION_TO_LTR';
export const CHANGE_DIRECTION_TO_RTL = 'CHANGE_DIRECTION_TO_RTL';

export function changeDirectionToLTR() {
  return {
    type: CHANGE_DIRECTION_TO_LTR,
  };
}

export function changeDirectionToRTL() {
  return {
    type: CHANGE_DIRECTION_TO_RTL,
  };
}
