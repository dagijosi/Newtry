import {
  Facebook,
  Instagram,
  LinkedIn,
  Telegram,
  WhatsApp,
} from "@mui/icons-material";
import React from "react";

const Footer = () => {
  const socialMedias = [
    {Icon: Facebook, link: '#', name: 'Facebook'},
    {Icon: WhatsApp, link: '#', name: 'WhatsApp'},
    {Icon: LinkedIn, link: '#', name: 'LinkedIn'},
    {Icon: Instagram, link: '#', name: 'Instagram'},
    {Icon: Telegram, link: '#', name: 'Telegram'},
  ];
  const helpLinks = [
    "Become a Renter",
    "Premium Renter",
    "Store Manager",
    "Site Map",
    "About us",
    "Contact us",
  ];
  const customerCareLinks = [
    "Customer Service",
    "FAQ’s",
    "Blog",
    "Privacy Policy",
    "Refund and Returns Policy",
    "Terms and Conditions",
  ];

  return (
    <div>
      <div className="bg-blue-950 dark:bg-gray-800 flex justify-center p-4">
        <div className="flex flex-col md:flex-row items-center ">
          <p className=" text-white text-xl font-medium">Sign up to Rent</p>
          <p className=" text-white text-sm font-normal ml-6 mt-1">
            ...to receive latest vehicles and best deals.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row p-10">
        <div className="mr-20 mb-6 md:mb-0">
          <p className="text-sm font-bold">Address</p>
          <p className="text-sm font-normal">4Kilo, Addis Ababa, Ethiopia.</p>
          <div className="flex flex-row mt-2">
          {socialMedias.map(({ Icon, link, name }, index) => (
          <a href={link} key={name} alt={`Link to ${name}`}>
            <Icon className="mr-4" alt={`${name} Icon`} />
          </a>
        ))}
          </div>
        </div>
        <div className="flex justify-center w-full">
          <div className=" flex flex-col mr-10 md:mr-20">
            <h1 className="text-base font-bold">LET US HELP YOU</h1>
            {helpLinks.map((link, index) => (
              <a key={index} href="#" className="text-sm font-normal">
                {link}
              </a>
            ))}
          </div>
          <div className="flex flex-col md:mr-20">
            <h1 className="text-base font-bold">CUSTOMER CARE</h1>
            {customerCareLinks.map((link, index) => (
              <a key={index} href="#" className="text-sm font-normal">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-300 dark:bg-gray-950 flex justify-center p-2 ">
        <p className="text-gray-500 text-sm font-normal">
          © 2024-2025 LOGO - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
