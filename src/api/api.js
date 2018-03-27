export default class Api {
	constructor(props) {
		this.url = props.url.replace(/\/$/, '');
		this.urlVersion = 'v1';
	}

	static get(endpoint) {
		return {
			endpoint,
			method: 'GET',
			headers: {
				Accept: 'application/json',
			},
		};
	}

	static post(endpoint, body) {
		return {
			endpoint,
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		};
	}

	setUrl(url) {
		this.url = url.replace(/\/$/, '');
	}

	getUrl() {
		return this.url;
	}

	getUrlVersion() {
		return this.urlVersion;
	}

	getBaseRoute() {
		return `${this.getUrl()}/${this.getUrlVersion()}`;
	}

	getBookmarksRoute() {
		return `${this.getBaseRoute()}/bookmarks`;
	}

	getBookmarks() {
		return Api.get(this.getBookmarksRoute());
	}

	createAlias(alias, href, description) {
		return Api.post(this.getBookmarksRoute(), {
			aliases: [alias], href, description,
		});
	}
}
