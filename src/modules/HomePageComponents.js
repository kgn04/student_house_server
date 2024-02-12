export const MenuItem = (props) => {
    return (
        <div
            className={props.name + 'Container'}
            onClick={props.onClick}
        >
            <div className={props.name + 'Label'}>
                {props.name}
            </div>
            <div className={props.name + 'Value'}>
                {props.value}
            </div>
        </div>
    );
}