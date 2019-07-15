# Changelog

All notable changes to this project will be documented in this file. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

### Changed

### Deprecated

### Removed

### Fixed

### Security

## 1.0.0 - YYYY-MM-DD 

## 1.0.0 - 2019-07-15

All notable changes to "Introduction to Node Servers with Hapi.js” will be documented in this file.

### Added

- Added `@hapi#18.3.1`.
- Added `@hapi/inert#5.2.0`
- Added `@hapi/vision#5.5.2`.
- Added `@hapi/joi#15.0.3`.
- Added `curl#0.1.4`.
- Created this repository.
- Added this CHANGELOG file.
- Added individual lessons as folders to be included under the master branch.
- Added support for yarn workspaces.
- On lessons that include httpie, curl was installed in addition because httpie is unable to work on code sandbox. 
- Added async functions to include all `server.register()` and `server.start()` methods.
- Register plugins using `await server.register(plugin)` now.
- Added `isSecure: false` to the `server.state()`, as well as the `server.route()` on lesson 12 to fix errors.

### Changed

- Update `nodemon#->1.18.10`.
- Update `good#6.4.0->8.1.2`.
- Update `good-console#5.1.0->8.0.0`.
- Update `boom#3.1.1->7.3.0`.
- Update `handlebars#4.0.5->4.1.2`.
- Update `path#0.12.7->0.12.7`.
- Updated `httpie#0.8.0->1.1.2`.
- Changed `inert` dependency to `@hapi/inert`.
- Changed `vision` dependency to `@hapi/vision`.
- Changed `joi` dependency to `@hapi/joi`.


### Removed

- Removed `server.connection()` from the beginning of every lesson as it is not needed anymore.
- Removed all reply parameters in place of new response toolkit, 'h'. Values now returned in function handlers. This applies to every lesson except for lesson 6.

### Deprecated

- `hapi#11.0.2`.
- `inert#5.1.3`.
- `vision#5.4.4`.
- `joi#14.3.1`.