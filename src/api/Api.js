export default class Api {
	constructor({url}) {
		this.url = url.replace(/\/$/, '');
		this.gosUrl = `${this.url}/gos`;
	}

	getGos = () => this.get(this.gosUrl);

	createGo = (go, href) => this.post(this.gosUrl, {go, href});

	get = endpoint => ({
		endpoint,
		method: 'GET',
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
