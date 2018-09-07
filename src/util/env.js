export default (key, def) => process.env[`REACT_APP_${key}`] || def;
