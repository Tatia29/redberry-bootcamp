import Navigation from "../../components/navigation/navigation";
import { useEffect, useState } from "react";
import {getAllApplications} from "../../services/services";

export default function ResultPage(){
    const [allApplications, setAllApplications] = useState([]);
    useEffect(()=>{
        const getApplicationList = async() => {
            const response =  await getAllApplications();
            setAllApplications(response)
        }
        getApplicationList();
    },[]);
    
    return <div>
       Result Page
       <Navigation name="tamuna"/>
       <div style={{display: "flex", flexDirection: "column"}}>
        {allApplications.map((option)=>{
            return <span>{option.first_name}</span>
        })}
        </div>
        </div>
}

