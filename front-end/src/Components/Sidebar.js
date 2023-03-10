import React from 'react'
import {NavLink } from "react-router-dom";
import {motion} from "framer-motion";
import {FaBars, FaHome} from 'react-icons/fa'
import {BiSearch } from "react-icons/bi";
import {CgProfile} from 'react-icons/cg'
import {MdMessage, MdAssignment} from 'react-icons/md'
import {TbLogout} from 'react-icons/tb'
import { useState } from "react";
import { AnimatePresence} from "framer-motion";

const routes = [
  {
    path: "/home",
    name: "Home",
    icon: <FaHome/>,
  },
  {
    path: "/Profile",
    name: "Profile",
    icon: <CgProfile/>,
  },
  {
    path: "/Notifications",        //AllRequests
    name: "Requests", 
    icon: <MdMessage/>,
  },
  {
    path: "/DuePaper",          //AcceptedRequests
    name: "Due Paper", 
    icon: <MdAssignment/>,
  },
  {
    path: "/ResultPending",          //AcceptedRequests
    name: "Result Pending", 
    icon: <MdAssignment/>,
  },
  {
    path: "/startpage",          //Firstpage
    name: "Logout",
    icon: <TbLogout/>,
  },

]

const Sidebar = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "160px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "250px": "35px",

            // transition: {
            //   duration: 0.5,
            //   type: "spring",
            //   damping: 10,
            // },  
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Examiner Portal
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle}/>
            </div>
          </div>
          <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route) => (
                <NavLink
                  activeClassName="active"
                  to={route.path}
                  key={route.name}
                  className="link"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              )
            )}
          </section>
        </motion.div>
        <main>{children}</main>
      </div>
    </>
  );
}

export default Sidebar
