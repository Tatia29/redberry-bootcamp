import "./redberrian-insights.scss";
import Navigation from "../../components/navigation/navigation";
export default function RedberrianInsights(){
    return <div id="redberrian-insights">
        <Navigation prevPage="covid" nextPage="submit"/>
        <div className="leftPanel">
            <div className="title">What About You?</div>
            <div className="radioQuestion2">
            <p>Would you attend Devtalks and maybe also organize your own?</p>
            <div className="yes"><input type="radio" value="yes" name="radio" /> Yes</div>
            <div className="no"><input type="radio" value="no" name="radio" /> No</div>
            </div>
            <div className="rectangle">
                <p>What would you speak about at Devtalk?</p>
                <div className="textArea"> I would... </div>
            </div>
            <div className="rectangle2">
                <p>Tell us something special</p>
                <div className="textArea2"> I  ... </div>
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

