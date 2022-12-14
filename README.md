## Typescript Sandbox

Typescript introduces a type system for Javascript, making it easier to spot errors during development time. 

The Typescript compiler is responsible for compiling your Typescript into Javascript.

### To install Typescript:

```shell
npm install -g typescript
tsc --help
```

### To compile and run a single Typescript file in this project:

The majority of the code in this project is structured as individual Typescript files, which can be compiled and run independently:

```shell
tsc my_file.js
node my_file.js
```

You can also setup tsc to 'watch' your files and recompile when changes are detected - see [here](08-typescript-compiler) for config: 

```shell
tsc --watch
```

You can also use:

```shell
npx ts-node src/script.ts
```

### To run Typescript as part of a Node project.

Please see [the dedicated section](10-integrated-node-and-ts-project) on this.


