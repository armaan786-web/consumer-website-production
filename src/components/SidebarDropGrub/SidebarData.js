import React from 'react'

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import DashboardIcon from '../../images/dashboardIcon.png'
import FoodIcon from '../../images/FoodIcon.png'
import OrderIcon from '../../images/OrderIcon.png'
import Payment from '../../images/Payment.png'
import supportIcon from '../../images/supportIcon.png'
import OffersIcon from '../../images/OffersIcon.png'
import Report from '../../images/Report.png'

export const SidebarData = [
    {
        title: "Dashboard",
        path: "/webPanel/dashboard",
        icon: DashboardIcon
    },
    {
        title: "Menu Management",
        path: "/webPanel/menu",
        icon: FoodIcon
    },
    {
        title: "Additional Food Items",
        path: "/webPanel/additional",
        icon: FoodIcon
    },
    {
        title: "Orders Management",
        path: "/webPanel/orders",
        icon: OrderIcon
    },
    {
        title: "Payments",
        path: "/webPanel/payments",
        icon: Payment
    },
    {
        title: "Support",
        path: "/webPanel/support",
        icon: supportIcon
    },
    {
        title: "Offers",
        path: "/webPanel/offers",
        icon: OffersIcon
    },
    {
        title: "Report",
        path: "/webPanel/report",
        icon: Report
    },
    // {
    //     title: "Overview",
    //     path: "/webPanel/dashboard",
    //     icon: <AiIcons.AiFillHome />,
    //     iconClosed: <RiIcons.RiArrowDownSFill />,
    //     iconOpened: <RiIcons.RiArrowUpSFill />,
    //     subNav: [
    //         {
    //             title: "Users",
    //             path: "/webPanel/dashboard",
    //             icon: <IoIcons.IoIosPaper />,
    //         },
    //         {
    //             title: "Revenue",
    //             path: "/overview/revenue",
    //             icon: <IoIcons.IoIosPaper />,
    //         },
    //     ]
    // },
]

    // {
    //     title: "Reports",
    //     path: "/webPanel/dashboard",
    //     icon: <AiIcons.AiFillHome />,
    //     iconClosed: <RiIcons.RiArrowDownSFill />,
    //     iconOpened: <RiIcons.RiArrowUpSFill />,
    //     subNav: [0
    //         {
    //             title: "Reports",
    //             path: "/reports/reports1",
    //             icon: <IoIcons.IoIosPaper />,
    //         },
    //         {
    //             title: "Reports",
    //             path: "/reports/reports2",
    //             icon: <IoIcons.IoIosPaper />,
    //         },
    //         {
    //             title: "Reports",
    //             path: "/reports/reports3",
    //             icon: <IoIcons.IoIosPaper />,
    //         },
    //     ]
    // },



    // {
    //     title: "Mesages",
    //     path: "/webPanel/dashboard",
    //     icon: <FaIcons.FaEnvelopeOpenText />,
    //     iconClosed: <RiIcons.RiArrowDownSFill />,
    //     iconOpened: <RiIcons.RiArrowUpSFill />,
    //     subNav: [
    //         {
    //             title: "Message 1",
    //             path: "/reports/reports1",
    //             icon: <IoIcons.IoIosPaper />,
    //         },
    //         {
    //             title: "Message 2",
    //             path: "/reports/reports2",
    //             icon: <IoIcons.IoIosPaper />,
    //         },
    //     ]
    // },