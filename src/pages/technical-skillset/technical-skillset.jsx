import Navigation from "../../components/navigation/navigation";
import { useEffect, useState } from "react";
import "./technical-skillset.scss";
import {getSelectValues} from "../../services/services";
import { technicalskills } from "../../state/atoms";
import {useRecoilState} from "recoil";
import SkillCard from "../../components/skill-card/skill-card";

export default function TechnicalSkillSet(){
    const [selectOptions, setSelectOptions] = useState([]);
    const [selectedSkills, setSelectedSkills] = useState("");
    const [selectedSkillExprience, setSelectedSkillExperience] = useState(0);
    const [skills, setSkills] = useRecoilState(technicalskills);
    console.log("skills", skills);

    useEffect(()=>{
        const getSkills = async() => {
            const response =  await getSelectValues();
            // console.log("response", response);
            setSelectOptions(response);
            return response;
        }
        getSkills();
    },[]);

    function addSkill(){
        let changeSkills = [...skills];
        console.log("changed skills", changeSkills)
        changeSkills.push({
            id: selectedSkills,
            experience: selectedSkillExprience
        })
        setSkills(changeSkills)
    }
    
    return <div id="technical-skillset">
        <div className="leftPanel">
            <div className="title">Tell us about your skills</div>
            
            {/* <SkillCard id={1} experience={2} /> */}
            
            <div className="experienceForm">
            <div className="skills">
                <select name="skills" id="skills" onChange={(e)=>{
                            setSelectedSkills(parseInt(e.target.value));
                        }}>
                {selectOptions.map((item)=>{
                        return <option key={item.id} value={item.id} >
                                {item.title}
                            </option>
                })}
                </select>
            </div>
                <input type="number" className="duration" onChange={(e)=>{
                    setSelectedSkillExperience(parseInt(e.target.value))
                }}>
                </input>
            </div>
            <button onClick={addSkill}>Add Skill</button>
            {skills.map((skill)=>{
                return <SkillCard id={skill.id} experience={skill.experience} key={skill.id}/>
            })}
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
        </div>
}

