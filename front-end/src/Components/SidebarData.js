import React from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import InboxIcon from '@mui/icons-material/Inbox';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LogoutIcon from '@mui/icons-material/Logout';

export const SidebarData = [
    {
        title: "Profile",
        icon: <AccountBoxIcon/>,
        link: "/Profile",
    },
    {
        title: "Requests",
        icon: <InboxIcon/>,
        link: "/AllRequests",
    },
    {
        title: "RequestsBoard",
        icon: <AssignmentIcon/>,
        link: "/acceptedrequestboard",
    },
    {
        title: "Logout",
        icon: <LogoutIcon/>,
        link: "signup",
    },
]

