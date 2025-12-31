# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

| Icon | Description                                                    |
| ---- | -------------------------------------------------------------- |
| 👷🏻   | Related to development experience and non-production impacting |

## [Unreleased]

### Changed

- 👷🏻 Test framework moved from Jest to Node.js test runner, by [@compulim](https://github.com/compulim) in PR [#33](https://github.com/compulim/auto-reset-event/pull/33)

## [2.0.0] - 2025-12-24

### Changed

- Moved to native `Promise.withResolvers` from `p-defer`
- Exported in both ESModules and CommonJS with named export
- Bumped dependencies, in PR [#29](https://github.com/compulim/auto-reset-event/pull/29)
  - Development dependencies
    - [`@typescript-eslint/eslint-plugin@8.50.1`](https://npmjs.com/package/@typescript-eslint/eslint-plugin/v/8.50.1)
    - [`@typescript-eslint/parser@8.50.1`](https://npmjs.com/package/@typescript-eslint/parser/v/8.50.1)
    - [`eslint@9.39.2`](https://npmjs.com/package/eslint/v/9.39.2)
    - [`eslint-import-resolver-typescript@4.4.4`](https://npmjs.com/package/eslint-import-resolver-typescript/v/4.4.4)
    - [`eslint-plugin-import@2.32.0`](https://npmjs.com/package/eslint-plugin-import/v/2.32.0)
    - [`eslint-plugin-prettier@5.5.4`](https://npmjs.com/package/eslint-plugin-prettier/v/5.5.4)
    - [`eslint-plugin-react@7.37.5`](https://npmjs.com/package/eslint-plugin-react/v/7.37.5)
    - [`prettier@3.7.4`](https://npmjs.com/package/prettier/v/3.7.4)

## [1.1.0] - 2020-05-26

### Changed

- Bump dependencies, in PR [#5](https://github.com/compulim/auto-reset-event/pull/5)
   - [`@babel/cli@7.8.4`](https://npmjs.com/package/@babel/cli)
   - [`@babel/core@7.9.6`](https://npmjs.com/package/@babel/core)
   - [`@babel/plugin-proposal-object-rest-spread@7.9.6`](https://npmjs.com/package/@babel/plugin-proposal-object-rest-spread)
   - [`@babel/plugin-transform-runtime@7.5.5`](https://npmjs.com/package/@babel/plugin-transform-runtime)
   - [`@babel/preset-env@7.9.6`](https://npmjs.com/package/@babel/preset-env)
   - [`@babel/runtime@7.9.6`](https://npmjs.com/package/@babel/runtime)
   - [`babel-jest@26.0.1`](https://npmjs.com/package/babel-jest)
   - [`babel-plugin-add-module-exports@1.0.2`](https://npmjs.com/package/babel-plugin-add-module-exports)
   - [`delay@4.3.0`](https://npmjs.com/package/delay)
   - [`has-resolved@1.1.0`](https://npmjs.com/package/has-resolved)
   - [`jest@26.0.1`](https://npmjs.com/package/jest)
   - [`p-defer-es5@1.0.1`](https://npmjs.com/package/p-defer-es5)
   - [`p-defer@3.0.0`](https://npmjs.com/package/p-defer)
   - [`regenerator-runtime@0.13.5`](https://npmjs.com/package/regenerator-runtime)
- Bump dependencies, in PR [#1](https://github.com/compulim/auto-reset-event/pull/1)
   - [@babel/cli@^7.5.5](https://www.npmjs.com/package/@babel/cli)
   - [@babel/core@^7.5.5](https://www.npmjs.com/package/@babel/core)
   - [@babel/plugin-transform-runtime@^7.5.5](https://www.npmjs.com/package/@babel/plugin-transform-runtime)
   - [@babel/preset-env@^7.5.5](https://www.npmjs.com/package/@babel/preset-env)
   - [babel-jest@^24.8.0](https://www.npmjs.com/package/babel-jest)
   - [delay@^4.3.0](https://www.npmjs.com/package/delay)
   - [has-resolved@^1.1.0](https://www.npmjs.com/package/has-resolved)
   - [jest@^24.8.0](https://www.npmjs.com/package/jest)
   - [regenerator-runtime@^0.13.2](https://www.npmjs.com/package/regenerator-runtime)

## [1.0.0] - 2018-10-03

### Added

- Initial public release

[Unreleased]: https://github.com/compulim/auto-reset-event/compare/v2.0.0...HEAD
[2.0.0]: https://github.com/compulim/auto-reset-event/compare/v1.1.0...v2.0.0
[1.1.0]: https://github.com/compulim/auto-reset-event/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/compulim/auto-reset-event/releases/tag/v1.0.0
