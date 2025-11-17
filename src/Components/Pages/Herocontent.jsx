import React from 'react';

const Herocontent = () => {
  const handleDownloadCV = () => {
    const pdfUrl = '/KEERTHANA_R__Resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'KEERTHANA_R__Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-[#0c0e2a] to-[#232864] text-white flex items-center justify-center px-4 pt-16">
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Text Content */}
        <div className="space-y-6">
          {/* Greeting */}
          <div className="overflow-hidden">
            <h3 className="text-xl text-cyan-300 font-light tracking-wide animate-slide-in-left">
              Hello, It's Me
            </h3>
          </div>

          {/* Main Name */}
          <div className="overflow-hidden">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-300 via-purple-400 to-cyan-300 bg-clip-text text-transparent animate-typing overflow-hidden whitespace-nowrap border-r-4 border-cyan-400 pr-2 mx-auto">
              Keerthana
            </h1>
          </div>

          {/* Title */}
          <div className="overflow-hidden py-3">
            <div className="relative inline-block">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-300 animate-slide-in-left delay-400">
                MERN STACK DEVELOPER
              </h2>
             
            </div>
          </div>

          {/* Description */}
          <div className="overflow-hidden max-w-2xl mx-auto">
            <p className="text-lg text-gray-200 leading-relaxed font-light animate-fade-in delay-600 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-cyan-400/20 shadow-lg">
              I build <span className="text-cyan-300 font-medium">fast, scalable</span> and {' '}
              <span className="text-purple-300 font-medium">modern full-stack applications</span> using 
              <span className="text-yellow-300 font-medium"> MongoDB, Express.js, React</span> and {' '}
              <span className="text-green-300 font-medium">Node.js</span>. 
              Passionate about creating efficient digital solutions.
            </p>
          </div>

          

          {/* Social Icons */}
          <div className="flex justify-center gap-6 pt-8 animate-fade-in delay-800">
            {[
              { 
                icon: 'bxl-linkedin', 
                color: 'hover:bg-blue-500',
                url: 'https://www.linkedin.com/in/keerthana-rajamani-342025306',
                label: 'LinkedIn'
              },
              { 
                icon: 'bxl-github', 
                color: 'hover:bg-gray-800',
                url: 'https://github.com/keerthirajamani31',
                label: 'GitHub'
              },
              { 
                icon: 'bxl-gmail', 
                color: 'hover:bg-red-500',
                url: 'mailto:keerthanaanu3103@gmail.com',
                label: 'Gmail'
              },
              
            ].map((social) => (
              <a 
                key={social.icon}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-cyan-400 rounded-full flex items-center justify-center bg-white/5 backdrop-blur-sm hover:scale-110 hover:border-transparent transition-all duration-300 group relative"
                aria-label={social.label}
              >
                <i className={`bx ${social.icon} text-xl text-cyan-300 group-hover:text-white transition-colors duration-300`}></i>
                <div className={`absolute inset-0 rounded-full ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
              </a>
            ))}
          </div>

          {/* Download CV Button */}
          <div className="animate-fade-in delay-1000 pt-6">
            <button 
              onClick={handleDownloadCV}
              className="group relative bg-gradient-to-r from-cyan-400 to-purple-500 text-black px-8 py-3 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
            >
              <span className="relative z-10 flex items-center gap-2 justify-center">
                Download CV
                <i className="bx bx-download text-xl group-hover:translate-y-1 transition-transform duration-300"></i>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Herocontent;