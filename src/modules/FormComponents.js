import '../styles/Form.css'
import {Link} from "react-router-dom";

function InputContainer(props) {
    return (
        <div className={"inputContainer"}>
            <input
                value={props.input_var}
                name={props.input_name}
                id={props.input_name}
                onChange={ev => props.setVar(ev.target.value)}
                className={"inputField"}/>
            <label htmlFor={props.input_name} className="inputLabel">{props.input_name}</label>
        </div>
    );
}

export function FormView(props) {
    return (
        <div>
            <Link
                to={props.otherFormPath}
                className={"otherForm"}>
                {props.otherFormName}
            </Link>
            <div className={"mainContainer"}>
                <div className={"titleContainer"}>
                    <div className={"currentForm"}>
                        {props.formName}
                    </div>
                </div>
                <br/>
                {props.inputs.map( (input_tuple) => {
                    return (
                        <InputContainer
                            input_var={input_tuple[1]}
                            input_name={input_tuple[0]}
                            setVar={input_tuple[2]}/>
                        );
                })}
                <div className={"formButtonContainer"}>
                    <input
                        className={"formSubmitButton"}
                        type="button"
                        onClick={props.buttonAction}
                        value={props.buttonName}/>
                </div>
            </div>
        </div>
    );
}