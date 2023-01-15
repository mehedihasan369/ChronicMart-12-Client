import React from 'react';
import { useLoaderData } from 'react-router';

const Category = () => {
   const abc = useLoaderData();
    return (
        <div>
         <h1>{abc.name}</h1>
        </div>
    );
};

export default Category;