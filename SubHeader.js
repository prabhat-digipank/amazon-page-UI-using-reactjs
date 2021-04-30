import React from 'react'
import './SubHeader.css';
import mobile from './images/mobile.jpg';

const SubHeader = () => {
    return(
        <div className="subheader">
        
        <div class="subheader1">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
        </div>  
         
        <div className="subheader2">
        <span style={{color:"white"}}>All</span>
        </div>

        <div className="subheader3">
        <span style={{color:"white", fontSize:"16px"}}>Best Sellers</span>
        </div>

        <div className="subheader4">
        <span style={{color:"white", fontSize:"16px"}}>Mobiles</span>
        </div>

        <div className="subheader5">
        <span style={{color:"white", fontSize:"16px"}}>Today's Deals</span>
        </div>

        <div className="subheader6">
        <span style={{color:"white", fontSize:"16px"}}>Fashion</span>
        </div>

        <div className="subheader7">
        <span style={{color:"white", fontSize:"16px"}}>Prime</span>
        </div>

        <div className="subheader8">
        <span style={{color:"white", fontSize:"16px"}}>New Releasse</span>
        </div>

        <div className="subheader9">
        <span style={{color:"white", fontSize:"16px"}}>Electronics</span>
        </div>

        <div className="subheader10">
        <span style={{color:"white", fontSize:"16px"}}>Customer Services</span>
        </div>

        <div className="subheader11">
        <span style={{color:"white", fontSize:"16px"}}>Amazon Pay</span>
        </div>

        <div className="subheader12">
        <span style={{color:"white", fontSize:"16px"}}>Home & kitchen</span>
        </div>

        <div className="subheader13">
        <span style={{color:"white", fontSize:"16px"}}>Computers</span>
        </div>

        <div className="subheader14">
        <span style={{color:"white", fontSize:"16px"}}>Toys & Games</span>
        </div>

        <div className="subheader15">
        <span style={{color:"white", fontSize:"16px"}}>Books</span>
        </div>

        <div className="subheader16">
        <span style={{color:"white", fontSize:"16px"}}>Sell</span>
        </div>

        <div className="subheader17">
          <img src={mobile} alt=""/>
        </div>

        <div className="subheader18">
           <span style={{color:"white", fontSize:"19px"}}>Shopping made easy | Download the app</span> 
          </div>


        </div>

    )
}
export default SubHeader;