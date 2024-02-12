import '../styles/Home.css'
import {MenuItem} from "../modules/HomePageComponents";


const MenuView = () => {
    return (
        <div className={"menuContainer"}>
            {/*<MenuItem*/}
            {/*    itemName = {"Temperature"}*/}
            {/*    itemValue = {"36^C"}*/}
            {/*    onClick = {() => {alert()}}*/}
            {/*/>*/}
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