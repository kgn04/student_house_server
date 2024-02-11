import {useState} from "react";
import * as constants from "../modules/Constants";
import {InputContainer} from "../modules/FormComponents";
import {Link} from "react-router-dom";

function validateLoginInput(login, password) { //TODO
    return constants.OPERATION_SUCCESSFUL
}

const SignInForm = () => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className={"mainContainer"}>
            <div className={"titleContainer"}>
                <div
                    className={"notCurrentAction"}>
                    <Link to="sign_up">SIGN UP</Link>
                </div>
                <div className={"currentAction"}>
                    SIGN IN
                </div>
            </div>
            <br/>
            <InputContainer
                input_var={login}
                input_name="Login"
                setVar={setLogin}/>
            <InputContainer
                input_var={password}
                input_name="Password"
                setVar={setPassword}/>
            <div className={"inputContainer"}>
                <input
                    className={"inputButton"}
                    type="button"
                    onClick={validateLoginInput(login, password)}
                    value={"Sign in"}/>
            </div>
        </div>
    );
}

export default SignInForm;