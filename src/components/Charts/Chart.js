import React from 'react'
import {Bar} from 'react-chartjs-2';



export const BarChart = () => {

    return (
        <div>
            <Bar   
                 
                data={{
                    labels: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun',],
                    datasets: [
                        {
                            label: 'Receitas.',
                            fontColor:'#fff',
                            data: [5000, 10000, 6500, 3800, 14000, 20000],
                            backgroundColor: [
                                'rgba(24, 174, 75, 0.9)',
                                'rgba(54, 162, 235, 0.9)',
                                'rgba(255, 206, 86, 0.9)',
                                'rgba(75, 192, 192, 0.9)',
                                'rgba(153, 102, 255, 0.9)',
                                'rgba(255, 159, 64, 0.9)'
                            ],
                            borderColor: [
                                'rgba(24, 174, 75, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            
                            borderWidth: 2
                        },

                        {
                            label: "Despesas",
                            data: [3000, 8000, 5400, 5350, 12010, 13000],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.9)',
                                'rgba(255, 99, 132, 0.9)',
                                'rgba(255, 99, 132, 0.9)',
                                'rgba(255, 99, 132, 0.9)',
                                'rgba(255, 99, 132, 0.9)',
                                'rgba(255, 99, 132, 0.9)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(255, 99, 132, 1)',
                                'rgba(255, 99, 132, 1)',
                                'rgba(255, 99, 132, 1)',
                                'rgba(255, 99, 132, 1)',
                                'rgba(255, 99, 132, 1)'
                            ],
                            
                            borderWidth: 2
                        }
                    
                    ],

                   
                    
                }}
                height={240}
                options={{
                    maintainAspectRatio: false,
                    fontColor: "#fff",
                    labels: {
                        fontColor: "#fff"
                    }       
                }}
            />
        </div>
    )
}

// export const PieChart = () =>{
//     return (
//         <div>
//             <Pie
//                 data={{
//                     labels:[
//                         'red', 'blue', 'Yellow'
//                     ],
//                     datasets: [{
//                         label: "teste",
//                         data: [300, 100, 400],
//                         backgroundColor: [
//                             'rgb(255, 99, 132)',
//                             'rgb(54, 162, 235)',
//                             'rgb(255, 205, 86)'
//                         ],    
//                         // hoverOffset: 4
//                     }]
//                 }}
                
//                 options={{
//                     maintainAspectRatio: false
//                 }}    
//             />
//         </div>
//     )
// }

export default BarChart