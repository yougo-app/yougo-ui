export default function containsValue(value) {
	return (obj) => Object.values(obj).some((v) => v.toLowerCase().indexOf(value) >= 0);
}
