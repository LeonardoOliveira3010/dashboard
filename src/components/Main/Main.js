/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
// import { Pie } from 'react-chartjs-2'
// import Navbar from '../Navbar/Navbar'
import shopping from '../../assets/cart.svg'
import graphic from '../../assets/graphic.svg'
import spent from '../../assets/spent.svg'
import {BarChart} from '../Charts/Chart'
import './main.css'


export const Main = () => {
    // const name = 'Leonardo'

    return (
        <main>
            
            <div className="main__container">
                {/* <Navbar /> */}
                <div className="main__cards">
                    <div className="card">
                        <div className="card-inner">
                        
                            <div className="card__info">
                              <img height="30px" width="30px" src={shopping} />
                                <i className="material-icons">more_vert</i>
                            </div>
                           

                            <div className="card__value">
                                
                                <p className="text__primary sales">Valor das vendas :</p>
                                <span className="text__value">R$ 15000,00</span>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                    <div className="card-inner">
                        
                        <div className="card__info products">
                          <img height="30px" width="30px" src={graphic} />
                            <i className="material-icons">more_vert</i>
                        </div>
                       

                        <div className="card__value">
                            <p className="text__primary produtcs">Produto mais vendido</p>
                            <span className="text__value">Produto 01</span>
                        </div>
                    </div>
                    </div>

                    <div className="card">
                    <div className="card-inner">
                        
                        <div className="card__info">
                          <img height="30px" width="30px" src={spent} />
                            <i className="material-icons">more_vert</i>
                        </div>
                       

                        <div className="card__value">
                            <p className="text__primary spent">Gastos do mês</p>
                            <span className="text__value">R$ 5000,00</span>
                        </div>
                    </div>
                    </div>
                </div>

                {/* Criação do Chart (gráfico) */ }
                <div className="main__chart">
                    <div className="chart">
                        <div className="chart-inner">
                        
                            <div className="chart__info">
                                <span className="text__value">Total de vendas</span>
                                <i className="material-icons">more_vert</i>
                            </div>
                            <div className="chart__value">
                                <BarChart />
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        </main>
    )
}


export default Main