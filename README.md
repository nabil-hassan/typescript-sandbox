## Typescript Sandbox

Typescript introduces a type system for Javascript, making it easier to spot errors during development time. 

The Typescript compiler is responsible for compiling your Typescript into Javascript.

### The actual sandbox

To experiment with Typescript, refer to [the actual sandbox](the-sandbox) folder.

Also, create yourself an IntelliJ ts-node configuration following the guidelines [here](https://www.jetbrains.com/help/idea/running-and-debugging-typescript.html#ws_ts_run_debug_directly_ceate_node_config).

NB for intellij make sure to install typescript and ts-node ON THE PROJECT ROOT.

It won't work if you just install them in sub modules!!!

```shell
npm install ts-node --save-dev
npm install typescript --save-dev
npm install --save-dev @types/nod
```

You may also want to add a `tsconfig.json` file to your project root to configure the Typescript compiler. 

An example of a minimal `tsconfig.json` file is as follows:

```json
{
  "compilerOptions": {
    "outDir": "./dist",
    "allowJs": true,
    "target": "es5"
  },
  "include": ["./src/**/*"],
  "exclude": ["tests/**", "*.spec.ts", "*.test.js", "node_modules"]
}
```

### To install Typescript globally (not recommended):

```shell
npm install -g typescript
tsc --help
```

### To compile and run a single Typescript file in this project:

The majority of the code in this project is structured as individual Typescript files, which can be compiled and run independently:

```shell
tsc my_file.ts
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

Please see [the dedicated section](99-integrated-node-and-ts-project) on this.


