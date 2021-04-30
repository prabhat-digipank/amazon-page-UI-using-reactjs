import React from 'react'
import "./Header.css";
import amazon from './images/amazon.jpg';
import RoomIcon from '@material-ui/icons/Room';
import SearchIcon from '@material-ui/icons/Search';
import flag from './images/flag.jpg';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const Header = () => {
    return(
        <div className="header">
            <div className="header1">
            <img src={amazon} alt=""/>
            </div>

            <div className="header2">
            <span style={{color:"white"}}><RoomIcon/></span>
            <span style={{color:"white"}}>Hello</span><br/>
            <span style={{color:"white"}}> Select your address</span>
            </div>

            <div className="header3">
            <input placeholder="All" type="text"/>
            <span style={{color:"orange"}}><SearchIcon/></span>
            </div>

            <div className="header4">
            <img src={flag} alt=""/>
            </div>

            <div className="header5">
            <span style={{color:"white", fontSize: "15px"}}>Hello, Sign in</span><br/>
            <span style={{color:"white"}}><b>Account & Lists</b></span>
            <span style={{color:"white"}}><ArrowDropDownIcon/></span>
            </div>

            <div className="header6">
            <span style={{color:"white", fontSize:"15px"}}>Returns</span><br/>
            <span style={{color:"white"}}><b>& Orders</b></span>
            </div>

            <div className="header7">
            <span style={{color:"white" }}><AddShoppingCartIcon/></span>
            <span style={{color:"white"}}>cart</span>
            </div>
        </div>
    )
    
}

export default Header;