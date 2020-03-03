import React from 'react';
import {Link} from "react-router-dom";

export default ({containerClass, href, icon, iconSize, name, nameClass}) => {
  let Icon = icon
  return (
      <Link to={href} className={"iconAndName " + containerClass}> 
        <Icon size={iconSize}> </Icon>
        <span class={nameClass}>{name}</span>
      </Link>
  )
}

// export default ({icon, iconSize, name}) => {
//   let Icon = icon
//   return (
//       <div className="iconAndName"> 
//         <Icon size={iconSize}> </Icon>
//         <span>{name}</span>
//       </div>
//   )
// }