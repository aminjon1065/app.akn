import axios from "axios";
import {API_APP} from "../VARIABLE";

class AuthServices {
    constructor({email, password}) {
        // const {email, password} = props
        axios.post(`${API_APP}/login`, {
            email,
            password
        }).then((res) => {
            if (res.status === 201) {
                localStorage.setItem('__sign_token', res.data.token)
            }
        }).catch((err) => {
            console.log(err)
        })
    }
}

export default AuthServices;