import React from 'react'
import "./BigContainer.css";
import alexa from './images/alexa.jpg';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import laptop from './images/laptop.jpg';
import ac from './images/ac.jpg';
import refri from './images/refri.jpg';
import tv from './images/tv.jpg';
import wash from './images/wash.jpg';
import pro1 from './images/pro1.jpg';
import pro2 from './images/pro2.jpg';
import pro3 from './images/pro3.jpg';
import pro4 from './images/pro4.jpg';
import choco from './images/choco.jpg';
import everyday1 from './images/everyday1.jpg';
import everyday2 from './images/everyday2.jpg';
import everyday3 from './images/everyday3.jpg';
import everyday4 from './images/everyday4.jpg';
import ama from './images/ama.jpg';
import ama1 from './images/ama1.jpg';
import ama2 from './images/ama2.jpg';
import ama3 from './images/ama3.jpg';
import playstore from './images/playstore.jpg';
import mask from './images/mask.jpg';
import mask1 from './images/mask1.jpg';
import mask2 from './images/mask2.jpg';
import mask3 from './images/mask3.jpg';
import mask4 from './images/mask4.jpg';
import mask5 from './images/mask5.jpg';
import mask6 from './images/mask6.jpg';
import top1 from './images/top1.jpg';
import top2 from './images/top2.jpg';
import top3 from './images/top3.jpg';
import top4 from './images/top4.jpg';
import ale1 from './images/ale1.jpg';
import ale2 from './images/ale2.jpg';
import ale3 from './images/ale3.jpg';
import ale4 from './images/ale4.jpg';
import h1 from './images/h1.jpg';
import h2 from './images/h2.jpg';
import h3 from './images/h3.jpg';
import h4 from './images/h4.jpg';
import fffff from './images/fffff.jpg';
import aaaaa from './images/aaaaa.png';
import LanguageIcon from '@material-ui/icons/Language';

const BigContainer = () => {
    return(
        <div className="bigcontainer">
        
          <div className="subcontainer">

             <div className="subcontainer1">
              <ArrowBackIosIcon/>
             </div>

             <div className="subcontainer2">
             <span style={{color:"black", fontSize:"30px"}}><br/><br/>Set alarms<br/> hands-free with alexa<br/><br/> <b>each dot</b></span>
             </div>

             <div className="subcontainer3">
             <img src={alexa} alt=""/>
             </div>

             <div className="subcontainer4">
             <ArrowForwardIosIcon/>
             </div>

           </div>


          <div className="box">

            <div className="box1">
            
              <div className="box11">Home essentials | Amazon Brands & more</div>
              <div></div>
              <div className="box12"> <img src={ac} alt=""/><p>ACs</p></div>
              <div className="box13"> <img src={refri} alt=""/><p>Refrigerators</p> </div>
              <div className="box14"> <img src={tv} alt=""/><p>Television</p> </div>
              <div className="box15"> <img src={wash} alt=""/><p>Washing Machine</p> </div><div style={{color:"blue"}}>see more</div>
            </div>

            <div className="box2">
            <div className="box211">Professionls tools, testing & more</div>
             <div></div>
              <div className="box21"> <img src={pro1} alt=""/><p>Professionals Tools</p></div>
              <div className="box22"> <img src={pro2} alt=""/><p>Mesuring Instruments</p> </div>
              <div className="box23"> <img src={pro3} alt=""/><p>Cleaning supplies</p> </div>
              <div className="box24"> <img src={pro4} alt=""/><p>Medical Supplies</p> </div><div style={{color:"blue"}}>see more</div>
            </div>

            <div className="box3">
            <div className="box311">Choclates, sweets & more</div>
            <div className="box31"><img src={choco} alt=""/></div> <div className="txt" style={{color:"blue"}}>see more</div>
            </div>

            <div className="box4">

              <div className="box41">
              <h2><b>Sign in for your best <br/> experience</b></h2></div>

              <div className="box42"><span style={{fontSize:"15px"}}>Sign in Securely</span></div>

              <div className="boxbox">
              <div className="box43"><img src={laptop} alt=""/></div></div>              
            </div>

         </div>


          <div className="secondbox">

            <div className="sbox1">
            <div className="sbox11">Everyday essentials</div>
            <div></div>
            <div className="sbox12"><img src={everyday1} alt=""/><p>Cleaning Essentials</p> </div>
            <div className="sbox13"><img src={everyday2} alt=""/><p>Immunity & Healthcare</p> </div>
            <div className="sbox14"><img src={everyday3} alt=""/><p>Women's personal care</p></div> 
            <div className="sbox15"><img src={everyday4} alt=""/> <p>Men's groomimg</p></div>   <div style={{color:"blue"}}>see more</div>
            </div>

            <div className="sbox2">
            <div className="sbox21">Top picks for home</div>
            <div></div>
            <div className="box22"> <img src={ac} alt=""/><p>ACs</p></div>
            <div className="box23"> <img src={refri} alt=""/><p>Refrigerators</p> </div>
            <div className="box24"> <img src={tv} alt=""/><p>Television</p> </div>
            <div className="box25"> <img src={wash} alt=""/><p>Washing Machine</p> </div><div style={{color:"blue"}}>see more</div>
            </div>

            <div className="sbox3">
            <div className="sbox31">Amazon Brands and more</div>
            <div></div>
            <div className="box32"> <img src={ama} alt=""/><p>Home products</p></div>
            <div className="box33"> <img src={ama1} alt=""/><p>Kitchen & Dining</p> </div>
            <div className="box34"> <img src={ama2} alt=""/><p>Daily essentials</p> </div>
            <div className="box35"> <img src={ama3} alt=""/><p>Clothing Essentials</p> </div><div style={{color:"blue"}}>see more</div>
            </div>

            <div className="sbox4">
            <div className="sbox41">Amazon Pay | Buy Google PLay recharge code now</div>
            <div className="sbox42"> <img src={playstore} alt=""/></div><div className="txt1" style={{color:"blue"}}>Buy now</div>
            </div>

          </div>
                     <div className="ess">Essentials for your safety</div>

            <div className="thirdbox">
                
               <div className="images">
                <div className="tbox11"> <img src={mask} alt=""/></div>
                <div className="tbox12"> <img src={mask1} alt=""/></div>
                <div className="tbox13"> <img src={mask2} alt=""/></div>
                <div className="tbox14"> <img src={mask3} alt=""/></div>
                <div className="tbox15"> <img src={mask4} alt=""/></div>
                <div className="tbox16"> <img src={mask5} alt=""/></div>
                <div className="tbox17"> <img src={mask6} alt=""/></div>
              </div>
            
            </div>

          <div className="fourthbox">
            <div className="fbox1">
              <div className="fbox11">Pick from these type of mask</div>
              <div></div>
              <div className="fbox12"><img src={top1} alt=""/><p>N95 masks and respirators</p></div>
              <div className="fbox13"><img src={top2} alt=""/><p>cloth masks</p></div>
              <div className="fbox14"><img src={top3} alt=""/><p>face covering</p></div>
              <div className="fbox15"><img src={top4} alt=""/><p>view the mask store</p></div><div style={{color:"blue"}}>View all</div>
           </div>

           <div className="fbox2">
             <div className="fbox21">Alexa enabled devices</div>
             <div></div>
             <div className="fbox22"><img src={ale1} alt=""/><p>All-new Echo Dot</p></div>
             <div className="fbox23"><img src={ale2} alt=""/><p></p>All-new fire tv stick</div>
             <div className="fbox24"><img src={ale3} alt=""/><p>Echo show 5</p></div>
             <div className="fbox25"><img src={ale4} alt=""/><p>Kindle E-readers</p></div><div style={{color:"blue"}}>View all</div>
           </div>

           <div className="fbox3">
             <div className="fbox31">Work from Home products</div>
             <div></div>
             <div className="fbox32"><img src={h1} alt=""/><p>Headphones</p></div>
             <div className="fbox33"><img src={h2} alt=""/><p></p>Laptops</div>
             <div className="fbox34"><img src={h3} alt=""/><p>Monitors</p></div>
             <div className="fbox35"><img src={h4} alt=""/><p>Routers</p></div><div style={{color:"blue"}}>View all</div>
          </div>

          <div className="fbox4">
             <div className="fbox41">For efficient home working</div>
             <div className="fbox42"><img src={fffff} alt=""/></div><div className="txt3" style={{color:"blue"}}>see more</div>
          </div>

        </div>
        
                <div className="container">

        <div className="fifthcon">
             <div className="f">Back to top</div>
        

           <div className="sixthcon">
            <div className="s1">
               <p style={{color:"white",fontWeight:"bold",font:"20px"}}>Get to Know Us</p>
               <p style={{color:"grey", fontSize:"13px", fontWeight:"bold",font:"20px"}}>About Us</p>
               <p style={{color:"grey", fontSize:"13px", fontWeight:"bold",font:"20px"}}>Careers</p>
               <p style={{color:"grey", fontSize:"13px", fontWeight:"bold",font:"20px"}}>Press Releases</p>
               <p style={{color:"grey", fontSize:"13px", fontWeight:"bold",font:"20px"}}>Amazon Cares</p>
               <p style={{color:"grey", fontSize:"13px", fontWeight:"bold",font:"20px"}}>Gift a Smile</p>
            </div>

            <div className="s2">
               <p style={{color:"white", fontWeight:"bold",font:"20px"}}>Connect with Us</p>
               <p style={{color:"grey", fontSize:"13px", fontWeight:"bold",font:"20px"}}>Facebook</p>
               <p style={{color:"grey", fontSize:"13px", fontWeight:"bold",font:"20px"}}>Twitter</p>
               <p style={{color:"grey", fontSize:"13px", fontWeight:"bold",font:"20px"}}>Instagram</p>
            </div>

            <div className="s3">
               <p style={{color:"white", fontWeight:"bold",font:"20px"}}>Make Money with Us</p>
               <p style={{color:"grey", fontSize:"13px", fontWeight:"bold",font:"20px"}}>Sell on Amazon</p>
               <p style={{color:"grey", fontSize:"13px", fontWeight:"bold",font:"20px"}}>Sell under Amazon Accelerator</p>
               <p style={{color:"grey", fontSize:"13px", fontWeight:"bold",font:"20px"}}>Amazon Global Selling</p>
               <p style={{color:"grey", fontSize:"13px", fontWeight:"bold",font:"20px"}}>Become an Affiliate</p>
               <p style={{color:"grey", fontSize:"13px", fontWeight:"bold",font:"20px"}}>Fulfillment by Amazon</p>
               <p style={{color:"grey", fontSize:"13px", fontWeight:"bold",font:"20px"}}>Advertise Your Products</p>
               <p style={{color:"grey", fontSize:"13px", fontWeight:"bold",font:"20px"}}>Amazon Pay on Merchants</p>
            </div>

            <div className="s4">
               <p style={{color:"white", fontWeight:"bold",font:"20px"}}>Let Us Help You</p>
               <p style={{color:"grey", fontSize:"13px", fontWeight:"bold",font:"20px"}}>covid-19 and Amazon</p>
               <p style={{color:"grey", fontSize:"13px", fontWeight:"bold",font:"20px"}}>Your Account</p>
               <p style={{color:"grey", fontSize:"13px", fontWeight:"bold",font:"20px"}}>Returns Center</p>
               <p style={{color:"grey", fontSize:"13px", fontWeight:"bold",font:"20px"}}>100% Purchase Protection</p>
               <p style={{color:"grey", fontSize:"13px", fontWeight:"bold",font:"20px"}}>Amazon App Download</p>
               <p style={{color:"grey", fontSize:"13px", fontWeight:"bold",font:"20px"}}>Amazon Assistant Download</p>
               <p style={{color:"grey", fontSize:"13px", fontWeight:"bold",font:"20px"}}>Help</p>
            </div>

        </div>

     </div>

                  <div className="newcon">
                      <div className="im"><img src={aaaaa} alt=""/></div>
                      <div className="web"> <span><LanguageIcon/></span> <input style={{fontSize:"16px"}} type="text" placeholder="English"/></div>
                  </div>

                       

               <div className="yes">
                  <div className="y" style={{color:"lightgray", fontSize:"13px"}}><p>Australia</p></div>
                  <div className="y" style={{color:"lightgray", fontSize:"12px"}}><p>Brazil</p></div>
                  <div className="y" style={{color:"lightgray", fontSize:"12px"}}><p>Canada</p></div>
                  <div className="y" style={{color:"lightgray", fontSize:"12px"}}><p>China</p></div>
                  <div className="y" style={{color:"lightgray", fontSize:"12px"}}><p>France</p></div>
                  <div className="y" style={{color:"lightgray", fontSize:"12px"}}><p>Germany</p></div>
                  <div className="y" style={{color:"lightgray", fontSize:"12px"}}><p>Italy</p></div>
                  <div className="y" style={{color:"lightgray", fontSize:"12px"}}><p>Japan</p></div>
                  <div className="y" style={{color:"lightgray", fontSize:"12px"}}><p>Mexico</p></div>
                  <div className="y" style={{color:"lightgray", fontSize:"12px"}}><p>Netherlands</p></div>
                  <div className="y" style={{color:"lightgray", fontSize:"12px"}}><p>Poland</p></div>
                  <div className="y" style={{color:"lightgray", fontSize:"12px"}}><p>Singapore</p></div>
                  <div className="y" style={{color:"lightgray", fontSize:"12px"}}><p>Spain</p></div>
                  <div className="y" style={{color:"lightgray", fontSize:"12px"}}><p>Turkey</p></div>
                  <div className="y" style={{color:"lightgray", fontSize:"12px"}}><p>United Arab Emirates</p></div>
                  <div className="y" style={{color:"lightgray", fontSize:"12px"}}><p>United Kingdom</p></div>
              </div> 


              <div className="lastcon">

              <div className="l1">
                 <p style={{color:"white",fontWeight:"bold",fontSize:"10px"}}>AbeBooks</p>
                 <p style={{color:"grey", fontSize:"10px"}}>Books, art</p>
                 <p style={{color:"grey", fontSize:"10px"}}>& collections</p>                 
              </div>

              <div className="l2">
                 <p style={{color:"white",fontWeight:"bold",fontSize:"10px"}}>Amazon Web Services</p>
                 <p style={{color:"grey", fontSize:"10px"}}>Scalable Cloud</p>
                 <p style={{color:"grey", fontSize:"10px"}}>& Computing Services</p>                 
              </div>

              <div className="l3">
                 <p style={{color:"white",fontWeight:"bold",fontSize:"10px"}}>Audible</p>
                 <p style={{color:"grey", fontSize:"10px"}}>Download</p>
                 <p style={{color:"grey", fontSize:"10px"}}>Audio Books</p>                 
              </div>

              <div className="l4">
                 <p style={{color:"white",fontWeight:"bold",fontSize:"10px"}}>DPReview</p>
                 <p style={{color:"grey", fontSize:"10px"}}>Digital</p>
                 <p style={{color:"grey", fontSize:"10px"}}>Photography</p>                 
              </div>

              <div className="l5">
                 <p style={{color:"white",fontWeight:"bold",fontSize:"10px"}}>IMDb</p>
                 <p style={{color:"grey", fontSize:"10px"}}>Mobiles, TV</p>
                 <p style={{color:"grey", fontSize:"10px"}}>& Celebrities</p>                 
              </div>


              <div className="l6">
                 <p style={{color:"white",fontWeight:"bold",fontSize:"10px"}}>Shopbop</p>
                 <p style={{color:"grey", fontSize:"10px"}}>Designer</p>
                 <p style={{color:"grey", fontSize:"10px"}}>Fashion Brands</p>                 
              </div>

              <div className="l7">
                 <p style={{color:"white",fontWeight:"bold",fontSize:"10px"}}>Amazon Business</p>
                 <p style={{color:"grey", fontSize:"10px"}}>Everything For</p>
                 <p style={{color:"grey", fontSize:"10px"}}>Your Business</p>                 
              </div>

              <div className="l8">
                 <p style={{color:"white",fontWeight:"bold",fontSize:"10px"}}>Prime Now</p>
                 <p style={{color:"grey", fontSize:"10px"}}>2-Hours Delivery</p>
                 <p style={{color:"grey", fontSize:"10px"}}>on Everyday Items</p>                 
              </div>

              <div className="l9">
                 <p style={{color:"white",fontWeight:"bold",fontSize:"10px"}}>Amazon Prime Music</p>
                 <p style={{color:"grey", fontSize:"10px"}}>70 million songs, ad-free</p>
                 <p style={{color:"grey", fontSize:"10px"}}>Over 9 million podcast episodes</p>                 
              </div>

              </div>


            
              </div>

    </div>

    )
}
export default BigContainer;
