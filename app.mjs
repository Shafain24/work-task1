
import { createUser } from './user.mjs';
import { validateEmail, validateAge, validateName } from './validator.mjs';

const user1 = createUser('Alice', 'alice@example.com', 25);
const user2 = createUser('Bob', 'bobexample.com', 150); 

function validateUser(user) {
    const nameValid = validateName(user.name);
    const emailValid = validateEmail(user.email);
    const ageValid = validateAge(user.age);

    console.log(`Validating user: ${user.getDetails()}`);
    console.log(`Name valid? ${nameValid}`);
    console.log(`Email valid? ${emailValid}`);
    console.log(`Age valid? ${ageValid}`);
 
}

validateUser(user1);
validateUser(user2);
