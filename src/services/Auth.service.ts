import { User } from "../data/models/User.model";
import { UserLogin } from "../data/models/UserLogin.model";
import { DomService } from "./Dom.service";
import { LocalStorageService } from "./LocalStorage.service";
import { tokenDecoder } from "../helpers/tokenDecoder.js";

export class AuthService {
    constructor(
        public domService: DomService,
        public localStorageService: LocalStorageService
    ) { }

    login: Function = async (data: UserLogin): Promise<boolean> => {
        try {
            const res = await fetch("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const token = await res.text();
            this.localStorageService.setToken(token);
            this.domService.tokenParagraph.textContent = token;
            return await this.getUser();
        } catch (error) {
            console.log(error.message);
            return false;
        }
    }

    getUser: Function = async (): Promise<boolean> => {
        try {
            const { id } = tokenDecoder(this.localStorageService);
            const res = await fetch(`https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': this.localStorageService.getToken()
                }
            });
            const data: User = await res.json();

            this.domService.fillContainer('userName', data.name.first + " " + data.name.last);
            this.domService.fillContainer('email', data.email);
            this.domService.fillContainer('phone', data.phone);
            this.domService.fillContainer('adress', data.address.city + ", " + data.address.country);

            return true;
        } catch (error) {
            console.log(error.message);
            return false;
        }
    }
}
