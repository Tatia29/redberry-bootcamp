import "./submit.scss";
import Navigation from "../../components/navigation/navigation";
import { useNavigate } from "react-router-dom";
import {useRecoilState} from "recoil";
import { contactwithcovid19, devtalktopic, email, firstname, hadcovid, isvaccinated, lastname, phonenumber, somethingspecial, technicalskills, vaccinatedat, willorganizedevtalk, workingfrompreference } from "../../state/atoms";
import { createApplication } from "../../services/services";
export default function Submit(){
    const navigate = useNavigate();
    const [firstName] = useRecoilState(firstname);
    const [lastName] = useRecoilState(lastname);
    const [mail] = useRecoilState(email);
    const [phoneNumber] = useRecoilState(phonenumber);
    const [workingFromPreference] = useRecoilState(workingfrompreference);
    const [contactWithCovid19] = useRecoilState(contactwithcovid19);
    const [hadCovid] = useRecoilState(hadcovid);
    const [isVaccinated] = useRecoilState(isvaccinated);
    const [willOrganizeDevtalk] = useRecoilState(willorganizedevtalk);
    const [devTalkTopic] = useRecoilState(devtalktopic);
    const [vaccinatedAt] = useRecoilState(vaccinatedat);
    const [somethingSpecial] = useRecoilState(somethingspecial);
    const [technicalSkills] = useRecoilState(technicalskills);
    console.log("firstName",firstName)
    console.log("lastName",lastName)
    console.log("mail",mail)
    console.log("phoneNumber",phoneNumber)
    console.log("workingFromPreference",workingFromPreference)
    console.log("contactWithCovid19",contactWithCovid19)
    console.log("hadCovid",hadCovid)
    console.log("isVaccinated",isVaccinated)
    console.log("willOrganizeDevtalk",willOrganizeDevtalk)
    console.log("devTalkTopic",devTalkTopic)
    console.log("vaccinatedAt",vaccinatedAt)
    console.log("somethingSpecial",somethingSpecial)
    console.log("technicalSkills",technicalSkills)
    function navigateOnThanks() {
       navigate("/thanks")
    }
    function parseStringToBoolean(value){
        if(value==="true"){
            return true;
        }
        return false;
    }
    async function addApplication(){
        const response =  await createApplication({
            "token": "89nOpas|asdanjjh^&as",
            "first_name": firstName,
            "last_name": lastName,
            "email": mail,
            "phone": ""+phoneNumber,
            "skills": technicalSkills,
            "work_preference": workingFromPreference,
            "had_covid": parseStringToBoolean(contactwithcovid19),
            "had_covid_at": hadCovid,
            "vaccinated": parseStringToBoolean(isVaccinated),
            "vaccinated_at": vaccinatedAt,
            "will_organize_devtalk": parseStringToBoolean(willOrganizeDevtalk),
            "devtalk_topic": devTalkTopic,
            "something_special": somethingSpecial,
        })
            navigateOnThanks();
        return response 
    }
    return <div id="submit">
        <button onClick={async()=>{addApplication()}} className="submitButton">Submit</button>
        <div className="goBack">Go back</div>
        </div>


}

