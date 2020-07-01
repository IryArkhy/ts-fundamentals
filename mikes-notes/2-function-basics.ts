import { HasEmail, HasPhoneNumber } from "./1-basics";

//== FUNCTIONS ==//

// (1) function arguments and return values can have type annotations

//parameter "to" has a type of HasEmail
//func() returns an object of { recipient: string; body: string }
function sendEmail(to: HasEmail): { recipient: string; body: string } {
    return {
        recipient: `${to.name} <${to.email}>`, // Mike <mike@example.com>
        body: "You're pre-qualified for a loan!"
    };
}

//TS can infer the return type but it's easy to slip an change things, therefore, always use annotations for return types

// (2) or the arrow-function variant
const sendTextMessage = (
    to: HasPhoneNumber
): { recipient: string; body: string } => {
    return {
        recipient: `${to.name} <${to.phone}>`,
        body: "You're pre-qualified for a loan!"
    };
};

// (3) return types can almost always be inferred - hover over to see
function getNameParts(contact: { name: string }) {
    const parts = contact.name.split(/\s/g); // split @ whitespace

    //If only one name: Madonna, Sher. Uncomment to see that return type now has 2 options
    // if (parts.length === 1) {
    //     return { name }
    // }

    if (parts.length < 2) {
        throw new Error(`Can't calculate name parts from name "${contact.name}"`);
    }
    return {
        first: parts[0],
        middle:
            parts.length === 2
                ? undefined
                : // everything except first and last
                parts.slice(1, parts.length - 2).join(" "),
        last: parts[parts.length - 1]
    };
}

// (4) rest params work just as you'd think. Type must be array-ish
const sum = (...vals: number[]) => vals.reduce((sum, x) => sum + x, 0);
console.log(sum(3, 4, 6)); // 13

// (5) we can even provide multiple function signatures

// "overload signatures"
function contactPeople(method: "email", ...people: HasEmail[]): void;
function contactPeople(method: "phone", ...people: HasPhoneNumber[]): void;

// "function implementation"
function contactPeople(
    method: "email" | "phone",
    ...people: (HasEmail | HasPhoneNumber)[]
): void {
    if (method === "email") {
        (people as HasEmail[]).forEach(sendEmail);
    } else {
        (people as HasPhoneNumber[]).forEach(sendTextMessage);
    }
}

// ✅ email works
contactPeople("email", { name: "foo", email: "" });

// ✅ phone works
contactPeople("phone", { name: "foo", phone: 12345678 });

// 🚨 mixing does not work. SHOULD not work but it works if do not have "overload signatures" because (b/c) we provided "email" | "phone" - ether email or phone. We did not specified that there are some disallowed combinations

//If you uncomment overload signatures - there will be an error
contactPeople("email", { name: "foo", phone: 12345678 });



// (6) the lexical scope (this) of a function is part of its signature

function sendMessage(
    this: HasEmail & HasPhoneNumber,
    preferredMethod: "phone" | "email"
) {
    if (preferredMethod === "email") {
        console.log("sendEmail");
        sendEmail(this);
    } else {
        console.log("sendTextMessage");
        sendTextMessage(this);
    }
}
const c = { name: "Mike", phone: 3215551212, email: "mike@example.com" };

function invokeSoon(cb: () => any, timeout: number) {
    setTimeout(() => cb.call(null), timeout);
}

// 🚨 this is not satisfied. It's not enough just to pass email
invokeSoon(() => sendMessage("email"), 500);

// ✅ creating a bound function is one solution
const bound = sendMessage.bind(c, "email");
invokeSoon(() => bound(), 500);

// ✅ call/apply works as well
invokeSoon(() => sendMessage.apply(c, ["phone"]), 500);

export default {};


