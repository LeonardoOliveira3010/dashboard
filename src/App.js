/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'

const App = () => {
// Utilizando o Estado do React ( Hook )
  const [sideBarOpen, setSideBarOpen] = React.useState(false)
  
  const openSideBar = () => setSideBarOpen(true)

  const closeSideBar = () => setSideBarOpen(false)


  return (
    <>
      <div className="container">
        <Sidebar sideBarOpen={openSideBar} closeSideBar={closeSideBar}/>
        <Navbar />
        <Main />
      </div>
    </>

  )

}



export default App