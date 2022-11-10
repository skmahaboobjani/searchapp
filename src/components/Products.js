import React from 'react'
import "./Product.css"
const Products = ({data}) => {
    return (
        <div >
            <div>
                {data.map(data =>  
                <div >
                    <div  className='cards'>
                    <img  src={data.recipe.image} alt="img" />
                    <div class="card-body">
                    <center>
                        <h5>{data.recipe.label}</h5>
                        <p>all about calaries {Math.round(data.recipe.calories)}</p>
                        <button className='btn'>Buy</button>
                        </center>
                    </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}

export default Products