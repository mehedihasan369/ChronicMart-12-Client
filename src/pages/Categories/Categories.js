import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const Categories = () => {
    const [data, setDAta] = useState([]);
    
    useEffect( () =>{
        fetch('http://localhost:5000/categories')
        .then(res =>res.json())
        .then(data => setDAta(data))
    }, []);
    return (
        <div>
        
            

{data.map(data=><Link className="btn m-2 w-full">{data.name}</Link>
)}
{/* {data.map(data=><CategoryCard key={data.id} data={data} ></CategoryCard>)} */}

        
        
        </div>
    );
};

export default Categories;