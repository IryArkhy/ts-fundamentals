**Flags**
1. Заходим в рабочую папку: cd examples/hello-ts
2.  Compiles by defalt to ES3 with support for Internet Exploer. In the same foulder you will see the new file index.js)
   🎱 tsc src/index.ts 

3. Compiles to the newer syntax of ES2015
   🎱 tsc src/index.ts --target ES2015

4.  Compiles to the newer syntax of ES2017
   🎱tsc src/index.ts --target ES2017


5.  Run the compiled file. You'll get an error if you use ES6 modules. Node uses CommonJS modules
   🎱 node src/index.js

6. Compiles and change ES6 modules to commonjs. Works with node
   🎱 tsc src/index.ts --target es2017 --module commonjs

7. --watch flag leaves compiler running
  🎱 tsc src/index.ts --target es2017 --module commonjs --watch