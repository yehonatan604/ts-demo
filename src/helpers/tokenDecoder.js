export const tokenDecoder = (localStorageService) => {
    const token = localStorageService.getToken();
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    return {
        id: decodedToken._id,
        isBiz: decodedToken.isBiz,
        isAdmin: decodedToken.isAdmin
    };
};
