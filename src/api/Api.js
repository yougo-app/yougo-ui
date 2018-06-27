export default class Api {
	constructor({url}) {
		this.url = url.replace(/\/$/, '');
		this.bookmarksUrl = `${this.url}/bookmarks`;
	}

	getBookmarks = () => this.get(this.bookmarksUrl);

	createAlias = (alias, href) => this.post(this.bookmarksUrl, {alias, href});

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
