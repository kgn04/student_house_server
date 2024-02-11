export function InputContainer(props) {
    return (
        <div className={"inputContainer"}>
            <input
                value={props.input_var}
                placeholder={props.input_name}
                onChange={ev => props.setVar(ev.target.value)}
                className={"inputBox"}/>
        </div>
    );
}