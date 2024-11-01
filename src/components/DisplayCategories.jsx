import React from "react"
import { Category } from '../data/category'



function DisplayCategories() {



    return (

        
        <div style={{ marginTop: 30, marginLeft: 16, justifyContent: 'center', }}>

             <div style={{display:"flex" , flexDirection: "row", justifyContent: "center", alignItems:"center"}}>
            <h1 style={{color:"yellowgreen", fontSize: 40}} >Catalogue</h1>
             </div>
            <div style={{ marginLeft: '20', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 30, marginTop:20 }}>




                {Category.map((item, index) => (

                    <div style={{
                        backgroundColor: '#D3D3D3',
                        width: 350,
                        height: 150,
                        borderRadius: 20,
                        marginTop: 10,
                        marginBottom: 10,
                        justifyContent: 'space-between',
                        display: 'flex',
                        flexDirection: 'row',
                        boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.7)' // Adjusted box shadow for 3D effect
                    }}>

                        <div style={{ backgroundColor: '#D3D3D3', alignContent: 'center' , marginRight:10}}>
                            <h1 style={{fontSize:30, marginLeft:20}}>{item.name}</h1>
                        </div>

                        <div style={{}}>
                            <img src={item.image} alt={item.name} />
                        </div>

                    </div>









                )

                )}


            </div>
        </div>
    )
}

export default DisplayCategories;
