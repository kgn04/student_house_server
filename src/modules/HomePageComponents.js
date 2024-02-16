import {useState} from "react";

export const MenuItem = (props) => {
    const [color, setColor] = useState(props.color)
    return (
        <div
            className={'menuItemContainer'}
            onClick={() => {
                props.onClick(props.name);
                setColor(props.color);
            }}
            style={{
                borderColor: color,
                backgroundColor: (props.name === props.clickedItemName) ? props.secondColor : 'transparent'
            }}
            onMouseOver={()=>{
                if (props.name !== props.clickedItemName) setColor('#2b542c');
            }}
            onMouseLeave={()=>{
                setColor(props.color);
            }}
        >
            <div
                className={'menuItemLabel'}
                style={{color: color}}
            >
                {props.name}
            </div>
            <div
                className={'menuItemValue'}
                style={{color: color}}
            >
                {props.value}
            </div>
        </div>
    );
}

export const MessageBox = (props) => {
    return (
        <div className={"messageBox"}>
            <div className={"messageInfo"}>
                <div className={"messageAuthor"}>
                    {props.author}
                </div>
                <div className={"messageTime"}>
                    {props.time}
                </div>
            </div>
            <div className={"messageContent"}>
                {props.content}
            </div>
        </div>
    );
}

export const MessageSender = () => {
    const [message, setMessage] = useState("")
    return (
        <div className={"messageSenderContainer"}>
            <input
                value={message}
                onChange={ev => setMessage(ev.target.value)}
                className={"messageInput"}
                onKeyDown={(e)=>{
                    if (e.key === 'Enter')
                        alert("Message sent!")
                }}/>
            <input
                className={"messageButton"}
                type="button"
                onClick={()=>{alert("Message sent!")}}
                value={"Send"}/>
        </div>
    )
    ;
}