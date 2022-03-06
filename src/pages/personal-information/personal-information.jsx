import "./personal-information.scss";
import { useNavigate } from "react-router-dom";
import Navigation from "../../components/navigation/navigation";
import {useRecoilState} from "recoil";
import {email, firstname, lastname, phonenumber} from "../../state/atoms";



export default function PersonalInfromation(){
    const navigate = useNavigate();
    const [firstName, setFirstName] = useRecoilState(firstname)
    const [lastName, setLastName] = useRecoilState(lastname)
    const [phone, setPhone] = useRecoilState(phonenumber)
    const [mail, setMail] = useRecoilState(email)

    console.log("mai;",mail)
    return <div id="personal-information">
        <div className="content">
            <div className="h1"><h1>Hey, Rocketeer, what are your coordinates?</h1></div>
            <div className="group1">
                <div className="firstname">
                    <form>
                        <input type="{text}" placeholder="First Name" 
                        onChange={(e)=>{setFirstName(e.target.value)}}></input>
                        <input type="{text}" placeholder="Last Name" onChange={(e)=>
                        {setLastName(e.target.value)
                        }}></input>
                        <input type="{text}" placeholder="E-mail" onChange={(e)=>
                        {setMail(e.target.value)
                        }}></input>
                        <input type="number" placeholder="+995 5.." onChange={(e)=>
                        {setPhone(parseInt(e.target.value))
                        }}></input>
                    </form>
                </div>
                <button onClick={()=>{console.log("omaga=", firstName, lastName, phone, mail)}}>click me</button>
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

