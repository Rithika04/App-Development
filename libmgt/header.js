import React,{useState} from 'react';
import { AppBar,Toolbar,Tabs,Tab} from '@mui/material';
//import logo from './logo.png';
import {Link} from 'react-router-dom';
//import './header.css';
function HeaderComponent() {
  const [count, setCount] = useState();
  return (
    <React.Fragment>
    <AppBar position="static" style={{background:'transparent', boxShadow:'none', color:'white'}}>
    <Toolbar>
    <h1 style={{color:'black'}}>LIBRARY MANAGEMENT SYSTEM</h1>
    <Tabs sx={{marginLeft:'auto'}}  value={count} onChange={(e,count) => setCount(count)} textColor= 'purple'>
    <Link to="/Home"><Tab label="⌂ Home" sx={{color:'black',textDecoration:'none',fontSize:'150%',fontFamily:'brush script mt'}}/></Link>
    <Link to="/LoginPage"><Tab label="🔐 Login" sx={{color:'black',textDecoration:'none',fontSize:'150%',fontFamily:'brush script mt'}}/></Link>

    {/* <Link to="/StockDetails"><Tab label="🏆Stock Details" sx={{color:'purple',textDecoration:'none'}}/></Link>
    <Link to="/ProductDetails"><Tab label="✍Product Details" sx={{color:'purple',textDecoration:'none',}} /></Link>
    <Link to="/OnlineOrder"><Tab label="Online Order" sx={{color:'purple',textDecoration:'none'}}/></Link> */}
    <Link to="/UpdateProfile"><Tab label="👤 Update Profile" sx={{color:'black',textDecoration:'none',fontSize:'150%',fontFamily:'brush script mt'}}/></Link>
    </Tabs>
   </Toolbar>
    </AppBar>
    </React.Fragment>
  )
}

export default HeaderComponent
