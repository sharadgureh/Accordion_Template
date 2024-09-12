import React, { useState } from "react"
import { FaPlus } from "react-icons/fa6"
import { FaMinus } from "react-icons/fa"
FaPlus
function accordion(props) {
        const {title,description}=props
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [isOpen, setIsOpen] = useState(false)

  return (
    
        <li className={isOpen && "open"} onClick={()=> setIsOpen(!isOpen)}>
                <div>
                        <span> {isOpen? <FaMinus/>: <FaPlus/>}</span>
                        <h4>{title}</h4>
                </div>
                {isOpen && <small>{description}</small>}
        </li>
   
  )
}

export default accordion