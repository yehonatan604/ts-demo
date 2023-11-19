import { FormInputs } from "../data/models/FormInputs.model";

export class DomService {
    formInputs: FormInputs = {
        email: document.querySelector<HTMLInputElement>('#email'),
        password: document.querySelector<HTMLInputElement>('#password'),
        submitBtn: document.querySelector<HTMLButtonElement>('#submit')
    }
    tokenParagraph: HTMLParagraphElement = document.querySelector<HTMLParagraphElement>('#token');
    userContainer: HTMLDivElement = document.querySelector<HTMLDivElement>('.container-user');

    addListeners: Function = (inputChangeFunc: Function, submitFunc: Function) => {
        this.formInputs.email.addEventListener("keyup", (event: Event) => {
            let id = (event.target as HTMLInputElement).id;
            inputChangeFunc(id);
        });
        this.formInputs.password.addEventListener("keyup", (event: Event) => {
            let id = (event.target as HTMLInputElement).id;
            inputChangeFunc(id);
        });
        this.formInputs.submitBtn.addEventListener("click", (event: Event) => {
            event.preventDefault();
            submitFunc();
        });
    }

    fillContainer: Function = (propId: string, propValue: string): void => {
        let div: HTMLDivElement = document.createElement("div");
        let label: HTMLLabelElement = document.createElement("label");
        let par: HTMLParagraphElement = document.createElement("p");

        div.className = 'form-control m-1';
        par.id = propId;
        par.textContent = propValue;
        label.htmlFor = propId;
        label.innerText = propId + ":";

        div.appendChild(label);
        div.appendChild(par);
        this.userContainer.appendChild(div);
    }
}