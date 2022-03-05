import "./langing.scss";
import { useNavigate } from "react-router-dom";

export default function Langing(){
    const navigate = useNavigate();
    function navigateOnPersonalPage() {
       navigate("/personal-information")
       
    }

    return <div id="langing">
        
        <h1>Welcome Rocketeer !</h1>
        <button onClick={navigateOnPersonalPage}>Start Questionnaire</button>
        <div className="submittedApplication">Submitted  Applications</div>
        <div  className="rocketman"></div>
        </div>
        
}


