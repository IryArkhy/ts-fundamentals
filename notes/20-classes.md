
#Abstract classes
Abstract classes cannot be instantiated directly, they just serve as base classes. So unlike in interface, which also can't be instantiated, abstract classes can have implementations.

It's like half class and half interface. Abstract fields MUST be implemented by non-abstract subclasses

Fields in abstract classes should be public because otherwise it doesn't make sanse to have an abstract class (a role model) for other classes. Private fields would not be visible for subclasses.