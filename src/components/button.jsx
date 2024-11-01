import React, { useState } from "react";


function Button(props) {
  const [isHovering, setIsHovering] = useState(false); 


  function onclick_button() {
    props.pressed(props.title)
  }

 
    
  



  return (
    



        <button 
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={onclick_button}
         
          style={{margin: 5,
            borderColor: 'yellowgreen',
            color:isHovering ?  'white':'yellowgreen',
            backgroundColor: isHovering ? 'yellowgreen' : 'transparent',
            cursor: 'pointer', borderRadius: 20, height:30 , width: 50
            }}
        >
          {props.title}
        </button>

       

  )
     
}

export default Button;
