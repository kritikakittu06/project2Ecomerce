import React from 'react'
import TopNavigationBar from '../components/Dashboard/TopNavigationBar/TopNavigationBar'
import Sidebar from '../components/Dashboard/Sidebar/Sidebar'

export default function DashboardLayout({children}) {
  return (
    <section className="flex relative bg-gray-100 dark:bg-theme-black">
    {/* Dashboard Sidebar Render */}
    <Sidebar />

    {/* Navigation and Content Render */}
    <div className="w-full relative h-screen overflow-x-auto">
        {/* Top Navigation Bar Render */}
        <TopNavigationBar />

        {/* Content Render */}
        <main className="relative overflow-hidden">
            {children}
        </main>
    </div>
</section>
  )
}
