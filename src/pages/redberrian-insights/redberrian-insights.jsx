import "./redberrian-insights.scss";
import Navigation from "../../components/navigation/navigation";
import {useRecoilState} from "recoil";
import {devtalktopic, somethingspecial, willorganizedevtalk} from "../../state/atoms";

export default function RedberrianInsights(){
    const [willOrganizeDevtalk, setWillOrganizeDevtalk] = useRecoilState(willorganizedevtalk)
    const[devTalkTopic,setDevTalkTopic] = useRecoilState(devtalktopic)
    const[somethingSpecial,setSomethingSpecial] = useRecoilState(somethingspecial)


    console.log("willOrganizeDevtalk",willOrganizeDevtalk);
    console.log("devtalktopic",devTalkTopic)
    console.log("somethingSpecial",somethingSpecial)
    return <div id="redberrian-insights">
        <Navigation prevPage="covid" nextPage="submit"/>
        <div className="leftPanel">
            <div className="title">What About You?</div>
            <div className="radioQuestion2">
            <p>Would you attend Devtalks and maybe also organize your own?</p>
            <div className="yes"><input type="radio" value={true} name="radio" onChange={(e)=>
                        {setWillOrganizeDevtalk(e.target.value)
                        }}/> Yes</div>
            <div className="no"><input type="radio" value={false} name="radio" onChange={(e)=>
                        {setWillOrganizeDevtalk(e.target.value)
                        }}/> No</div>
            </div>
            <div className="rectangle">
                <p>What would you speak about at Devtalk?</p>
                <textarea className="textArea" rows="4" placeholder="I would..."  onChange={(e)=>
                        {setDevTalkTopic(e.target.value)
                        }}></textarea>
            </div>
            <div className="rectangle2">
                <p>What would you speak about at Devtalk?</p>
                <textarea className="textArea2" rows="4" placeholder="I ..."  onChange={(e)=>
                        {setSomethingSpecial(e.target.value)
                        }}></textarea>
            </div>
        </div>
        <div className="rightPanel">
            <div className="title">Redberry Covid Policies</div>
            <div className="description">
            We were soo much fun before the pandemic started!
            Parties almost every weekend and lavish employee birthday celebrations! Unfortunately,
            covid ruined that fun like it did almost everything else in the world. But we try our best 
            to zhuzh it up a bit. For example, we host biweekly Devtalks where our senior and lead developers
            talk about topics they are passionate about. Previous topics have included Web3, NFT, Laravel 9,
            Kubernetes, etc. We hold these talks in the office but you can join our Zoom broadcast as well.
             Feel free to join either as an attendee or a speaker!
            </div>
        </div>
        </div>
}

