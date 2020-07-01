**Lexiacl scope**

look lexical scope example at: mikes-notes/2-function-basics.ts

JavaScript has this thing called *lexical scope*. 

Lexical scope just means, what is the value of **this** when you invoke a function. *This* is important if you deal with, building something like a single-page app, and you have components, and those components have things that are bound to DOM events.

You need to make sure that your events fire in a way that allows you to access stuff on your component, to make things nice and convenient. 
_______________
So *this* is actually part of a function signature.
_______________


But if you're gonna really depend on being able to do something like what we're doing here, we need the value of this to be correct. So you only need to put in your function signature at the very beginning, under a pseudo-parameter called *this*, and type-checking will be done to make sure that everything looks okay.

So I'm gonna create an object that kind of meets this constraint, so that we can see, explore how this works. 

And I'm creating a function called invokeSoon, and it's deliberately passing null along as the lexical scope.

And it's a little bit contrived, but I'm just trying to show you kinda how this works.

So If we try to invoke this, we'll see that it's not enough to just pass email along, right? We have a string here that can be email or phone. No matter which one I pick, I still get a type-checking error, and the reason is, this constraint is not satisfied.

We could solve this two ways, we could bind the function: Create a bound version of the function. So behind the scenes, we're creating a closure around the function, and ensuring that it's invoked with the correct lexical scope. 
Or we could use call and apply, and as of a very recent TypeScript release, it escapes me which one, you can enable strict type-checking with bind, call, and apply.

You don't run into this a lot, but now you understand everything, everything you really need to know to get started with functions. And note that, of course, we don't, this appears to be an additional argument, you do not have to pass two arguments to this function. This function accepts one parameter, still.

