"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import {
  IconSearch,
  IconHome,
  IconChartBar,
  IconChartPie,
  IconAdjustments,
  IconAlertCircle,
  IconCurrencyDollar,
  IconUser,
  IconFlame,
  IconTrendingUp,
  IconStack,
  IconBook,
  IconSettings,
  IconHelpCircle,
  IconChevronDown,
  IconChevronRight,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function SidebarDemo() {
  const [open, setOpen] = useState(true);
  const [collapse, setCollapse] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const links = [
    { label: "Search", href: "#", icon: <IconSearch className="h-5 w-5" /> },
    { label: "Home", href: "#", icon: <IconHome className="h-5 w-5" /> },
    { label: "Market Overview", href: "#", icon: <IconChartBar className="h-5 w-5" /> },
    { label: "Predictive Analytics", href: "#", icon: <IconChartPie className="h-5 w-5" /> },
    { label: "Portfolio Optimization", href: "#", icon: <IconAdjustments className="h-5 w-5" /> },
    { label: "Signals and Alerts", href: "#", icon: <IconAlertCircle className="h-5 w-5" /> },
    { label: "Smart Money Tracking", href: "#", icon: <IconCurrencyDollar className="h-5 w-5" /> },
    { label: "NFT Profiler", href: "#", icon: <IconUser className="h-5 w-5" /> },
    { label: "Hot Contracts", href: "#", icon: <IconFlame className="h-5 w-5" /> },
    { label: "Chain Growth", href: "#", icon: <IconTrendingUp className="h-5 w-5" /> },
    { label: "Ecosystems", href: "#", icon: <IconStack className="h-5 w-5" /> },
    { label: "Research and Insights", href: "#", icon: <IconBook className="h-5 w-5" /> },
    { label: "Account Settings", href: "#", icon: <IconSettings className="h-5 w-5" /> },
    { label: "Help Center", href: "#", icon: <IconHelpCircle className="h-5 w-5" /> },
  ];

  const handleCollapseToggle = () => {
    setCollapse(!collapse);
    setOpen(!collapse);
  };

  const handleLinkClick = (label: React.SetStateAction<string>) => {
    setActiveLink(label);
  };

  return (
    <div className="flex h-screen bg-[#111a22] scrollbar scrollbar-thumb-rose-500">
      <Sidebar open={open} setOpen={setOpen} collapse={collapse}>
        <SidebarBody className="justify-between gap-10 h-full overflow-y-auto" collapse={collapse}>
          <div className="flex flex-col flex-1">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink
                  key={idx}
                  link={link}
                  className={`${activeLink === link.label ? "bg-gray-700 text-white" : ""} px-2 py-2 rounded-md transition-colors duration-200 ease-in-out`}
                  
                />
              ))}
              <SidebarLink
                link={{
                  label: collapse ? "Expand Sidebar" : "Collapse Sidebar",
                  href: "#",
                  icon: collapse ? <IconChevronRight className="h-5 w-5 text-white" /> : <IconChevronDown className="h-5 w-5 text-white" />,
                }}
                className={`${activeLink === (collapse ? "Expand Sidebar" : "Collapse Sidebar") ? "bg-gray-700 text-white" : ""} px-2 py-2 rounded-md transition-colors duration-200 ease-in-out`}
              />
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
    </div>
  );
}

export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20 pl-2"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-white dark:text-white whitespace-pre"
      >
        Acet Labs
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 pl-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black  dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};
