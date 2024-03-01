import React, {useState} from "react";
import {CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar} from 'recharts';


export const MenuItem = (props) => {
    const [color, setColor] = useState(props.color)
    return (
        <div
            className={'menuItemContainer'}
            id={props.additionalID}
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

export const PlotContainer = (props) => {
    return (
        <div className={"plotContainer"}>
            <BarChart width={600} height={300} data={props.plotData}>
                <Bar fill={"#2b542c"} dataKey={props.plotName} stroke="black" />
                <CartesianGrid stroke="#2b542c" />
                <XAxis dataKey="Time" stroke="#2b542c" fontSize={20}/>
                <YAxis stroke="#2b542c" fontSize={20}/>
                <Tooltip />
            </BarChart>
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
                }}
            />
            <input
                className={"messageButton"}
                type="button"
                onClick={()=>{alert("Message sent!")}}
                value={"Send"}
            />
        </div>
    )
    ;
}