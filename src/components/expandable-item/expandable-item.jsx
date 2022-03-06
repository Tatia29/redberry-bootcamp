import { useState } from "react";
import "./expandable-item.scss";


export default function ExpandableItem(props){

const [isOpen, setIsOpen] = useState(false);



function handleButtonClick(){
    setIsOpen(!isOpen);
}
function getContentClassName(){
    if(isOpen === true){
        return "content-opened"
    }else{
        return "content-closed"
    }
}
function getIconClassName(){
    if(isOpen ===true){
        return "icon opened"
    }else{
        return "icon"

    }
}
console.log("props", props);


return <>
    <div className="collapsible" onClick={handleButtonClick}>
        <div>{props.index+1}</div>
        <div className={getIconClassName()}/>
    </div>
        <div className={getContentClassName()}>
        <div className="main-content">
            <div className="personalInformation">
                <p>Personal Information</p>
            <div className="personalInformation">Firstname: {props.first_name}</div>
            <div className="personalInformation">Lastname: {props.last_name}</div>
            <div className="personalInformation">email: {props.email}</div>
            <div className="personalInformation">phone: {props.phoneNumber}</div>
            </div>
            
            <div className="covid">
                <p>Covid</p>
            <div className="covid">isVaccinated: {props.isVaccinated}</div>
            <div className="covid">vaccinated_at: {props.vaccinatedAt}</div>
            <div className="covid">work_preference: {props.workPreference}</div>
            <div className="covid">had_covid: {props.hadCovid}</div>
            <div className="covid">had_covid_at: {props.hadCovidAt}</div>
            <div className="covid">vaccinatedAt: {props.vaccinated_at}</div>
            </div>
            <div className="insights">
                <p>Insights</p>
            <div className="insights">willOrganizeDevtalk: {props.willOrganizeDevtalk}</div>
            <div className="insights">devtalkTopic: {props.devtalkTopic}</div>
            <div className="insights">something_special: {props.somethingSpecial}</div>
            </div>
            


        </div>
        </div>
    </>
}