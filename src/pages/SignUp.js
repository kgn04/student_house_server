import {useState} from "react";
import * as constants from "../modules/Constants";
import {FormView, InputContainer} from "../modules/FormComponents";
import '../styles/Form.css'


function validateLoginInput(login, password) { //TODO
    return constants.OPERATION_SUCCESSFUL
}

const SignUpForm = () => {
    const [login, setLogin] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [password_repeated, setPasswordRepeated] = useState("")

    return (
        <FormView
            otherFormPath={"/"}
            otherFormName={"SIGN IN"}
            formName={"SIGN UP"}
            inputs = {[
                ['Login', login, setLogin],
                ['Username', username, setUsername],
                ['Password', password, setPassword],
                ['Repeat password', password_repeated, setPasswordRepeated]
            ]}
            buttonName={"Sign up!"}
            buttonAction={()=>{}}
        />
    );
}

export default SignUpForm;