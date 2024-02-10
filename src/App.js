import './App.css';
import { useState } from "react";

const OPERATION_SUCCESSFUL = 0
const NO_SUCH_LOGIN = 1
const NO_SUCH_PASSWORD = 2

const SIGN_UP = 0
const SIGN_IN = 1


function validateLoginInput(login, password) { //TODO
  return OPERATION_SUCCESSFUL
}

function InputContainer(props) {
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

function Form() {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [password_repeated, setPasswordRepeated] = useState("")
  const [username, setUsername] = useState("")
  const [action, setAction] = useState(SIGN_IN)

  let action_name = action === SIGN_UP ? "SIGN UP" : "SIGN IN"

  return (
      <div className={"mainContainer"}>
        <div className={"titleContainer"}>
          <div onClick={ev => setAction((action + 1) % 2 )}>
            {action_name === "SIGN UP" ? "SIGN IN" : "SIGN UP"}
          </div>
          <div>{action_name}</div>
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
        {action===SIGN_UP ? (
            <div>
              <InputContainer
                  input_var={username}
                  input_name="Username"
                  setVar={setUsername}/>
              <InputContainer
                  input_var={password_repeated}
                  input_name="Repeat password"
                  setVar={setPasswordRepeated}/>
              </div>
              ) : (<div/>)
        }
        <div className={"inputContainer"}>
          <input
              className={"inputButton"}
              type="button"
              onClick={validateLoginInput(login, password)}
              value={action_name}/>
        </div>
      </div>
  );
}

export default function App() {
  return (
      <div>
        <Form />
      </div>
  );
}