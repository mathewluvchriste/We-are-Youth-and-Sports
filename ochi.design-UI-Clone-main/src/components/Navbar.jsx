import React, { useEffect, useState } from 'react';

function Navbar() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`fixed z-[999] w-full px-[50px] py-[15px] flex justify-between items-center transition-all duration-500 ${
      show ? 'top-0 backdrop-blur-md bg-transparent' : '-top-20'
    }`}>
    <div className='logo'>
      <h1 className="text-3xl font-bold">
        YAS
      </h1>
    </div>

      <div className='links flex gap-6'>
        {["Programs", "Events", "About", "Gallery", "Kabinet Cakraprana"].map((item, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden leading-none h-[24px] ${index === 4 ? "ml-80" : ""}`}
          >
            <a href="#">
              <div className="flex flex-col">
                <span className="text-md font-light transition-transform duration-300 group-hover:-translate-y-[100%]">{item}</span>
                <span className="text-md font-light translate-y-[100%] transition-transform duration-300 group-hover:-translate-y-[100%]">{item}</span>
              </div>
              <span className="absolute left-0 bottom-1 h-[1px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
