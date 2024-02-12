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