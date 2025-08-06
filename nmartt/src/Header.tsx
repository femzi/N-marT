// import { Link } from 'react-router-dom';
import './App.css'


function Header() {

    return(
        <>
        <section className='my-7 mx-7  flex flex-row '>
<svg className='pl-5' width="60" height="60" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="95" stroke="#f59e0b" stroke-width="10" fill="#fffbea" />
  <path d="M100 40 L160 160 L40 160 Z" fill="#f59e0b" />
  <circle cx="100" cy="100" r="10" fill="#fde68a" />
</svg>
 <ul className={`ml-75 mt- font-[500] bg-[#a49d7a]  text-[#f9f3d9] px-15 py-4 rounded-full flex flex-row gap-10`}>
    <li className='headerLink ' ><a href="">Home</a></li>
     <li className='headerLink' ><a href="">About Us</a></li>
      <li className='headerLink' ><a href="">Shop</a></li>
        <li className='headerLink' ><a href="">Collections</a></li>
         <li className='headerLink' ><a href="">Contact</a></li>
 </ul>
 {/* <ul className='flex flex-row mt-4 ml-40 gap-10'>
<li className='border-1 text-[800] rounded-md py-2 px-4 hover:text-base hover:text-[#a49d7a] hover:bg-amber-100 transition duration-300'>
  <Link to="/signup">Sign Up</Link>
</li>      <li className='border-1 text-[800] rounded-md  py-2 px-4 hover:text-base hover:text-[#a49d7a] hover:bg-amber-100 transition duration-300'><Link to='/Login'>Log In</Link></li>
 </ul> */}
        </section>
        </>
    )
}

export default Header