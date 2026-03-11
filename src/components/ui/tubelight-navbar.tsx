"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { LucideIcon } from "lucide-react"
import { cn } from "../../lib/utils"

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
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6 w-full px-4 pointer-events-none",
        className,
      )}
    >
      <div className="flex items-center justify-center gap-1 sm:gap-2 bg-black/20 border border-white/10 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg mx-auto w-fit pointer-events-auto">
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
                "relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors shrink-0",
                "text-white/80 hover:text-white",
                isActive && "bg-white/10 text-white",
              )}
            >
              <span className="hidden md:inline whitespace-nowrap">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-primary to-secondary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-secondary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
