import Component from "../../components/Component";
import Navigator from "../../services/router/Navigator";
import AuthenticationRepository from "../../repositories/AuthenticationRepository";
import "./Authentication.scss";
import TokenService from "../../services/auth/TokenService";

class Register extends Component {
    constructor(container) {
        super(container, "register");
        particlesJS.load('particles', 'assets/particles.json');
    }

    getFormData() {
        const inputs = document.querySelectorAll('.form-row input');
        const data = {
            firstName: inputs[0].value,
            lastName: inputs[1].value,
            username: inputs[2].value,
            email: inputs[3].value,
            password: inputs[4].value
        }
        return data;
    }

    createNewUser() {
        const form = this.getFormData();
            AuthenticationRepository.createUser(form).then(result => {
                if (result.error) {
                    document.querySelector('.error').innerHTML = `${result.error}`;
                    return { error: result.error };
                } else {
                    document.querySelector('.error').innerHTML = ``;
                    return result;
                }
            })
            .then(check => {
                if (check.error) {
                    document.querySelector('.error').innerHTML = `${check.error}`;
                } else {
                    TokenService.setToken(check.token);
                    Navigator.goToUrl("/login")
                }
            });
    }

    render() {
        this.domElement.innerHTML = `
        <div id="panel">
            <div class="form-title">
                <h1>Splicer</h1>
            </div>
            <form class="auth-form">
                <span class="error"></span>
                <div class="form-row">
                    <label class="input-label" for="first-name">
                    <input class="input" id="first-name" type="text" placeholder="First Name">
                </div>
                <div class="form-row">
                    <label class="input-label" for="last-name">
                    <input class="input" id="last-name" type="text" placeholder="Last Name">
                </div>
                <div class="form-row">
                    <label class="input-label" for="username">
                    <input class="input" id="username" type="text" placeholder="Username" required>
                </div>
                <div class="form-row">
                    <label class="input-label" for="email">
                    <input class="input" id="email" type="email" placeholder="Email" required>
                </div>
                <div class="form-row">
                    <label class="input-label" for="password">
                    <input class="input" id="password" type="password" placeholder="Password" minlength="6" required>
                </div>
                <button class="auth-button" type="submit">Register</button>
            </form>
            <div class="register-text">Already got an account? <span class="register-link">Login Now</span></div>
        </div>
        <div id="particles"></div>
        `;

        this.domElement.querySelector(".auth-form").addEventListener("submit", (e) => {
            e.preventDefault();
            this.createNewUser();
        })

        this.domElement.querySelector(".register-link").addEventListener("click", () => { Navigator.goToUrl("/login") } );
    }

}

export default Register;