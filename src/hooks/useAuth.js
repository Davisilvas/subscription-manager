export const useAuth = (name, email, cpf, birthday, age, password, confirmPassword) => {

    const biggerThanSix = false;
    const smallerThanSixteen = false;
    const areEquals = false;

    const checkingMinimumCharacters = () => {
        if (password.length >= 6){
            biggerThanSix = true;
        } else {
            console.log("password should contain at least 6 characters")
        }
    }

    const checkingMaximumCharacters = () => {
        if (password.length <= 16){
            smallerThanSixteen = true;
        } else {
            console.log("The password can contain 16 characters only.")
        }
    }

    const checkingIfPasswordsAreEqual = () => {
        if ( password === confirmPassword) {
            areEquals = true;
        } else {
            console.log("The password should be equal")
        }
    }
    
    const createUser = () => {
        checkingMinimumCharacters();
        checkingMaximumCharacters();
        checkingIfPasswordsAreEqual();

        if(name, email, cpf, birthday, age, biggerThanSix, smallerThanSixteen, areEquals){
            const storedUsers = JSON.parse(localStorage.getItem('users'));

            const newUser = {
                userName: name,
                userEmail: email,
                userCpf: cpf,
                userBirthday: birthday,
                userAge: age,
                userPassword: password
            }

            storedUsers.push(newUser);

            localStorage.setItem('users', JSON.stringify(storedUsers));
        }
    }

    return createUser;
}