import './index.css'
import { useEffect } from "react"





const ChangeFace = () => {
  
    // document.body.style = 'background: red;';

    const changeBackground = () => {
        if (window.scrollY >= 800) {
            document.body.style = 'background-blend-mode: overlay;';
            
        } else {
            document.body.style = 'background-blend-mode: normal;';
        }
      }

      useEffect(() => {
        changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)
      })

    
    
}

export default ChangeFace