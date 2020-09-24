#!/bin/make

SHELL := "$(shell which bash)"
RECIPLEASE_WEB_NAME ?= "Reciplease Web"
RECIPLEASE_WEB_VERSION ?= "0.1.0"
RECIPLEASE_WEB_DESCRIPTION ?= "Frontend for Reciplease."

ENV ?= local
-include "config/.env.${ENV}"
export

%: %-frontend
	@true

.DEFAULT_GOAL := help-frontend
.PHONY: help-frontend #: Display a list of command and exit.
help-frontend:
	@awk 'BEGIN {FS = " ?#?: "; print ""$(RECIPLEASE_WEB_NAME)" "$(RECIPLEASE_WEB_VERSION)"\n"$(RECIPLEASE_WEB_DESCRIPTION)"\n\nUsage: make \033[36m<command>\033[0m\n\nCommands:"} /^.PHONY: ?[a-zA-Z_-]/ { printf "  \033[36m%-10s\033[0m %s\n", $$2, $$3 }' $(MAKEFILE_LIST)

.PHONY: init-frontend
init-frontend:
	@cd ${RECIPLEASE_WEB_PATH} && \
	[[ -d node_modules ]] || npm install

.PHONY: lint-frontend
lint-frontend: init-frontend
	@false

.PHONY: build-frontend
build-frontend: init-frontend
	@cd ${RECIPLEASE_WEB_PATH} && \
	npm run build

.PHONY: tests-frontend
tests: tests-frontend
tests-frontend:
	@cd ${RECIPLEASE_WEB_PATH} && \
	${YARN} test

.PHONY: run-frontend
run: run-frontend
run-frontend: init-frontend
	@cd ${RECIPLEASE_WEB_PATH} && \
	${YARN} start