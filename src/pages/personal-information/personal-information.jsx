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

    console.log("mai;")
    return <div id="personal-information">
        <div className="content">
            <div className="title"><p>Hey, Rocketeer, what are your coordinates?</p></div>
            <div className="group1">
                <div className="inputtype">
                    <form className="form">
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
                
                <div>
                    <Navigation prevPage="" nextPage="technical-skillset"   />
                </div>
                
            </div>
            
        </div>
        <div className="info-area">
            <div className="title">Redberry Origins</div>
            <div className="text">
                <div>You watch “What? Where? When?” Yeah. Our founders used to play it.
                 That’s where they got a question about a famous American author and screenwriter Ray Bradbury.
                  Albeit, our CEO Gaga Darsalia forgot the exact name and he answered Ray Redberry. 
                  And at that moment, a name for a yet to be born company was inspired - Redberry 😇
                </div>
            </div>
        </div>
        </div>
}

