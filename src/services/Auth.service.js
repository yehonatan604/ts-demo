var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { tokenDecoder } from "../helpers/tokenDecoder.js";
export class AuthService {
    constructor(domService, localStorageService) {
        this.domService = domService;
        this.localStorageService = localStorageService;
        this.login = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/login", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                const token = yield res.text();
                this.localStorageService.setToken(token);
                this.domService.tokenParagraph.textContent = token;
                return yield this.getUser();
            }
            catch (error) {
                console.log(error.message);
                return false;
            }
        });
        this.getUser = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = tokenDecoder(this.localStorageService);
                const res = yield fetch(`https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-auth-token': this.localStorageService.getToken()
                    }
                });
                const data = yield res.json();
                this.domService.fillContainer('userName', data.name.first + " " + data.name.last);
                this.domService.fillContainer('email', data.email);
                this.domService.fillContainer('phone', data.phone);
                this.domService.fillContainer('adress', data.address.city + ", " + data.address.country);
                return true;
            }
            catch (error) {
                console.log(error.message);
                return false;
            }
        });
    }
}
