install: install-deps

run:
	npx babel-node -- 'src/bin/getgeo.js' 134.234.3.2

default:
	npx babel-node -- 'src/bin/getgeo.js'

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
