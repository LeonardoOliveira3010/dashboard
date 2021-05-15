import React from 'react'
import './navbar.css'
import usuario from '../../assets/leonardo.jpg'

const Navbar = () => {

    const name = 'Leonardo'

    

    return (
        <nav className="navbar">
            <div className="navbar__text">
                <p>Bom dia, <span>{name}</span></p>
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
                
                <div className="navbar__user">
                    <img height="40px" width="40px" src={usuario}></img>
                    <span>{name}</span>
                    <i className="material-icons">expand_more</i>
                </div>
                
            </div>
        </nav>
    )
}

export default Navbar
