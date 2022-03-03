import "./langing.scss";
import { useNavigate } from "react-router-dom";

export default function Langing(){
    const navigate = useNavigate();
    function navigateOnPersonalPage() {
       navigate("/personal-information")
       
    }

    return <div id="langing">
        <button onClick={navigateOnPersonalPage}>Start Questionnaire</button>
        </div>
}


