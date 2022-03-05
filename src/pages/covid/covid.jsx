import "./covid.scss";
import Navigation from "../../components/navigation/navigation";
export default function Covid(){
    return <div id="covid">
        <Navigation prevPage="technical-skillset" nextPage="redberrian-insights"/>
        <div className="leftPanel">
            <div className="title">Covid Stuff</div>
            <div className="radioQuestion1">
            <p>How would you prefer to Work?</p>
            <div className="fromOffice"><input type="radio" value="FromOffice" name="radio" /> From Sairme Office</div>
            <div className="fromHome"><input type="radio" value="FromHome" name="radio" /> From Home</div>
            <div className="hybrid"><input type="radio" value="hybrid" name="radio" /> hybrid</div>
            </div>
            <div className="radioQuestion2">
            <p>Did You Contact Covid-19?</p>
            <div className="yes"><input type="radio" value="yes" name="radio" /> Yes</div>
            <div className="no"><input type="radio" value="no" name="radio" /> No</div>
            </div>
            <div className="dateQuestion1">
                <p>When?</p>
                <div className="when"><form><input type="{text}" placeholder="Date"></input></form></div>
            </div>
            <div className="radioQuestion3">
            <p>Have You Been Vaccinated?</p>
            <div className="yes"><input type="radio" value="yes" name="radio" /> Yes</div>
            <div className="no"><input type="radio" value="no" name="radio" /> No</div>
            </div>
            <div className="dateQuestion2">
                <p>When did you get your last covid vaccine?</p>
                <div className="when"><form><input type="{text}" placeholder="Date"></input></form></div>
            </div>
            
        </div>
        <div className="rightPanel">
            <div className="title">
            Redberry Covid Policies
            </div>
            <div className="description">
            As this infamous pandemic took over the world, 
            we adjusted our working practices so that our employees can be as safe and comfortable as possible.
             We have a hybrid work environment, so you can either work from home or visit our lovely office on 
             Sairme Street. If it was up to us, we would love you to see us in the office
              because we think face-to-face communications Zoom meetings.
             Both on the fun and productivity scales. 
            </div>
        </div>
        
        </div>
}

