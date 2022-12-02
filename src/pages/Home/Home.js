import React from 'react';
import Categories from '../Categories/Categories';
import './Home.css' ;

const Home = () => {


    return (
<div>

<div className="hero h-96" style={{ backgroundImage: `url("https://images.pexels.com/photos/11516441/pexels-photo-11516441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
  <div className="hero-overlay bg-opacity-0"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl text-zinc-900  font-extrabold">Chronic Mart</h1>
      <p className="mb-5">Buy or sell your used mobile phone..</p>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>

<section className='m-10 text-center'>

<h1 className="text-5xl font-bold">Categories</h1>
<div className="hero ">
    
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className=" w-full h-72 rounded-lg shadow-2xl" />
    <div className='w-2/3'>
    <p>We have a collection of used  brand phones.If you want to buy this  phones ,you can see more.</p>
      
      <Categories></Categories>
     
    </div>
  </div>
</div>

</section>


<div className="card m-5 p-5  lg:card-side bg-base-100  shadow-xl">
  <figure><img src="https://placeimg.com/400/400/arch" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>






</div>
    );
};

export default Home;