import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Header = () => {

  
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
      logOut()
          .then(() => { })
          .catch(error => console.error(error))
  }

  const menuItems = <>
      
      {
          user?.email ? 
          <>
        
         <li> <Link onClick={()=>{document.title='Dashboard'}}   className=' font-semibold m-1' to='/dashboard'>DashBoard</Link></li>
          <li><Link  className="btn bg-teal-800 m-1 font-semibold" onClick={handleLogOut}>Logout</Link></li>
          </>
          :
          <>
          <li onClick={()=>{document.title='LogIn'}}  className='font-semibold'><Link to='/login' className=" bg-teal-800" >Login</Link></li>
          <li onClick={()=>{document.title='SignUp'}}  className='font-semibold'><Link to='/signup' className=" bg-teal-800" >Sign Up</Link></li>
          </>
      }
  </>

    return (
        <div className=" ">

<div className="navbar bg-teal-800 p-5 text-white font-bold">
  <div className="navbar-start ">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-teal-800 rounded-box  w-52 ">
        <li> <Link to='/blogs'onClick={()=>{document.title='Blog'}}  >Blog</Link></li>
        
        {menuItems}
        

       
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost font-extrabold normal-case text-3xl"> Chronic Mart </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li> <Link to='/blogs' onClick={()=>{document.title='Blog'}} >Blog</Link></li>
      
      {menuItems}

     
    </ul>
  </div>
 
</div>
        
           


        </div>
    );
};

export default Header;