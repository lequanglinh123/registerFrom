import {mixData, addDataToDB, checkValidPassword, checkValidName, checkValidEmail, checkConfirmPassword} from "../../untils.js";
import "../../untils.js";
class ScreenRegister extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        this._shadowRoot.innerHTML=`
            <style></style>
            <div class="container">
                <form id="register-form">
                <input-form id="first-name"type="text" placeholder="First name"></input-form>
                <input-form id="last-name"type="text" placeholder="Last name"></input-form>
                <input-form id="email" type="text" placeholder="Email"></input-form>
                <input-form id= "password" type="password" placeholder="Password"></input-form>
                <input-form id="confirm-password" type="password" placeholder="Confirm Password "></input-form>
                    <button> submit </button>
                </form>
            </div>
        `
        const registerFrom = this._shadowRoot.getElementById('register-form')
        registerFrom.addEventListener('submit',(event) =>{
            event.preventDefault();
            let firstName = this._shadowRoot.getElementById('first-name').getValue();
            let lastName = this._shadowRoot.getElementById('last-name').getValue();
            let email = this._shadowRoot.getElementById('email').getValue();
            let passWord = this._shadowRoot.getElementById('password').getValue();
            let confirmPassword = this._shadowRoot.getElementById('confirm-password').getValue();
            if(!checkValidName(firstName)){
                this._shadowRoot.getElementById("first-name").setAttribute("error", "Please enter your first name")
            }
            if(!checkValidName(lastName)){
                this._shadowRoot.getElementById("last-name").setAttribute("error", "Please enter your last name")
            }
            if(!checkValidEmail(email)){
                this._shadowRoot.getElementById("email").setAttribute("error", "Please enter the valid email")
            }
            if(!checkValidPassword(passWord)){
                this._shadowRoot.getElementById("password").setAttribute("error", "Please enter the valid password")
            }
            if(!checkConfirmPassword(passWord, confirmPassword)){
                this._shadowRoot.getElementById("confirm-password").setAttribute("error", "your pass word is not match")
            }
            if(checkValidName(firstName)){
                this._shadowRoot.getElementById("first-name").removeAttribute("error")
            }
            if(checkValidName(lastName)){
                this._shadowRoot.getElementById("last-name").removeAttribute("error")
            }
            if(checkValidEmail(email)){
                this._shadowRoot.getElementById("email").removeAttribute("error")
            }
            if(checkValidPassword(passWord)){
                this._shadowRoot.getElementById("password").removeAttribute("error")
            }
            if(checkConfirmPassword(passWord, confirmPassword)){
                this._shadowRoot.getElementById("confirm-password").removeAttribute("error")
            }
            if(checkValidName(firstName)&&checkValidName(lastName)&&checkValidEmail(email)&&checkValidPassword(passWord)&&checkConfirmPassword(passWord, confirmPassword)){
                addDataToDB(mixData(firstName, lastName, email, passWord))
                alert("ban da dang ky thanh cong")
                this._shadowRoot.getElementById("first-name").setEmptyHtml()
                this._shadowRoot.getElementById("last-name").setEmptyHtml()
                this._shadowRoot.getElementById("email").setEmptyHtml()
                this._shadowRoot.getElementById("password").setEmptyHtml()
                this._shadowRoot.getElementById("confirm-password").setEmptyHtml()
            }
        })
    }
}
window.customElements.define('screen-register', ScreenRegister);