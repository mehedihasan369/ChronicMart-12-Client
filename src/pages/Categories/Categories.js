import React, { useEffect, useState } from 'react';



const Categories = () => {
    const [data, setDAta] = useState([]);
    
    useEffect( () =>{
        fetch('http://localhost:5000/categories')
        .then(res =>res.json())
        .then(data => setDAta(data))
    }, []);
    return (
        <div>
        
            

{data.map(data=><button className="btn m-2 w-full">{data.name}</button>
)}
{/* {data.map(data=><CategoryCard key={data.id} data={data} ></CategoryCard>)} */}

        
        
        </div>
    );
};

export default Categories;