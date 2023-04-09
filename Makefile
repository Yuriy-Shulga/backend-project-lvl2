install:
	npm ci

status:
	git status -s

publish:
	npm publish --dry-run

lint:
	npx eslint . --fix

test:	status lint

link:
	npm link
