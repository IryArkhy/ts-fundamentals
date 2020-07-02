import * as path from "path";
//wild card import
import * as ts from "typescript";

function isDefined<T>(x: T | undefined): x is T {
  return typeof x !== "undefined";
}

// (1) Create the program
const program = ts.createProgram({
  //options: is equivalent conceptually to your tsconfig.json compilerOptions
  options: {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ESNext
  },
  rootNames: [
    // path to ../examples/hello-ts/src/index.ts
    path.join(__dirname, "..", "examples", "hello-ts", "src", "index.ts")
  ]
});

// // (2) Get the non-declaration (.d.ts) source files (.ts)
const nonDeclFiles = program
  .getSourceFiles()
  .filter(sf => !sf.isDeclarationFile);

// // (3) get the type-checker - takes all the types and interfaces that you create and the abstract syntax tree which is in memory representation of your code and it binds them together
const checker = program.getTypeChecker();

// /**
//  * (4) use the type checker to obtain the
//  * -   appropriate ts.Symbol for each SourceFile
//  */

//take all our files, iterate over them and for each file we're going to ask the checker for the symbol at the location of that file. Then we are filtering out everything that might be "undefined"
const sfSymbols = nonDeclFiles
  .map(f => checker.getSymbolAtLocation(f))
  .filter(isDefined); // here's the type guard to filter out undefined

// (5) for each SourceFile Symbol
sfSymbols.forEach(sfSymbol => {
  const { exports: fileExports } = sfSymbol;
  //log out each symbol's name
  console.log(sfSymbol.name);
  if (fileExports) {
    // - if there are exports
    console.log("== Exports ==");
    //let's iterate over the exports
    fileExports.forEach((value, key) => {
      // - for each export
      console.log(
        key, // - log its name

        // - and its type (stringified)
        checker.typeToString(checker.getTypeAtLocation(value.valueDeclaration))
      );
      const jsDocTags = value.getJsDocTags();
      if (jsDocTags.length > 0) {
        // - if there are JSDoc comment tags
        console.log(
          // - log them out as key-value pairs
          jsDocTags.map(tag => `\t${tag.name}: ${tag.text}`).join("\n")
        );
      }
    });
  }
});
