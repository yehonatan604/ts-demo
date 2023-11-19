import { LocalStorageService } from './LocalStorage.service';
import { DomService } from './Dom.service';
import { UserLogin } from '../data/models/UserLogin.model';
import { userLoginDto } from '../data/models/UserLogin.model.js';
import { AuthService } from './Auth.service';

export class FormService {
    userLoginDto: UserLogin = { ...userLoginDto };

    constructor(
        public domService: DomService,
        public authService: AuthService
    ) { }

    onInputChange: Function = (id: string) => {
        this.userLoginDto = {
            ...this.userLoginDto,
            [id]: this.domService.formInputs[id].value
        }
    }

    onSubmit: Function = async (): Promise<boolean> => {
        return await this.authService.login(this.userLoginDto);
    }
}