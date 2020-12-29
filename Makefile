#!/bin/make

RECIPLEASE_WEB_PATH := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))
RECIPLEASE_WEB_NAME ?= "Reciplease Web"
RECIPLEASE_WEB_VERSION ?= "0.1.0"
RECIPLEASE_WEB_DESCRIPTION ?= "Frontend for Reciplease."

ENV ?= local
include config/.env.$(ENV)
export

.DEFAULT_GOAL := help-frontend
.PHONY: help-frontend #: List available command.
help: help-frontend # alias for quick access
help-frontend:
	@awk 'BEGIN {FS = " ?#?: "; print ""$(RECIPLEASE_WEB_NAME)" "$(RECIPLEASE_WEB_VERSION)"\n"$(RECIPLEASE_WEB_DESCRIPTION)"\n\nUsage: make \033[36m<command>\033[0m\n\nCommands:"} /^.PHONY: ?[a-zA-Z_-]/ { printf "  \033[36m%-10s\033[0m %s\n", $$2, $$3 }' $(MAKEFILE_LIST)

.PHONY: docs-frontend #: Run documentation.
docs: docs-frontend # alias for quick access
docs-frontend:
	@false

.PHONY: lint-frontend #: Run linting.
lint: lint-frontend # alias for quick access
lint-frontend:
	@false

.PHONY: tests-frontend #: Run tests.
tests: tests-frontend # alias for quick access
tests-frontend:
	@cd ${RECIPLEASE_WEB_PATH} && \
	${YARN} test

.PHONY: run-frontend #: Run frontend app.
run: run-frontend # alias for quick access
run-frontend:
	@cd ${RECIPLEASE_WEB_PATH} && \
	${YARN} start

# Run scripts using make
%:
	@cd ${RECIPLEASE_WEB_PATH} && \
	if [[ -f "scripts/${*}.sh" ]]; then \
	${SHELL} "scripts/${*}.sh"; fi

.PHONY: init-frontend #: Download Javascript dependencies.
init: init-frontend
init-frontend:
	@cd ${RECIPLEASE_WEB_PATH} && \
	${YARN} install
