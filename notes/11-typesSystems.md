**Types Systems and object shapes**
```
function validateInputField(input: HTMLInputElement){
/**/
}
validateInputField(x);
```

Nominal Type System - Java.
    Nominal type systems, like Java and almost every typed language out there, they would answer the question based on whether x is an instance of a class named whatever the type you're looking for.
    
    So this would require you to have all of your code set up in a fairly object-oriented way where you have constructors. And you're dealing primarily with instances of classes and you're passing things around. This isn't necessarily how JavaScript code is written. And this would require us to do a lot of rewriting and to make almost everything a class and an instance in order to have factories with specific names. So that we could take advantage of types.


Structural Type System - TypeScript.

ypeScript is a structural type system, they only care about the shape of an object. Which is property names and types that are allowed for those properties, right? So it only cares about the structure of an object. So, if we had like a data structure for a car, we could call it car.

But really, all we care about is the fact that it has properties called make, model and year that are of the appropriate types. Same goes for functions. We really only care about the arguments and the return type. And if you create a totally different function that meets those criteria, that will end up being type equivalent.

Wider VS Narrower

Terms that describe the level of specificity.

**Never TYPE**
We run into this never type when we were initializing an array with an empty array.

`let aa = []; aa of type never[];`

 Never is infinitely narrow, it literally can hold no value. I mean, it can hold a never, but it is like circular reasoning, right? You think of it like there is no hole, nothing can really pass through.

It is nothing and impossible, or unreachable, think of it that way