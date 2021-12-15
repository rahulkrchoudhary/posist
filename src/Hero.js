import React from 'react';
import {Link} from 'react-router-dom'
import something from'./img2.gif';
import something1 from'./posist.png';

const Hero =({handleLogout} )=>{

    return(
        <section className="hero">
           <nav> 
               <h2>Posist</h2>
               <h2>
               <Link  to="/Verification">Create Your channel</Link></h2>
               
               <button onClick={handleLogout}>Logout</button>
                </nav> 

               
                    <div class ="column">
                <div><img  src={something} alt="fireSpot"/></div>
                </div>
                <br></br><br></br><br></br><br></br><br></br>
                <div className="SomeContainer">
               <div>
               <div><img  src={something1} alt="fireSpot"/></div>
<br></br>
                    <h4>The idea for POSist came up when its founders, Ashish & Sakshi, started hunting for a software solution to automate their own restaurant but ended up creating one for themselves. They believe POSist can change the way restaurants deal with its customers at the front end, and automate operations at the back end.

</h4>
                </div>
                <br></br>

                </div>


              
                
        </section>
         
         
         
         
    );
};
export default Hero;

