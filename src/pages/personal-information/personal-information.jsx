import "./personal-information.scss";
import { useNavigate } from "react-router-dom";
import Navigation from "../../components/navigation/navigation";



export default function PersonalInfromation(){
    const navigate = useNavigate();

    return <div id="personal-information">
        <div className="content">1asd</div>
        <div className="info-area">
            <Navigation prevPage="" nextPage="technical-skillset"   />
        </div>
        </div>
}

