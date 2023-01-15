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
  const sellerRadio = <>
{/*      
     <li tabIndex={0}>
          <a className="justify-between">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li> */}


  
                    </>



  
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
      <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-teal-800 rounded-box  w-52 ">
        <li> <Link to='/blogs'onClick={()=>{document.title='Blog'}}  >Blog</Link></li>
        {sellerRadio}
        {menuItems}
        

       
      </ul>

      
    </div>
    <Link to='/' className="btn btn-ghost font-extrabold normal-case text-3xl"> Chronic Mart </Link>
         <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden"> 
        <svg  xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>    
  </div>
  
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal p-0">
      <li> <Link to='/blogs' onClick={()=>{document.title='Blog'}} >Blog</Link></li>
      {sellerRadio}
      <li className='items-center'><input type="radio" name="radio-8" className="radio border-4 border-white p-2 m-2" value="Seller"  /> Seller</li>
      {menuItems}

     
    </ul>

    
  </div>


 
 
</div>
        
  


        </div>
    );
};

export default Header;