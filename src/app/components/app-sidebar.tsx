"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import NavigationLogo from "@/app/assets/svg/NavigationLogo";
import DashboardIcon from "@/app/assets/svg/DashboardIcon";
import PatientsJurneyIcon from "@/app/assets/svg/PatientsJourneyIcon";
import NavigationMenuIcon from "@/app/assets/svg/NavigationMenuIcon";
import ChatIcon from "@/app/assets/svg/ChatIcon";
import DocsIcon from "@/app/assets/svg/DocsIcon";
import PinIcon from "@/app/assets/svg/PinIcon";
import WorkflowIcon from "@/app/assets/svg/WorkflowIcon";
import AcuityIcon from "@/app/assets/svg/AcuityIcon";
import NavigatorResourceIcon from "@/app/assets/svg/NavigatorResourceIcon";
import SignoutIcon from "@/app/assets/svg/SignoutIcon";
import HelpIcon from "@/app/assets/svg/HelpIcon";
import { ChevronDown } from "lucide-react";

interface NavItem {
  title: string;
  href: string;
  icon?: React.ReactNode;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  {
    title: "Navigator Dashboard",
    href: "/navigator/dashboard",
    icon: <DashboardIcon />,
  },
  {
    title: "Patients Journey",
    href: "/patients-journey",
    icon: <PatientsJurneyIcon />,
  },
  {
    title: "Navigation Tasks",
    href: "/navigation-tasks",
    icon: <NavigationMenuIcon />,
  },
  {
    title: "Patient & Team Communication Hub",
    href: "/communication-hub",
    icon: <ChatIcon />,
  },
  {
    title: "Documentation & Screening Tools",
    href: "/documentation-tools",
    icon: <DocsIcon />,
    children: [
      { title: "Screening Forms", href: "/documentation-tools/screening" },
      { title: "Assessment Tools", href: "/documentation-tools/assessment" },
    ],
  },
  {
    title: "PIN Reimbursement Support",
    href: "/pin-reimbursement",
    icon: <PinIcon />,
  },
  {
    title: "Workflow Management & Role Delineation",
    href: "/workflow-management",
    icon: <WorkflowIcon />,
  },
  {
    title: "Acuity",
    href: "/acuity",
    icon: <AcuityIcon />,
  },
  {
    title: "Navigator Resource Repository",
    href: "/resource-repository",
    icon: <NavigatorResourceIcon />,
    children: [
      { title: "Patient Resources", href: "/resource-repository/patient" },
      { title: "Provider Resources", href: "/resource-repository/provider" },
    ],
  },
];

// Recursive component to render menu items with n-level nesting
const MenuItem = ({ item, level = 0 }: { item: NavItem; level?: number }) => {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);

  const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
  const hasChildren = item.children && item.children.length > 0;

  const toggleExpanded = () => {
    setIsExpanded(prev => !prev);
  };

  const paddingLeft = level === 0 ? "pl-4" : level === 1 ? "pl-8" : level === 2 ? "pl-12" : "pl-16";

  return (
    <div className="w-full max-w-60">
      {hasChildren ? (
        <button
          onClick={toggleExpanded}
          className={`w-full flex items-center justify-between py-3 px-3 text-left rounded-lg transition-colors ${
            isActive ? "bg-[#FFFFFF36] text-[#FFFFFF]" : "text-[#FFFFFF] hover:bg-[#FFFFFF1A] hover:text-[#FFFFFF]"
          } ${paddingLeft}`}>
          <div className="flex items-center space-x-3">
            {item.icon && level === 0 && item.icon}
            <span className="sidebar-text">{item.title}</span>
          </div>
          <ChevronDown
            className={`h-4 w-4 flex-shrink-0 transition-transform duration-300 ease-in-out ${
              isExpanded ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      ) : (
        <Link
          href={item.href}
          className={`w-full flex items-center py-3 px-3 transition-colors ${
            isActive ? "bg-[#FFFFFF36] text-[#FFFFFF]" : "text-[#FFFFFF] hover:bg-[#FFFFFF1A] hover:text-[#FFFFFF]"
          } ${paddingLeft}`}>
          <div className="flex items-center space-x-3">
            {item.icon && level === 0 && item.icon}
            <span className="sidebar-text">{item.title}</span>
          </div>
        </Link>
      )}

      {hasChildren && (
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}>
          <div className="mt-1 space-y-1">
            {item.children!.map(child => (
              <MenuItem key={child.href} item={child} level={level + 1} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export function AppSidebar() {
  return (
    <div
      className="w-60 text-[#FFFFFF] h-full flex flex-col"
      style={{
        background: "linear-gradient(179deg, #004489 -3.28%, #00254B 100%)",
      }}>
      {/* Header */}
      <div className="px-4 py-3 border-b border-[#003e7d]">
        <NavigationLogo />
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 overflow-y-auto space-y-2 py-10">
        {navItems.map(item => (
          <MenuItem key={item.href} item={item} />
        ))}
      </div>

      {/* Bottom Actions */}
      <div className="px-1 py-4 space-y-2">
        <Link href="/sign-out" className={`w-full flex items-center py-3 px-3 transition-colors`}>
          <div className="flex items-center space-x-3">
            <SignoutIcon />
            <span className="sidebar-text">Sign Out</span>
          </div>
        </Link>
        <Link href="/help-center" className={`w-full flex items-center py-3 px-3 transition-colors`}>
          <div className="flex items-center space-x-3">
            <HelpIcon />
            <span className="sidebar-text">Help Center</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
