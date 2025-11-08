import React from 'react';

const About = () => {
  const skills = {
    'FrontEnd': ['HTML', 'CSS', 'JS', 'React'],
    'BackEnd': ['Express JS', 'Node JS'],
    'Database': ['MongoDB']
  };

  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-[#0c0e2a] to-[#232864] text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16 animate-fade-in">About Me</h1>
        
        <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-cyan-500/30 mb-12 hover:scale-105 transition-transform duration-300">
          <p className="text-lg leading-relaxed">
            I am <span className="text-cyan-300 font-bold">Keerthana</span> from <span className="font-bold">Madurai</span>. 
            Completed my <span className="text-green-300 font-bold">M.E Degree</span> at{' '}
            <span className="text-yellow-300 font-bold">Velammal College of Engineering and Technology</span> in{' '}
            <span className="text-cyan-300 font-bold">2025</span>. I'm a <span className="text-cyan-300 font-bold">Fresher</span>{' '}
            and a <span className="text-cyan-300 font-bold">Skilled MERN Stack Developer.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div 
              key={category}
              className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-6 rounded-xl border border-cyan-500/30 hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl text-cyan-300 font-bold mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span 
                    key={skill}
                    className="bg-cyan-600/30 text-cyan-200 px-3 py-2 rounded-full text-sm border border-cyan-400/50 hover:bg-cyan-500/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;