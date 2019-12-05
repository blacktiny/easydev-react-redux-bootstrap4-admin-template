export const LOAD_CRYPTO_TABLE_DATA = 'LOAD_CRYPTO_TABLE_DATA';
export const CHANGE_CRYPTO_TABLE_DATA = 'CHANGE_CRYPTO_TABLE_DATA';
export const DELETE_CRYPTO_TABLE_DATA = 'DELETE_CRYPTO_TABLE_DATA';

export function loadCryptoTableData(index) {
  return {
    type: LOAD_CRYPTO_TABLE_DATA,
    index,
  };
}

export function changeCryptoTableData(data, index) {
  return {
    type: CHANGE_CRYPTO_TABLE_DATA,
    data,
    index,
  };
}

export function deleteCryptoTableData(items) {
  return {
    type: DELETE_CRYPTO_TABLE_DATA,
    items,
  };
}
