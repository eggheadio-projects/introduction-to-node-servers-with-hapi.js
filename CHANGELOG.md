# Changelog

All notable changes to "Introduction to Node Servers with Hapi.js” will be documented in this file.

## 1.0.0

### Added

- Created this repository.
- Added this file.
- Added individual lessons as folders to be included under the master branch.
- Added support for yarn.
- Added code sandbox compatibility.
- On lessons that include httpie, curl was installed in addition because httpie is unable to work on code sandbox. 
- Added async functions to include all server.register() and server.start() methods.
- Register plugins using 'await server.register(plugin)' now.
- Added 'isSecure: false' to the server.state(), as well as the server.route() on lesson 12 to fix errors.

### Changed

- Update `nodemon#->1.18.10`.
- Update `good#6.4.0->8.1.2`.
- Update `good-console#5.1.0->8.0.0`.
- Update `boom#3.1.1->7.3.0`.
- Update `handlebars#4.0.5->4.1.2`.
- Update `path#0.12.7->0.12.7`.
- Updated `httpie#0.8.0->1.1.2`.
- Added `@hapi#18.3.1`.
- Added `@hapi/inert#5.2.0`
- Added `@hapi/vision#5.5.2`.
- Added `@hapi/joi#15.0.3`.
- Added `curl#0.1.4`.
- Removed `hapi#11.0.2`.
- Removed `inert#5.1.3`.
- Removed `vision#5.4.4`.
- Removed `joi#14.3.1`.

### Removed

- Changed 'inert' dependency to '@hapi/inert'.
- Changed 'vision' dependency to '@hapi/vision'.
- Changed 'joi' dependency to '@hapi/joi'.
- Removed server.connection() from the beginning of every lesson as it is not needed anymore.
- Removed all reply parameters in place of new response toolkit, 'h'. Values now returned in function handlers. This applies to every lesson except for lesson 6.
