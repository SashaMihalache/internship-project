import Component from "../../components/Component";
import Navigator from "../../services/router/Navigator";
import RegisterRepository from "../../repositories/RegisterRepository";

class Login extends Component {
    constructor(container) {
        super(container, "register");

        particlesJS.load('particles', 'assets/particles.json');
    }

    getFormData() {
        const inputs = document.querySelectorAll('.form-row input');
        const data = {
            email: inputs[0].value,
            password: inputs[1].value
        }
        return data;
    }

    createNewUser() {
        this.errorsArray = [];
        const form = this.getFormData();
            RegisterRepository.createUser(form).then(result => {
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
                    Navigator.goToUrl("/sounds")
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
                    <label class="input-label" for="email">
                    <input class="input" id="email" type="email" placeholder="Email" required>
                </div>
                <div class="form-row">
                    <label class="input-label" for="password">
                    <input class="input" id="password" type="password" placeholder="Password" minlength="6" required>
                </div>
                <button class="auth-button" type="submit">Register</button>
            </form>
            <div class="register-text">Don't have an account yet? <span class="register-link">Sign Up Now</span></div>
        </div>
        <div id="particles"></div>
        `;

        this.domElement.querySelector(".auth-form").addEventListener("submit", (e) => {
            e.preventDefault();
            this.createNewUser();
        })

        this.domElement.querySelector(".register-link").addEventListener("click", () => { Navigator.goToUrl("/register") } );
    }

}

export default Login;