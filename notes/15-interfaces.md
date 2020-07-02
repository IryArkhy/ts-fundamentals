#Type aliases

Type aliases - you just give a name to a specific type

type StringOrNum = string | number;
Now you can reference the combination string | number by name StringOrNum.

Interfaces can describe:
- objects;
- functions;
- arrays.

Interfaces are kind of like functions, they're parsed like functions. In that, we know that an interface exists and has a particular name as we go through in parse things. But, only when we attempt to actually access it and use it will we end up figuring out what are the allowable types for this thing.

So, type aliases are kind of sorted out eagerly, interfaces are sorted out lazily.

#Testing Types

See: challenges/json-types/test/json-types.test.ts

Microsoft library for testing: dtslint