const goApi = Object.freeze({
	go: '/v1/go',
	gos: '/v1/gos',
	gosById: (id) => `/v1/gos/${id}`,
});

export default goApi;
