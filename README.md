# lib-synchronet

# WORK IN PROGRESS -- NOT READY FOR GENERAL USE

TypeScript Definitions and Tools to build scripts/packages for Synchronet BBS

This is intended for creation of command shells, door games, or other full scripts
to run. It is not meant for creation of libraries within synchronet, but fully
functional scripts that run under synchronet.

## Type Definitions - TODO

Currently working on creating type definitions for all the Synchronet global
objects and method defined under the [Synchronet JavaScript Object Model Reference](https://synchro.net/docs/jsobjs.html))

- [x] \*defs files
- [ ] properties for all objects/classes defined (in progress, up to `src/interfaces/file.ts`)
- [ ] methods for all objects/classes defined

## Intended Usage

With node.js installed, assuming you have an empty directory, such as...

`/sbbs/mymods` - your custom mods, source, work from this directory.

Inside `/sbbs/mymods` create a `mods` and a `lib` directory.

```sh
/sbbs/mymods
> npm i -D @bbs/lib-synchronet
```

Create a module `/sbbs/mymods/mods/test.ts`

```js
// this will bring in the Synchronet Globals strongly typed.
import '@bbs/lib-synchronet`;

console.write('Test\n');
```

From here, you can build to `/sbbs/mods` with...

```sh
synchronet-project "./mods" /sbbs/mods
```

What this will do is match every file ending in `.ts` inside mods, build it,
and output the result to `/sbbs/mods/path-to-file.js`

NOTE: you do not want to copy abstractions or libraries into your `mymods/mods`,
you will want to reference them from `mymods/lib` or similar so they aren't
build individually.
