"use client";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { DehazeOutlined, ShoppingBasketOutlined } from "@mui/icons-material";
import { Avatar, Input } from "@mui/joy";
import React, { useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const NavBar = () => {
  const [log, setLog] = useState(false);
  const [user, setUser] = useState("Customer");
  const matches = useMediaQuery("(max-width:600px)");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const navItems = {
    Customer: ["RentedVehicles"],
    VehicalOwner: ["Vehicles"],
    Employee: ["User"],
    Adminstrator: ["Employee"],
  };

  const renderNavItems = (items) =>
    items.map((item) =>
      item === "LOGO" ? (
        <a href="/" key={item} className="mr-14 flex">
          <img src="/image/logo.png" alt="Logo" className="w-10 h-10"/>
          <p className="mt-2 text-lg font-semibold">Carnova</p>
        </a>
      ) : item === "Profile" ? (
        <Avatar src="/image/Profile_pic.png" alt="Avatar" key={item} />
      ) : (
        <Button key={item} variant="ghost">
          {item}
        </Button>
      )
    );
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <nav className="flex flex-row justify-between p-2">
      <div className="flex flex-row ml-6">
        {matches ? (
          <DehazeOutlined onClick={handleClick} className="mt-2" />
        ) : (
          renderNavItems(["LOGO", log ? navItems[user] : "Home"])
        )}
      </div>
      {matches && (
        <Menu
          id={id}
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
        >
          <a href="/" className="mt-2 ml-4 flex mr-4">
          <img src="/image/logo.png" alt="Logo" className="w-10 h-10" />
          <p className="mt-2 text-lg font-semibold">Carnova</p>
        </a>
          {log ? navItems[user].map((item, index) => (
            <MenuItem key={index}>{item}</MenuItem>
          )) : <MenuItem>Home</MenuItem>}
        </Menu>
      )}
      <div className="flex flex-row">
        <ModeToggle />
        <Button variant="ghost">
          <ShoppingBasketOutlined />
        </Button>
        {renderNavItems(log ? ["Profile", "LogOut"] : ["SignUp", "Login"])}
      </div>
    </nav>
  );
};

export default NavBar;
