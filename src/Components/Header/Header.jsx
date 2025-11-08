import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full bg-gradient-to-br from-[#0c0e2a] to-[#232864] text-white transition-all duration-300 z-50 ${scrolled ? 'py-3 shadow-lg' : 'py-4 md:py-6'}`}>
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4 md:px-6">
        {/* Logo */}
        <a href="#home" className="text-xl md:text-2xl font-bold hover:text-cyan-300 transition-colors duration-300">
          Keerthana
        </a>
        
        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden md:flex gap-6 lg:gap-8">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg lg:text-xl font-semibold hover:text-cyan-300 transition-all duration-300 hover:scale-110 px-2 py-1 lg:px-3 lg:py-2"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0c0e2a] border-t border-gray-700">
          <nav className="flex flex-col py-4">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg font-semibold hover:text-cyan-300 transition-all duration-300 py-3 px-6 hover:bg-[#232864]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;