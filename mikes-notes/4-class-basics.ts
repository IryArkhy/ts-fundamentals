import { HasPhoneNumber, HasEmail } from "./1-basics";

// == CLASSES == //

/**
 * (1) Classes work similarly to what you're used to seeing in JS
 * -   They can "implement" interfaces
 */

//Implements means that a class is aligning with a particular interface

export class Contact implements HasEmail {
    email: string;
    name: string;
    constructor(name: string, email: string) {
        this.email = email;
        this.name = name;
    }
}

/**
 * (2) This looks a little verbose -- we have to specify the words "name" and "email" 3x.
 * -   Typescript has a shortcut: PARAMETER PROPERTIES
 */

/**
 * (3) Access modifier keywords - "who can access this thing"
 *
 * - public - everyone
 * - protected - me and subclasses
 * - private - only me
 */

//thereis also -readonly - does not prevent access (anyone can see it) but you then could not change it by rewriting it.

class ParamPropContact implements HasEmail {
    constructor(
        public name: string,
        protected email: string = "no email"
    ) {
        // nothing else needed
    }
}
//"no email" - default value
//ParamPropContact has sqwigly lines and yells at us because it's incorectly implements interface because 'email' field is not visible. So the fields should be public

const x = new ParamPropContact('a', 'b');
x.email // 😡
x.name // ✅
/**
 * (4) Class fields can have initializers (defaults)
 */
class OtherContact implements HasEmail, HasPhoneNumber {
    protected age: number = 0;
    //if you delete undefined it'll yell at you. 
    private password: string | undefined;
    constructor(
        public name: string,
        public email: string,
        public phone: number) {
        this.age = 35;
        // () password must either be initialized like this, or have a default value. If you uncomment the initialization of the password below you can delet "| undefined" up there in the "private" field

        // this.password = Math.round(Math.random() * 1e14).toString(32);
    }
}

const x = new ParamPropContact('a', 'b');
x.email // 😡
x.name // ✅
/**
 * (4) Class fields can have initializers (defaults)
 */
class OtherContact2 implements HasEmail, HasPhoneNumber {
    protected age: number = 0;
    // ! - defenite assignment operator: "Trust me TS, I'm taking responsibility for making sure that this field gets initialized properly"
    private password!: string;
    constructor(
        public name: string,
        public email: string,
        public phone: number) {
    }
    async init() {
        this.password = Math.round(Math.random() * 1e14).toString(32);
    }
}

class OtherContact3 implements HasEmail, HasPhoneNumber {
    protected age: number = 0;
    private passwordVal: string | undefined;
    constructor(
        public name: string,
        public email: string,
        public phone: number) {
    }
    //getter
    get password(): string {
        if (!this.passwordVal) this.passwordVal = Math.round(Math.random() * 1e14).toString(32);
        return this.passwordVal;
    }
}

/**
 * (5) TypeScript even allows for abstract classes, which have a partial implementation
 */

abstract class AbstractContact implements HasEmail, HasPhoneNumber {
    public abstract phone: number; // must be implemented by non-abstract subclasses

    constructor(
        public name: string,
        public email: string // must be public to satisfy HasEmail
    ) { }

    abstract sendEmail(): void; // must be implemented by non-abstract subclasses
}

/**
 * (6) implementors must "fill in" any abstract methods or properties
 */
class ConcreteContact extends AbstractContact {
    constructor(
        public phone: number, // must happen before non property-parameter arguments
        name: string,
        email: string
    ) {
        super(name, email);
    }
    sendEmail() {
        // mandatory! Take it away - its gonna yell at you
        console.log("sending an email");
    }
}
