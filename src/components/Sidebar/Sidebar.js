/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./sidebar.css"

// import {menu, customer} from './src/assets'


const Sidebar = () => {

    return (
        <div id="sidebar">

            <div className="sidebar__title">
                <div className="sidebar__img">
                    <a href="#"> LOGO </a>
                </div>
               
                
            </div>
            

            <div className="sidebar__menu">
                <div className="sidebar__link active__link">
                    <i  className="material-icons">addchart</i>
                    <a href="#">Dashboard</a>
                </div>
            
                <div className="sidebar__link">
                    <i  className="material-icons">tv</i>
                    <a href="#">Produtos</a>
                </div>
            
                <div className="sidebar__link">
                    <i  className="material-icons"> credit_card</i>
                    <a href="#">Vendas</a>
                </div>
            
                <div className="sidebar__link">
                    <i  className="material-icons"> attach_money</i>
                    <a href="#">Financeiro</a>
                </div>
            
                <div className="sidebar__link">
                    <i  className="material-icons">people_alt</i>
                    <a href="#">Clientes</a>
                </div>
            
                <div className="sidebar__link">
                    <i  className="material-icons">settings</i>
                    <a href="#">Configuração</a>
                </div>
            
                <div className="sidebar__logout">
                    <i  className="material-icons">logout</i>
                    <a href="#">Sair</a>
                </div>
            </div>
          
        </div>
    )
}


export default Sidebar
