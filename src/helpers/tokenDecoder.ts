import { LocalStorageService } from "../services/LocalStorage.service";

export const tokenDecoder: Function = (localStorageService: LocalStorageService) => {
    const token = localStorageService.getToken();
    const decodedToken = JSON.parse(atob(token.split('.')[1]));

    return {
        id: decodedToken._id,
        isBiz: decodedToken.isBiz,
        isAdmin: decodedToken.isAdmin
    }
}
