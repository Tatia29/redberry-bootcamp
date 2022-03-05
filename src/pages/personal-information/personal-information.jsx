import "./personal-information.scss";
import { useNavigate } from "react-router-dom";
import Navigation from "../../components/navigation/navigation";



export default function PersonalInfromation(){
    const navigate = useNavigate();

    return <div id="personal-information">
        <div className="content">
            <div className="h1"><h1>Hey, Rocketeer, what are your coordinates?</h1></div>
            <div className="group1">
                <div className="firstname"><form><input type="{text}" placeholder="First Name" ></input></form></div>
                <div className="lastname"><form><input type="{text}" placeholder="Last Name"></input></form></div>
                <div className="email"><form><input type="{text}" placeholder="E-mail"></input></form></div>
                <div className="phone"><form><input type="{text}" placeholder="+995 5.."></input></form></div>
                
                
                <div>
                    <Navigation prevPage="" nextPage="technical-skillset"   />
                </div>
                
            </div>
            
        </div>
        <div className="info-area">
            <div className="headLine"><h1>Redberry Origins</h1></div>
            <div className="text">
                <p>You watch “What? Where? When?” Yeah. Our founders used to play it.
                 That’s where they got a question about a famous American author and screenwriter Ray Bradbury.
                  Albeit, our CEO Gaga Darsalia forgot the exact name and he answered Ray Redberry. 
                  And at that moment, a name for a yet to be born company was inspired - Redberry 😇
                </p>
            </div>
        </div>
        </div>
}

