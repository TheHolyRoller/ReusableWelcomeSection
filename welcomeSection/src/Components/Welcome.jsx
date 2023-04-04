import React from 'react'
// Import the react hooks here 


// Import the style sheet here 
import W from '../Styles/Welcome.module.css'; 


function Welcome() {
  return (
    <div className={W.mainContainer}>
    
    <div className={W.contentContainer}>
            
    {/* Add in the header container here  */}
    <div className={W.headerContainer}>
    
    <h2 className={W.welcomeHeader}>
    Welcome to the Ministry 
    </h2>
        
        
    </div>
    
    {/* Add in the paragraph container  */}
    
    <div className={W.paragraphContainer}>
    
    {/* Add in the paragraph here  */}
    <p className={W.welcomeParagraph}>
    
    AC exists to lead people to real transformation as they love God and change their world.     
    
    </p>
    </div>
    
    <div className={W.infoContentContainer}>
      
      <p className={W.infoContent}>
      We accomplish this as people:
      </p>
      
      
    </div>
    
    
    {/* Add in the moto container here  */}
    <div className={W.motoContainer}>
    
    {/* Add in the motto here  */}
   <span className={W.mottoSpan} >KNOW GOD // FIND FREEDOM // DISCOVER PURPOSE // MAKE A DIFFERENCE</span>

    
    </div>
    
    {/* Add in the line container here  */}
    <div className={W.lineContainer}>
        
    <div className={W.line} ></div>
        
        
    </div>
      
    {/* Add in the CTA Section container here  */}
    <section className={W.CTAContainer}>
    
    {/* Add in the header container here  */}
    <div className={W.CTAHeaderContainer}>
    {/* Add in the header here  */}
    <h4 className={W.CTAHeader}> 
    
    Join Our Services Online!
    </h4>
    
    
    </div>
    
    {/* Add in the buttons container here  */}
    <div className={W.buttonsContainer}>
        
    {/* Add in the first button container here  */}
    <div className={W.CTAButtonContainer}>

    <button>
      Watch FB Live 
    </button> 
        
    </div>
    
    
    <div className={W.CTAButtonContainer}>
    
    <button>
    
    Watch Live Online 
    
    </button>
    
    
    
    </div>
    
    
    {/* Add in the Info Section container  */}
   

    
    
    </div>
    
    <div className={W.infoSectionContainer}>

<p className={W.infoSection}>

We are gathering on campus and online for Sunday Services at 10a and Exchange on Wednesdays at 7p.
</p>

</div>
    
    
    </section>
    
        
    </div>
      {/* Welcome  */}
    </div>
  )
}

export default Welcome
