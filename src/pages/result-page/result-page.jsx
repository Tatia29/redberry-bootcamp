import "./result-page.scss";
import { useEffect, useState } from "react";
import {getAllApplications} from "../../services/services";
import ExpandableItem from "../../components/expandable-item/expandable-item";
import {
    useRecoilState,
  } from 'recoil';


export default function ResultPage(){
    const [allApplications, setAllApplications] = useState([]);
    
    useEffect(()=>{
        console.log("all applications 0", allApplications);
        const getApplicationList = async() => {
            const response =  await getAllApplications();
            console.log("response", response);
            setAllApplications(response)
        }
        getApplicationList();
    },[]);

    
    return <div className="resultPage" >
        <p>Submitted applications</p>

        {allApplications.map((item, index)=>{
            return <ExpandableItem 
                    first_name={item.first_name} 
                    last_name={item.last_name } 
                    email={item.email} 
                    phoneNumber={item.phone}
                    isVaccinated={item.vaccinated}
                    index={index} 
                    vaccinatedAt = {item.vaccinated_at}
                    workPreference = {item.work_preference}
                    hadCovid = {item.had_covid}
                    hadCovidAt ={item.had_covid_at}
                    vaccinated_at={item.vaccinated_at}
                    willOrganizeDevtalk={item.will_organize_devtalk}
                    devtalkTopic={item.devtalk_topic}
                    somethingSpecial={item.something_special}
                    skills={item.skills}
                   // durations={item.duration}
                    key={index}/>
        })}
        {/* </div> */}
        </div>
}

