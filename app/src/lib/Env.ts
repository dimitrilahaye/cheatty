export default {
	NODE_ENV: import.meta.env.VITE_NODE_ENV || process.env.NODE_ENV,
	API: import.meta.env.VITE_API || process.env.API,
	SENTRYURL: import.meta.env.VITE_SENTRYURL || process.env.SENTRYURL,
	SENTRYTRACES: import.meta.env.VITE_SENTRYTRACES || process.env.SENTRYTRACES
};
