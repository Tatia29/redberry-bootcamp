import "./langing.scss";
import { useNavigate } from "react-router-dom";

export default function Langing(){
    const navigate = useNavigate();
    function navigateOnPersonalPage() {
       navigate("/personal-information")
       
    }
    function navigateOnResultPage() {
        navigate("/result-page")
        
     }

    return <div id="langing">
        
        <h1>Welcome Rocketeer !</h1>
        <button onClick={navigateOnPersonalPage} className="langingButton">Start Questionnaire</button>
        <div className="submittedApplication" onClick={navigateOnResultPage}>Submitted  Applications</div>
        <div className="rocketman"></div>
        </div>
        
}


