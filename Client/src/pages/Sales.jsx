import React from 'react'
import SidebarWithRoleControl from '../components/SidebarWithRoleControl'
import { AuthProvider } from '../components/Auth'

const Sales = () => {
  return (
    <>
      <AuthProvider>
        <div className="home-page flex flex-row w-full min-h-screen">
          <SidebarWithRoleControl /> {/* Use SidebarWithRoleControl instead of Sidebar */}
          <div className="ml-64 w-full bg-[#f4f4f4]">
            Sales
          </div>
        </div>
      </AuthProvider>
    </>
  )
}

export default Sales