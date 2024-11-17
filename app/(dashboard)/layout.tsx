"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  BarChart3, 
  BookOpen, 
  Calendar, 
  CreditCard, 
  Home, 
  Menu, 
  PiggyBank, 
  Settings, 
  Target, 
  X 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { ChatInterface } from "@/components/chat/ChatInterface";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Learning Path", href: "/dashboard/learning", icon: BookOpen },
  { name: "Goals", href: "/dashboard/goals", icon: Target },
  { name: "Expenses", href: "/dashboard/expenses", icon: CreditCard },
  { name: "Savings", href: "/dashboard/savings", icon: PiggyBank },
  { name: "Calendar", href: "/dashboard/calendar", icon: Calendar },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-green-50/50">
      {/* Top Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 fixed w-full z-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>

            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
                <PiggyBank className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                FinWell
              </span>
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <Avatar>
                <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          isSidebarOpen ? "block" : "hidden"
        )}
      >
        <div className="fixed inset-0 bg-gray-900/80" onClick={() => setIsSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 w-64 bg-white">
          <div className="flex h-16 items-center justify-between px-6 border-b">
            <span className="text-xl font-semibold">Menu</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <nav className="px-4 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-3 px-2 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setIsSidebarOpen(false)}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="flex pt-16">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-64 fixed inset-y-0 pt-16">
          <div className="flex flex-col h-full bg-white/80 backdrop-blur-md border-r border-gray-100">
            <nav className="flex-1 space-y-1 px-4 py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 px-2 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* Decorative Illustration */}
            <div className="p-4 mt-auto">
              <div className="relative h-32 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg p-4 overflow-hidden">
                <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
                  <div className="w-24 h-24 rounded-full bg-blue-500/10 animate-pulse" />
                </div>
                <div className="absolute top-0 left-0 transform -translate-x-1/4 -translate-y-1/4">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 animate-bounce-slow" />
                </div>
                <p className="text-sm font-medium text-gray-700 relative z-10">
                  "Financial wellness is a journey, not a destination."
                </p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:pl-64">
          <div className="px-4 sm:px-6 lg:px-8 py-6 pb-32">
            {children}
          </div>
        </main>

        {/* Chat Interface */}
        <ChatInterface />
      </div>
    </div>
  );
}