 
import './App.css'
import signupimg from './assets/signupimg.jpg'
function    Signup(){
    return(
        <>

    
    <section  className="relative py-8 sm:py-12 ">
        <img src={signupimg} alt="Background" className="absolute inset-0 w-full h-full object-cover"/>
        <div className="relative flex justify-center items-center px-4 sm:px-6 lg:px-8 w-full">
            <form className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-4 sm:py-6 bg-white bg-opacity-90 rounded-xl shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold mb-4 sm:mb-6 text-center sm:text-left">
                Create an Account <br className="hidden sm:block"/> 
                  <span className="sm:hidden"> </span>with us?
                </h2>
                
                <label className="block text-base sm:text-lg md:text-xl lg:text-[20px] font-semibold mb-2">Name</label>
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-2 sm:p-3 mb-3 sm:mb-4 border border-gray-300 rounded text-sm sm:text-base" required
                />
                
                <label className="block text-base sm:text-lg md:text-xl lg:text-[20px] font-semibold mb-2">Email</label>
                <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-2 sm:p-3 mb-3 sm:mb-4 border border-gray-300 rounded text-sm sm:text-base" required
                />
                
                  <label className="block text-base sm:text-lg md:text-xl lg:text-[20px] font-semibold mb-2">Password</label>
                <input
                    type="text"
                    placeholder="Password"
                    className="w-full p-2 sm:p-3 mb-3 sm:mb-4 border border-gray-300 rounded text-sm sm:text-base" required
                />
                   <label className="block text-base sm:text-lg md:text-xl lg:text-[20px] font-semibold mb-2">Confirm Password </label>
                <input
                    type="text"
                    placeholder="Confirm Password "
                    className="w-full p-2 sm:p-3 mb-3 sm:mb-4 border border-gray-300 rounded text-sm sm:text-base" required
                />
                
                <button
                    type="submit"
                    className="w-full bg-[#a49d7a] text-black py-2 sm:py-3 text-sm sm:text-base font-semibold roundedhover:text-base hover:text-[#a49d7a] hover:bg-amber-100 transition duration-300"
                >
                    Sign Up 
    </button>

                <div className="flex justify-center items-center my-3 sm:my-4">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-3 sm:mx-4 text-gray-500 font-medium text-sm sm:text-base">Or</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#a49d7a]  text-black border font-semibold border-gray-300 py-2 sm:py-3 text-sm sm:text-base roundedhover:text-base hover:text-[#a49d7a] hover:bg-amber-100 transition duration-300"
                >
               Sign In
                </button>
            </form>
        </div>
    </section>
  
         </>
    )
}
export default Signup