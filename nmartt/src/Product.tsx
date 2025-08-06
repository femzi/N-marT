import './App.css'
// import img from './assets/bag.jpg'
import scarf from './assets/scarf.png'
import belt from './assets/Screenshot 2025-07-17 at 3.45.05 PM.png'
function  Product(){
    return(
        <>
        
         <p className='text-5xl font-bold text-center mb-10 '> 
              Where Modern Fashion Meets Cultural Legacy
                 </p>
                 <div className=' scrolling ' >
                   <div className='ml-12 flex flex-row gap-5'>
        
                         
                         <div className="relative w-80 h-64">
  {/* <img src={img} alt="Image" className="w-full h-full object-cover" /> */}
    <p className='bg-amber-100 text-center text-lg'>  Shopping Bag</p>
  <div className="absolute inset-0 flex items-basline justify-baseline border-[#a49d7a]  ml-5 mt-5   text-black text-lg font-bold">
  $15,000
  </div>
</div>
           <div className="relative w-80 h-64">
  <img src={scarf} alt="Image" className="w-full  h-full object-cover" />
    <p className='bg-amber-100 text-center text-lg'>  Keffiyeh </p>
  <div className="absolute inset-0 flex items-basline justify-baseline border-[#a49d7a]  ml-5 mt-5   text-black text-lg font-bold">
  $20,000
  </div>
</div>
           <div className="relative w-80 h-64">
  <img src={belt} alt="Image" className="w-full h-full object-cover" />
    <p className='bg-amber-100 text-center'>  Rimestone Belt</p>
  <div className="absolute inset-0 flex items-basline justify-baseline border-[#a49d7a]  ml-5 mt-5   text-black text-lg font-bold">
  $15,000
  </div>
</div>
           <div className="relative w-80 h-64">
  {/* <img src={img} alt="Image" className="w-full h-full object-cover" /> */}
    <p className='bg-amber-100 text-center'>  Shopping Bag</p>
  <div className="absolute inset-0 flex items-basline justify-baseline border-[#a49d7a]  ml-8 mt-5   text-black text-lg font-bold">
  $15,000
  </div>
</div>
                   </div>
                 </div>
        </>
    )
}
export default Product;