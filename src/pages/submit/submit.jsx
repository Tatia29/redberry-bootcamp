import "./submit.scss";
import Navigation from "../../components/navigation/navigation";
import { useNavigate } from "react-router-dom";
export default function Submit(){
    const navigate = useNavigate();
    function navigateOnThanks() {
       navigate("/thanks")
       
    }
    return <div id="submit">
        <button onClick={navigateOnThanks}>Submit</button>
        <div className="goBack">Go back</div>
        </div>


}

