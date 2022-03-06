import "./skill-card.scss";

export default function SkillCard(props){
    return <div className="skillCard">
        <div>Skill id: {props.id} </div>
        <div>Experience: {props.experience} </div>
        <div className="icon"></div>
    </div>
}
