import Navigation from "../../components/navigation/navigation";
import { useEffect, useState } from "react";
import "./technical-skillset.scss";
import {getSelectValues} from "../../services/services";

export default function TechnicalSkillSet(){
    const [selectOptions, setSelectOptions] = useState(null);
/*
    useEffect(()=>{
        const getSkills = async() => {
            const response =  await getSelectValues();
            setSelectOptions(response);
            return response;
        }
        getSkills();
    },[]);
    console.log("selectOptions",selectOptions)
    */
    return <div id="technical-skillset">
        <div className="leftPanel">
            <div className="title">Tell us about your skills</div>
            <div className="experienceForm">
                <div className="skills"><form><input type="{text}"></input></form></div>
                <div className="duration"><form><input type="{text}"></input></form></div>
            </div>

        </div>
        <Navigation prevPage="personal-information" nextPage="covid"/>
        <div className="rightPanel">
            <div className="title2">A bit about our battles</div>
            <div className="description">As we said, Redberry has been on the field for quite some time now,
             and we have touched and embraced a variety of programming languages, 
             technologies, philosophies, and frameworks. We are battle-tested in PHP Laravel Stack with Vue.js,
             refined in React, and allies with Serverside technologies like Docker and Kubernetes,
             and now we have set foot in the web3 industry.
            </div>
        </div>
        
        {selectOptions?.map((option)=>{return <div key={option.id}>{option.title}</div>})}
        </div>
}

