export class LocalStorageService {
    constructor() {
        this.getToken = () => {
            const token = localStorage.getItem('token');
            return token && token;
        };
        this.setToken = (token) => {
            token && localStorage.setItem('token', token);
        };
        this.removeToken = () => {
            localStorage.setItem('token', '');
        };
    }
}
