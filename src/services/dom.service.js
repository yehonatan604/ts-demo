export class DomService {
    constructor() {
        this.formInputs = {
            email: document.querySelector('#email'),
            password: document.querySelector('#password'),
            submitBtn: document.querySelector('#submit')
        };
        this.tokenParagraph = document.querySelector('#token');
        this.userContainer = document.querySelector('.container-user');
        this.addListeners = (inputChangeFunc, submitFunc) => {
            this.formInputs.email.addEventListener("keyup", (event) => {
                let id = event.target.id;
                inputChangeFunc(id);
            });
            this.formInputs.password.addEventListener("keyup", (event) => {
                let id = event.target.id;
                inputChangeFunc(id);
            });
            this.formInputs.submitBtn.addEventListener("click", (event) => {
                event.preventDefault();
                submitFunc();
            });
        };
        this.fillContainer = (propId, propValue) => {
            let div = document.createElement("div");
            let label = document.createElement("label");
            let par = document.createElement("p");
            div.className = 'form-control m-1';
            par.id = propId;
            par.textContent = propValue;
            label.htmlFor = propId;
            label.innerText = propId + ":";
            div.appendChild(label);
            div.appendChild(par);
            this.userContainer.appendChild(div);
        };
    }
}
