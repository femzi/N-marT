 

const Footer = () => {
  return (
    <footer className="relative mt-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[51px] py-8 sm:py-12 w-full">
      <div className=" max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 xl:gap-16">
    
          
 
    <div className="flex flex-col gap-3 sm:gap-4 text-black">
          <p className="text-base sm:text-lg  font-semibold">Contacts</p>

          <div className="flex flex-col gap-x-6 sm:gap-x-8 md:gap-x-12 gap-y-3 sm:gap-y-4 text-amber-900 text-sm sm:text-base">
          <div className="flex flex-row">

    <a    
              className="cursor-pointer hover:text-black transition-colors"
              href="mailto:emishokunbi@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
  

  Email:  Emishokunbi@gmail.com
            </a>

          </div>
         
            <a
              className="cursor-pointer hover:text-black transition-colors"
              href="https://wa.me/2349164225901?text=Hi%2C%20thank%20you%20for%20shopping%20with%20us!%20What%20would%20you%20like%3F"
              target="_blank"
              rel="noopener noreferrer"
            >
             WhatsApp: (+234)9164225901
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4 text-black">
          <p className="text-base sm:text-lg font-semibold">Quick Links</p>

          <div className="flex flex-col gap-x-6 sm:gap-x-8 md:gap-x-12 gap-y-3 sm:gap-y-4 text-amber-900 text-sm sm:text-base">
            <a
              className="cursor-pointer hover:text-black transition-colors"
              href="terms"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms and Agreement
            </a>
         
            <a
              className="cursor-pointer hover:text-black transition-colors"
              href="donate"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate
            </a>
          </div>
        </div>

   
      </div>

      <div className="border-t border-gray-600 my-6 sm:my-8"></div>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6 text-center lg:text-left">
        
        
 

        <p className="text-sm sm:text-base text-black">
          © 2025 Shokunbi. All rights reserved.
        </p>
      </div>
       
    </footer>
  );
};

export default Footer;
