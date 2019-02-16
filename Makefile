install: install-deps

run:
	npx babel-node -- 'src/bin/getgeo.js' 37.214.79.98

install-deps:
	npm install

build:
	rm -rf dist
	npm run build

test:
	npm test

lint:
	npx eslint .

publish:
	npm publish

.PHONY: test
