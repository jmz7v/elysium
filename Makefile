setup:
	rm -rf node_modules && \
	npm install

build:
	cross-env NODE_ENV=production webpack -p

run:
	webpack-dev-server --history-api-fallback --host 0.0.0.0 --port 3000 --hot --inline --progress