/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './profile.css'
import usuario from '../../assets/leonardo.jpg'

export const Profile = () => {
    const profileName = 'Leonardo'
    const handleClick = (event) => {
        alert("Modal ativo")
    }
    

    return (
        <div className="navbar__user" onClick={handleClick}>
            <img height="40px" width="40px" src={usuario}></img>
            <span>{profileName}</span>
            <i className="material-icons" >expand_more</i>
        </div>

    )
}

export default Profile