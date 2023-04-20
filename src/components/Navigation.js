import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import cookie from "cookie";
import MenuIcon from "@mui/icons-material/Menu";

//isLoggedIn is passed as prop from Router.js

const Navigation = () => {
  const navigate = useNavigate();
  const cookies = cookie.parse(document.cookie);

  const deleteCookie = () => {
    if(cookies["loggedIn"]){
      document.cookie = "loggedIn=null; max-age=0";
      navigate('/login');
    } else {
      navigate('/login');
    }
  }


  return (
    <AppBar position="relative">
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          FakeCars.com
        </Typography>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/about">About</Link>
          </li>
          <li
            className="nav-list-item"
            onClick={deleteCookie}
          >
           {cookies["loggedIn"] ? "Logout" : "Login"}
            
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
