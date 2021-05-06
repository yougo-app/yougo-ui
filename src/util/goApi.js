const goApi = Object.freeze({
	gos: '/gos',

	gosByAlias: (alias) => `/gos/${alias}`,
});

export default goApi;
