import '../styles/Home.css'
import {MenuItem} from "../modules/HomePageComponents";
import {useState} from "react";


const MenuView = () => {
    const [clickedItemName, setClickedItemName] = useState('')
    return (
        <div className={"menuContainer"}>
            <MenuItem
                name = {"Temperature"}
                value = {"36^C"}
                onClick = {setClickedItemName}
                color = '#761c19'
                secondColor = '#a94442'
                clickedItemName={clickedItemName}
            />
            <MenuItem
                name = {"Humidity"}
                value = {"40%"}
                onClick = {setClickedItemName}
                color = '#1e347b'
                secondColor = '#5b80b2'
                clickedItemName={clickedItemName}
            />
        </div>
    );
}

const MainView = () => {
    return (
        <div className={"middleContainer"}>

        </div>
    );
}

const MessagesView = () => {
    return (
        <div className={"messagesContainer"}>
            <div className={"messagesLabel"}>
                Messages
            </div>
        </div>
    );
}

const HomeView = () => {
    return (
        <div className={"homePageContainer"}>
            <MenuView/>
            <MainView/>
            <MessagesView/>
        </div>
    );
}

export default HomeView;