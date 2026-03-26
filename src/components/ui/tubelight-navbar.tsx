"use client"

import React, { useEffect, useState } from "react"
import { motion } from "motion/react"
import { Link, useLocation } from "react-router-dom"
import { LucideIcon } from "lucide-react"
import { cn } from "../../lib/utils"
import { Logo } from "./logo"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const currentItem = items.find(item => {
        if (item.url.startsWith('/#')) {
            return location.pathname === '/' && location.hash === item.url.replace('/', '');
        }
        return location.pathname === item.url;
    });
    if (currentItem) {
        setActiveTab(currentItem.name);
    } else if (location.pathname === '/' && !location.hash) {
        setActiveTab('Home');
    }
  }, [location, items]);

  return (
    <div
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-300 border border-white/10 rounded-full overflow-hidden shadow-2xl",
        className,
      )}
      style={{ 
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(10, 14, 12, 0.9))',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)'
      }}
    >
      <div className="px-4 sm:px-6 lg:px-8 h-12 md:h-14 flex items-center relative">
        <Logo imgClassName="h-6 md:h-8" />

        <div className="flex items-center gap-1 sm:gap-2 mx-auto">
          {items.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.name

            return (
              <Link
                key={item.name}
                to={item.url}
                onClick={(e) => {
                  setActiveTab(item.name);
                  if (item.url.startsWith('/#') && location.pathname === '/') {
                    const id = item.url.replace('/#', '');
                    const element = document.getElementById(id);
                    if (element) {
                      e.preventDefault();
                      element.scrollIntoView({ behavior: 'smooth' });
                      window.history.pushState(null, '', item.url);
                    }
                  } else if (item.url === '/' && location.pathname === '/') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    window.history.pushState(null, '', '/');
                  }
                }}
                className={cn(
                  "relative cursor-pointer text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1.5 rounded-full transition-colors shrink-0 uppercase tracking-wider",
                  "text-primary hover:text-primary/80",
                  isActive && "text-secondary",
                )}
              >
                <span className="hidden md:inline whitespace-nowrap">{item.name}</span>
                <span className="md:hidden">
                  <Icon size={14} strokeWidth={2.5} />
                </span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-secondary/10 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-secondary to-primary rounded-t-full">
                      <div className="absolute w-12 h-6 bg-secondary/20 rounded-full blur-md -top-2 -left-2" />
                    </div>
                  </motion.div>
                )}
              </Link>
            )
          })}
        </div>

        <div className="absolute right-4 sm:right-6 lg:right-8">
          <a 
            href="#partner-section" 
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('partner-section');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                window.history.pushState(null, '', '#partner-section');
              }
            }}
            className="bg-secondary hover:bg-secondary/90 text-white text-[10px] md:text-xs font-bold px-3 md:px-4 py-1.5 md:py-2 rounded-full transition-all duration-300 shadow-lg shadow-secondary/20 uppercase tracking-wider"
          >
            Host
          </a>
        </div>
      </div>
    </div>
  )
}
