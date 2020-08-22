const goApi = Object.freeze({
	gos: '/v1/gos',
	go: (id) => `/v1/gos/${id}`,
});

export default goApi;
