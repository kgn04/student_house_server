import {useState} from "react";
import * as constants from "../modules/Constants";
import {FormView} from "../modules/FormComponents";
import '../styles/Form.css'


function validateLoginInput(username, password) { //TODO
    return constants.OPERATION_SUCCESSFUL
}

const SignInForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <FormView
            otherFormPath={"/sign_up"}
            otherFormName={"SIGN UP"}
            formName={"SIGN IN"}
            inputs = {[
                ['Username', username, setUsername],
                ['Password', password, setPassword]
            ]}
            buttonName={"Sign in!"}
            buttonAction={()=>{alert()}}
        />
    )
}

export default SignInForm;