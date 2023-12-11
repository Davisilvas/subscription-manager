export const useStorage = () => {
    const users = [];
    
    const createStorage = () => {
        localStorage.setItem('users', JSON.stringify(users));
    }
    /*localStorage.setItem('users', JSON.stringify(storedUsers));*/
    /*const storedUsers = JSON.parse(localStorage.getItem('users'));*/
}