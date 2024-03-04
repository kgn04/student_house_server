import '../styles/Home.css'
import {MenuItem, PlotContainer, MessageSender, MessageBox} from "../modules/HomePageComponents";
import {useState} from "react";
import { CgLogOut } from "react-icons/cg";
import { FaCalendarWeek, FaCalendarDay } from "react-icons/fa";
import { TbClockHour1 } from "react-icons/tb";
import {dailyData, hourlyData, weeklyData} from "../modules/sampleData";


const MenuView = (props) => {
    return (
        <div className={"menuContainer"}>
            <MenuItem
                name = {"Temperature"}
                value = {"36^C"}
                onClick = {props.setCurrentMenuItem}
                color = '#761c19'
                secondColor = '#a94442'
                clickedItemName={props.currentMenuItem}
            />
            <MenuItem
                name = {"Humidity"}
                value = {"40%"}
                onClick = {props.setCurrentMenuItem}
                color = '#1e347b'
                secondColor = '#5b80b2'
                clickedItemName={props.currentMenuItem}
            />
            <div onClick={() => {}}>
                <MenuItem
                    name = {"Log out"}
                    value = {<CgLogOut />}
                    onClick = {props.setCurrentMenuItem}
                    color = '#2b542c'
                    secondColor = '#67b168'
                    clickedItemName={props.currentMenuItem}
                />
            </div>
        </div>
    );
}

const MainView = (props) => {
    const [currentIntervalName, setCurrentIntervalName] = useState("1 hour")
    const [plotData, setPlotData] = useState(hourlyData)
    return (
        <div className={"middleContainer"}>
            <PlotContainer
                plotName={props.currentMenuItem}
                plotData={plotData}
            />
            <div className={"intervalButtonsContainer"}>
                <div onClick={() => {setPlotData(hourlyData)}}>
                    <MenuItem
                        name = {"1 hour"}
                        value = {<TbClockHour1 />}
                        onClick = {setCurrentIntervalName}
                        color = '#2b542c'
                        secondColor = '#67b168'
                        clickedItemName={currentIntervalName}
                        additionalID={"intervalButton"}
                    />
                </div>
                <div onClick={() => {setPlotData(dailyData)}}>
                    <MenuItem
                        name = {"1 day"}
                        value = {<FaCalendarDay />}
                        onClick = {setCurrentIntervalName}
                        color = '#2b542c'
                        secondColor = '#67b168'
                        clickedItemName={currentIntervalName}
                        additionalID={"intervalButton"}
                    />
                </div>
                <div onClick={() => {setPlotData(weeklyData)}}>
                    <MenuItem
                        name = {"1 week"}
                        value = {<FaCalendarWeek />}
                        onClick = {setCurrentIntervalName}
                        color = '#2b542c'
                        secondColor = '#67b168'
                        clickedItemName={currentIntervalName}
                        additionalID={"intervalButton"}
                    />
                </div>
            </div>
        </div>
    );
}

const MessagesView = () => {
    return (
        <div className={"messagesContainer"}>
            <div className={"messagesLabel"}>
                Messages
            </div>
            <div className={"messageBoxContainer"}>
                <MessageBox
                    author = "Tobiasz"
                    time = "10:20"
                    content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a iaculis nisi."
                />
                <MessageBox
                    author = "Tobiasz"
                    time = "10:20"
                    content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a iaculis nisi."
                />
                <MessageBox
                    author = "Tobiasz"
                    time = "10:20"
                    content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a iaculis nisi."
                />
                <MessageBox
                    author = "Tobiasz"
                    time = "10:20"
                    content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a iaculis nisi."
                />
                <MessageBox
                    author = "Tobiasz"
                    time = "10:20"
                    content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a iaculis nisi."
                />
            </div>
            <MessageSender/>
        </div>
    );
}

const HomeView = () => {
    const [currentMenuItem, setCurrentMenuItem] = useState('Temperature')
    return (
        <div className={"homePageContainer"}>
            <MenuView
                currentMenuItem={currentMenuItem}
                setCurrentMenuItem={setCurrentMenuItem}
            />
            <MainView
                currentMenuItem={currentMenuItem}
            />
            <MessagesView/>
        </div>
    );
}

export default HomeView;