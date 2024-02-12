export const MenuItem = (props) => {
    return (
        <div
            className={props.itemName + 'Container'}
            onClick={props.onClick}
        >
            <div className={props.itemName + 'Label'}>
                {props.itemName}
            </div>
            <div className={props.itemName + 'Value'}>
                {props.itemValue}
            </div>
        </div>
    );
}