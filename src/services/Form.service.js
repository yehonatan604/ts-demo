var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { userLoginDto } from '../data/models/UserLogin.model.js';
export class FormService {
    constructor(domService, authService) {
        this.domService = domService;
        this.authService = authService;
        this.userLoginDto = Object.assign({}, userLoginDto);
        this.onInputChange = (id) => {
            this.userLoginDto = Object.assign(Object.assign({}, this.userLoginDto), { [id]: this.domService.formInputs[id].value });
        };
        this.onSubmit = () => __awaiter(this, void 0, void 0, function* () {
            return yield this.authService.login(this.userLoginDto);
        });
    }
}
