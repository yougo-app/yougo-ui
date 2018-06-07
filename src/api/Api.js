export default class Api {
	constructor(props) {
		this.url = props.url.replace(/\/$/, '');
		this.bookmarksUrl = `${this.url}/bookmarks`;
	}

	getBookmarks = () => this.get(this.bookmarksUrl);

	createAlias = (alias, href, description) =>
		this.post(this.bookmarksUrl, {
			aliases: [alias],
			href,
			description,
		});

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
