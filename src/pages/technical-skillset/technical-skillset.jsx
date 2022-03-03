import Navigation from "../../components/navigation/navigation";
import { useEffect, useState } from "react";
import {getSelectValues} from "../../services/services";

export default function TechnicalSkillSet(){
    const [selectOptions, setSelectOptions] = useState(null);

    useEffect(()=>{
        const getSkills = async() => {
            const response =  await getSelectValues();
            setSelectOptions(response);
            return response;
        }
        getSkills();
    },[]);
    console.log("selectOptions",selectOptions)
    return <div>
        TechnicalSkillSet
        <Navigation prevPage="personal-information" nextPage="covid"/>
        {selectOptions?.map((option)=>{return <div key={option.id}>{option.title}</div>})}
        </div>
}

