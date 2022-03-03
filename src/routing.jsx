import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Langing from "./pages/langing/langing";
import PersonalInfromation from "./pages/personal-information/personal-information";
import TechnicalSkillSet from "./pages/technical-skillset/technical-skillset";
import Covid from "./pages/covid/covid";
import RedberrianInsights from "./pages/redberrian-insights/redberrian-insights";
import Submit from "./pages/submit/submit";
import Thanks from "./pages/thanks/thanks";
import ResultPage from "./pages/result-page/result-page";
import NotFound from "./pages/not-found/not-found";


export default function Routing() {
    return <Routes>
    <Route path="/" element={<Langing />} />
    <Route path="/personal-information" element={<PersonalInfromation />} />
    <Route path="/technical-skillset" element={<TechnicalSkillSet />} />
    <Route path="/covid" element={<Covid />} />
    <Route path="/redberrian-insights" element={<RedberrianInsights />} />
    <Route path="/submit" element={<Submit />} />
    <Route path="/thanks" element={<Thanks />} />
    <Route path="/result-page" element={<ResultPage />} />
    <Route path="/*" element={<NotFound />} />
  </Routes>
}