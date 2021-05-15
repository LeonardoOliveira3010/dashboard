import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'

const App = () => {
// Utilizando o Estado do React ( Hook )
  const [sideBarOpen, setSideBarOpen] = React.useState(false)
  
  const openSideBar = () => setSideBarOpen(true)

  const closeSideBar = () => setSideBarOpen(false)


  return (
    <>
      <div className="container">
        <Sidebar sideBarOpen={sideBarOpen} closeSideBar={closeSideBar}/>
        <Navbar />
      </div>
    </>

  )

}



export default App