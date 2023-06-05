import React from "react"
import styles from "./wpp.css" 
import wpp from './images/wpp.svg'


function wppFlutuante(){
  return(
          <div>
     <div className={styles["postion-popup"]}>
     <a target="blank" href="http://api.whatsapp.com/send?1=pt_BR&amp;phone=5542984017730">
        <img src={wpp} alt="" />
      </a>
     </div>
    </div>

  )
}

export default wppFlutuante;
