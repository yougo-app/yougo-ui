export default class Api {
	constructor({url}) {
		this.url = url.replace(/\/$/, '');
		this.gosUrl = `${this.url}/gos`;
	}

	getGos = () => this.get(this.gosUrl);

	createGo = (go, href) => this.post(this.gosUrl, {go, href});

	deleteGo = id => this.delete(`${this.gosUrl}/${id}`);

	get = endpoint => ({
		endpoint,
		method: 'GET',
		headers: {
			Accept: 'application/json',
		},
	});

	delete = endpoint => ({
		endpoint,
		method: 'DELETE',
		headers: {
			Accept: 'application/json',
		},
	});

	post = (endpoint, body) => ({
		endpoint,
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	});
}
