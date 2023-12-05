import { useState } from "react";

export const useAuth = (name, email, cpf, birthday, age, password, confirmPassword) => {

    let biggerThanSix = false;
    let smallerThanSixteen = false;
    let areEquals = false;

    const checkingMinimumCharacters = () => {
        if (password.length < 5){  
            console.log("password should contain at least 6 characters")
        } else {
            biggerThanSix = true;
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

        const USER_VALIDATE_CONDITION = name && email && cpf && birthday && age && biggerThanSix && smallerThanSixteen && areEquals

        if(USER_VALIDATE_CONDITION){

            const newUser = {
                userName: name,
                userEmail: email,
                userCpf: cpf,
                userBirthday: birthday,
                userAge: age,
                userPassword: password
            }
            console.log(newUser)
            return newUser
        }
        return "N foi possivel criar novo user."
    }

    return {createUser};
}