import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {getSelectValues} from "../../services/services";
import "./navigation.scss"
export default function Navigation(props){
    // console.log("prsops", props);
    const navigate = useNavigate();
    const location = useLocation();
    function nextPage(){
        console.log("props.nextPage",props.nextPage);
        navigate("/" +props.nextPage);
    }

    function previousPage(){
        navigate("/" +props.prevPage);
    }

    
    function getButtons(){
        switch (location.pathname) {
            case "/technical-skillset":
                return <><div className="icon ellipse-filled"></div>
                <div className="icon ellipse-filled"></div>
                <div className="icon ellipse"></div>
                <div className="icon ellipse"></div>
                <div className="icon ellipse"></div>
                </>
             case "/covid":
                 return <><div className="icon ellipse-filled"></div>
                 <div className="icon ellipse-filled"></div>
                 <div className="icon ellipse-filled"></div>
                 <div className="icon ellipse"></div>
                 <div className="icon ellipse"></div></>
            case "/redberrian-insights":
                return <><div className="icon ellipse-filled"></div>
                <div className="icon ellipse-filled"></div>
                <div className="icon ellipse-filled"></div>
                <div className="icon ellipse-filled"></div>
                <div className="icon ellipse"></div></>
            default: 
            return <><div className="icon ellipse-filled"></div>
            <div className="icon ellipse"></div>
            <div className="icon ellipse"></div>
            <div className="icon ellipse"></div>
            <div className="icon ellipse"></div>
            </>
            
        }
        
    }

    return <div className="navigation">
                <div className="icon previous" onClick={previousPage}></div>
                {getButtons()}
                <div className="icon next" onClick={nextPage}></div>
        </div>
   
}