# Reciplease (Web)

## Folder Structure

The main parts of the projects are:

```
- config: (submodule)
- docker: (submodule)
- docs: (submodule)
- files: (submodule)
- designs (submodule)
- packages:
	- @reciplease/types: TypeScript types.
	- @reciplease/assets: Default assets.
		- fonts
		- images
	- @reciplease/components: Reuseable UI Components.
		- atoms
		- modules
		- organisms
	- @reciplease/views: Reuseable UI Screens.
		- templates
		- screens
	- @reciplease/routes: Customisable navigation structure.
	- @reciplease/styles: Customisable themes engine.
		- dark
		- light
	- @reciplease/locales: Customisable locales engine.
		- en_UK
		- en_US
	- @reciplease/services: Reuseable Data Layer.
	- @reciplease/client: Frontend client.
		- public
		- src
	- @reciplease/utils: Reuseable utilities.
- libs:
	- scripts
	- storybook
	- webpack
	- gulp
- scripts: (submodule)
- tests: (optional)
```