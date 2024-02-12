import '../styles/Home.css'
import {MenuItem} from "../modules/HomePageComponents";


const MenuView = () => {
    return (
        <div className={"menuContainer"}>
            <MenuItem
                name = {"Temperature"}
                value = {"36^C"}
                onClick = {() => {alert()}}
            />
            <MenuItem
                name = {"Humidity"}
                value = {"40%"}
                onClick = {() => {alert()}}
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