# General Project Template

This project template is suitable for scenarios where a project has both a front-end and a back-end, as well as some
general libs.

## Requirement

- yarn 1.x
- node.js 12+

## Structure

- apps: runnable applications, such as front-end, back-end or cli
- packages: some generic libs for `apps`

## Commands

- `yarn build:lib` - build the code in `packages` folder
- `yarn test` - run tests
- `yarn lint` - run code linter

## Q&A

- Why still use the yarn@1.x rather than yarn@2.x or pnpm?

The project is probably a multi-person collaboration, and if one of them uses the Windows wsl file protocol directly,
[symlink cannot be parsed directly yet](https://github.com/microsoft/WSL/issues/5118)
