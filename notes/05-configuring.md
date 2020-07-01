**Configuring TS**

1. In the root folder create tsconfig.json
2. **"declaration": true** in compilerOptions

Creates type declaration files that are meant to layer on top of the JS that it represents.

VS code reads it and match it with JS and understands that these are the types that are meant to go along with JS (aliases).

3. **"sourceMap": true**
Files that let us debug through ts files even though in fact .js files are running in the browser.

"*if you put break points in your code, it's what would, in your debugger, map that break point back to the original TypeScript source. So you kind of feel as if you're debugging through TypeScript code, when in fact, that is not what's running*.
*What's running is the JavaScript*".

NOTE: for another options see the presentation slide on config file.

**"jsx": "react"**
Transforms jsx. If you create *.tsx files - these are TS versions for React

**"strict": true**
"strict" features enabled

**"noImplicitAny": true**
Forbids implicit any returns (any type could be returned) from functions: you have to specify the return value.

etc.



