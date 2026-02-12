// import { Link } from 'react-router-dom';
import './App.css'
// import HeroImg from './assets/bag.jpg'
function Hero() {
    return(
        <>
        <section className=' mt-50 ml-12 flex flex-row'>
<div>
       <p className='text-7xl font-bold'> 
             Elevate Style. <br/>Embrace Tradition 
                 </p>
                 <p>Discover timeless beauty with our carefully curated turbans, caps, and jewellery. <br/>
                     Each piece reflects heritage, elegance, and modern flair designed for you. <br/>
                    Whether you're dressing for a ceremony, celebrating culture, or elevating your <br/>
                     everyday look, we offer handcrafted selections that speak        confidence  <br/>
              and identity. <br/>
                  </p>
                         {/* <button className='border-1 text-[800] mt-5 rounded-xl py-2 px-7 hover:text-base hover:text-[#a49d7a] hover:bg-amber-100  transition duration-300'>  <Link to="/signup">Sign Up</Link></button> */}
</div>
<div>
    {/* <img src={HeroImg} width={600} height={600}  className=' ml-30 rounded-full'  alt="" /> */}
</div>
        </section>
        </>
    )
}
export default Hero;