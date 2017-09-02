function createConstants(values) {
  let constants = {};
  values.forEach(value => {
    constants[value.toUpperCase()] = value.toUpperCase();
  });
  return constants;
}

function apiTypes(prefix) {
  return [prefix, `${prefix}_SUCCESS`, `${prefix}_FAIL`];
}

export default createConstants([
  ...apiTypes('GET_PROMPTS'),
  'INIT_AUTH',
  'SIGN_IN_ERROR',
  'SIGN_IN_SUCCESS',
  'SIGN_OUT_SUCCESS'
]);
