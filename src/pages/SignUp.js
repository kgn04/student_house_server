import {useState} from "react";
import * as constants from "../modules/Constants";
import {FormView} from "../modules/FormComponents";
import '../styles/Form.css'


function validateLoginInput(username, password) { //TODO
    return constants.OPERATION_SUCCESSFUL
}

const SignUpForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [password_repeated, setPasswordRepeated] = useState("")

    return (
        <FormView
            otherFormPath={"/"}
            otherFormName={"SIGN IN"}
            formName={"SIGN UP"}
            inputs = {[
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