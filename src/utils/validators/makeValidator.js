export default (predicate, message) => value => (predicate(value) ? undefined : message);
