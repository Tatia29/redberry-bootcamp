import "./covid.scss";
import Navigation from "../../components/navigation/navigation";
import {useRecoilState} from "recoil";
import {workingfrompreference,contactwithcovid19,hadcovid,isvaccinated, vaccinatedat} from "../../state/atoms";
export default function Covid(){
    const [workingPlacePreference, setWorkingPlacePreference] = useRecoilState(workingfrompreference)
    const [contactWithCovid19, setContactWithCovid19] = useRecoilState(contactwithcovid19)
    const [hadCovid, setHadCovid] = useRecoilState(hadcovid)
    const [isVaccinated, setIsVaccinated] = useRecoilState(isvaccinated)
    const [vaccinatedAt, setVaccinatedAt] = useRecoilState(vaccinatedat)
    
   

    return <div id="covid">
        <div className="leftPanel">
            <div className="title">Covid Stuff</div>
            <div className="covidform">
            <div className="radioQuestion1">
            <p>How would you prefer to Work?</p>
            <div className="fromOffice">
                <input type="radio" value="from_office" name="workplace" onChange={(e)=>
                        {setWorkingPlacePreference(e.target.value)
                        }}/> From Sairme Office</div>
            <div className="fromHome"><input type="radio" value="from_home" name="workplace" onChange={(e)=>
                        {setWorkingPlacePreference(e.target.value)
                        }}/> From Home</div>
            <div className="hybrid">
                <input type="radio" value="hybrid" name="workplace" onChange={(e)=>
                        {setWorkingPlacePreference(e.target.value)
                        }} /> hybrid</div>
            </div>
            <div className="radioQuestion2">
            <p>Did You Contact Covid-19?</p>
            <div className="yes">
                <input type="radio" value={true} name="covid19" onChange={(e)=>{
                            setContactWithCovid19(e.target.value)
                        }} /> yes</div>
            <div className="no"><input type="radio" value={false} name="covid19" onChange={(e)=>
                        {setContactWithCovid19(e.target.value)
                        }}/> No</div>
            </div>
            <div className="dateQuestion1">
                <p>When?</p>
                <div className="when"><form><input type="{text}" placeholder="Date" onChange={(e)=>
                        {setHadCovid(e.target.value)
                        }}></input></form></div>
            </div>
            <div className="radioQuestion3">
            <p>Have You Been Vaccinated?</p>
            <div className="yes"><input type="radio" value={true} name="vaccinated" onChange={(e)=>
                        {setIsVaccinated(e.target.value)
                        }} /> Yes</div>
            <div className="no"><input type="radio" value={false} name="vaccinated" onChange={(e)=>
                        {setIsVaccinated(e.target.value)
                        }} /> No</div>
            </div>
            <div className="dateQuestion2">
                <p>When did you get your last covid vaccine?</p>
                <div className="when"><form><input type="{text}" placeholder="Date" onChange={(e)=>
                        {setVaccinatedAt(e.target.value)
                        }}
                        ></input></form></div>
            </div>
            

<Navigation prevPage="technical-skillset" nextPage="redberrian-insights"/>
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

