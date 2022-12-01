import React from 'react';

const CategoryCard = ({data}) => {
    return (
        <div>


<button className="btn m-2 w-full">{data.name}</button>


{/* <div className="card w-full h-32 m-2 bg-base-100 shadow-xl image-full">
  <figure><img src={data.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{data.name}</h2>
    <p>We have a collection of used {data.name} brand phones.If you want to buy this brands phone , see it.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">See more</button>
    </div>
  </div>
</div> */}
            
        </div>
    );
};

export default CategoryCard;