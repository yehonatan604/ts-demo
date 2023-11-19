import { AuthService } from "./services/Auth.service.js";
import { DomService } from "./services/Dom.service.js";
import { FormService } from "./services/Form.service.js";
import { LocalStorageService } from "./services/LocalStorage.service.js";
let localStorageService = new LocalStorageService();
let domService = new DomService();
let authService = new AuthService(domService, localStorageService);
let formService = new FormService(domService, authService);
domService.addListeners(formService.onInputChange, formService.onSubmit);
