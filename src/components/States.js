import React from "react";
import Cities from "./Cities";

export default function Sates(props){
  const [toggles,setToggles] = React.useState(false);

  const handleClickState=()=>{
      setToggles(!toggles);
      console.log("city");
  };

  return (
    <>
  <div onClick={handleClickState}>{props.state.name}</div>
    { toggles  && props.state.cities.map((city,index)=>(
    <Cities id={`city${index+1}`} city={city} />
    ))}
    </>
    )
}