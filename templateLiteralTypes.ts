// https://betterprogramming.pub/mastering-typescript-template-literal-types-f4131a94ffb1

type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";
// ---cut---
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
type Lang = "en" | "ja" | "pt";

//define template to text
type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`;
//   ^?

const text: LocaleMessageIDs = 'en_email_heading_id'



// type CustomObject = {
//     foo: string
//   }
  
//   // ❌ target type is invalid
//   type target = `get${CustomObject}`
  
//   // scenario 2 
//   type complexUnion = string | number | bigint | boolean | null | undefined;
  
//   // ✅ target2 is of type `get${string}` | `get${number}` | `get${bigint}`
//   type target2 = `get${complexUnion}`

// Uppercase<StringType>: will transform the string literal to uppercase.
// Lowercase<StringType>: will transform the string literal to lower.
// Capitalize<StringType>: will uppercase the first letter.
// Uncapitalize<StringType>: will lowercase the first letter.


type property = 'phone';
// ✅ UppercaseProperty is 'PHONE'
type UppercaseProperty = Uppercase<property>;


// create new interface by extends have type , url , body

interface Message {
    type: string;
    url: string;
}

interface SuccessMessage extends Message {
    type: `${string}Success`;
    body: string;
}
interface ErrorMessage extends Message {
    type: `${string}Error`;
    message: string;
}

// ✅ Works only in Typescript 4.5
function handler(r: SuccessMessage | ErrorMessage) {
    if (r.type === "HttpSuccess") {
        // 'r' is now of Type SuccessMessage
        let token = r.body;
    }
}


//
type Methods = {
    getPersonName: () => string
    hasSocialMediaAccount: () => boolean;
}

// ✅ Creating a utility that will map methods to async
type Promesify<T extends { [key: string ]: () => unknown }> = {
    [P in keyof T as `${string & P}Async`]: () => Promise<ReturnType<T[P]>>;
}

type MethodsAsync = Promesify<Methods>;
/* ✅ Result
  type MethodsAsync = {
    getPersonNameAsync: () => Promise<string>;
    hasSocialMediaAccountAsync: () => Promise<boolean>;
  }
*/



//change name in type by template
type Person = {
    Name: string;
    address: string;
    Phone: string;
}

type UncapitalizeKeys<T> = {
    [P in keyof T as `${Uncapitalize<string & P>}`]: T[P];
}

type UncapitalizedPerson = UncapitalizeKeys<Person>;
/* ✅ result: 
    type UncapitalizedPerson = {
        name: string;
        address: string;
        phone: string;
    }
*/