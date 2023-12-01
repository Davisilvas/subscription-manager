export const useStorage = () => {
    const users = [];
    
    const createStorage = () => {
        localStorage.setItem('users', JSON.stringify(users));
    }
}