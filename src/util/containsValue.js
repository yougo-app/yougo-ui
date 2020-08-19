const containsValue = (value) => (obj) =>
	Object.values(obj).some((v) => v.toLowerCase().indexOf(value) >= 0);

export default containsValue;
