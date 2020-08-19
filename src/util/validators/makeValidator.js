const makeValidator = (predicate, message) => (value) => (predicate(value) ? undefined : message);
export default makeValidator;
