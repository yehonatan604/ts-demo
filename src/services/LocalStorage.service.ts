export class LocalStorageService {
    getToken: Function = (): String => {
        const token: string | null = localStorage.getItem('token');
        return token && token;
    }

    setToken: Function = (token: string): void => {
        token && localStorage.setItem('token', token);
    }

    removeToken: Function = (): void => {
        localStorage.setItem('token', '');
    }
}