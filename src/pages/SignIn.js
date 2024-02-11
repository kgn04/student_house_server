import {useState} from "react";
import * as constants from "../modules/Constants";
import {FormView} from "../modules/FormComponents";
import '../styles/Form.css'


function validateLoginInput(login, password) { //TODO
    return constants.OPERATION_SUCCESSFUL
}

const SignInForm = () => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    return (
        <FormView
            otherFormPath={"/sign_up"}
            otherFormName={"SIGN UP"}
            formName={"SIGN IN"}
            inputs = {[
                ['Login', login, setLogin],
                ['Password', password, setPassword]
            ]}
            buttonName={"Sign in!"}
            buttonAction={()=>{}}
        />
    )
}

export default SignInForm;