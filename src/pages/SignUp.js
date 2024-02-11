import {useState} from "react";
import * as constants from "../modules/Constants";
import {InputContainer} from "../modules/FormComponents";
import {Link} from "react-router-dom";

function validateLoginInput(login, password) { //TODO
    return constants.OPERATION_SUCCESSFUL
}

const SignUpForm = () => {
    const [login, setLogin] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [password_repeated, setPasswordRepeated] = useState("")

    return (
        <div className={"mainContainer"}>
            <div className={"titleContainer"}>
                <div
                    className={"notCurrentAction"}>
                    <Link to="/">SIGN IN</Link>
                </div>
                <div className={"currentAction"}>
                    SIGN UP
                </div>
            </div>
            <br/>
            <InputContainer
                input_var={login}
                input_name="Login"
                setVar={setLogin}/>
            <InputContainer
                input_var={username}
                input_name="Username"
                setVar={setUsername}/>
            <InputContainer
                input_var={password}
                input_name="Password"
                setVar={setPassword}/>
            <InputContainer
                input_var={password_repeated}
                input_name="Repeat password"
                setVar={setPasswordRepeated}/>
            <div className={"inputContainer"}>
                <input
                    className={"inputButton"}
                    type="button"
                    onClick={validateLoginInput(login, password)}
                    value={"Sign up"}/>
            </div>
        </div>
    );
}

export default SignUpForm;