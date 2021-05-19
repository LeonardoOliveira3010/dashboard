import React from 'react'
import Profile from '../Profile/Profile'
import './navbar.css'
// import '../Sidebar/sidebar.css'


const Navbar = ({ sideBarOpen, closeSideBar }) => {

    return (
        <nav className="navbar">
            <div className="navbar__text">
                <div className={sideBarOpen ? "sideBar-responsive" : ""}>
                    <i onClick={() => closeSideBar()}
                    className="material-icons"
                    id="sideBarIcon"
                    aria-hidden="true"
                    >dashboard</i>

                </div>
            
            </div>

            <div className="navbar__profile">
                <div className="navbar__info">
                    {/* <input placeholder="Pesquisar" type="text">
                        
                    </input> */}
                    <button><i className="material-icons">search</i></button>
                </div>

                <div className="navbar__icons">
                    <i className="material-icons">notifications</i>
                    <i className="material-icons">question_answer</i>
                    <i className="material-icons">info</i>
                </div>
                
                {/* <div className="navbar__user">
                    <img height="40px" width="40px" src={usuario}></img>
                    <span>{name}</span>
                    <i className="material-icons">expand_more</i>
                </div> */}
                
                <Profile />
            </div>
        </nav>
    )
}

export default Navbar
