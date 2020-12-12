import React from "react";
import Towns from "./Towns";
import "../styles/App.css";

export default function Cities(props){

const [toggles,setToggles] = React.useState(false);

const handleClick = ()=> {

  setToggles(!toggles);

};
return (
  <>
    <div onClick={handleClick}>
    {props.city.name}
    </div>
    {toggles &&props.city.towns.map((town,index)=>(
      <Towns  id={`town${index+1}`} town={town} />
    ))}
</>
)};