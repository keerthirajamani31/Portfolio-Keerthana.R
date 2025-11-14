import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Student Portal CRUD",
      description: "A complete Student Management CRUD application built with React, featuring student data management, responsive design, and interactive UI with Vercel deployment.",
      icon: "bx bxs-graduation",
      link: "https://crud-theta-black.vercel.app/",
      type: "external"
    },
    {
      title: "Food Delivery App",
      description: "A full-stack Food Delivery platform with React, featuring responsive design, food catalog, cart system, order management, and admin panel deployed on Vercel.",
      icon: "bx bxs-restaurant",
      link: "https://food-app-lyart-nine.vercel.app/",
      type: "external",
      adminLink: "https://food-app-lyart-nine.vercel.app/#/admin",
      credentials: {
        email: "admin@example.com",
        password: "admin123"
      }
    }
  ];

  const handleProjectClick = (project) => {
    if (project.link && project.link !== "#") {
      let url = project.link;
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
      }
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleFoodAppClick = (isUserSite) => {
    const project = projects.find(p => p.title === "Food Delivery App");
    if (project) {
      if (isUserSite) {
        window.open(project.link, '_blank', 'noopener,noreferrer');
      } else {
        window.open(project.adminLink, '_blank', 'noopener,noreferrer');
      }
    }
  };

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-br from-[#0c0e2a] to-[#232864] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16 animate-fade-in">Projects</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-gradient-to-br from-purple-600 to-blue-600 p-8 rounded-2xl shadow-2xl transition-all duration-300"
            >
              <i className={`${project.icon} text-6xl text-yellow-300 mb-4`}></i>
              <h3 className="text-2xl font-bold text-yellow-300 mb-4">{project.title}</h3>
              <p className="text-white/90 mb-6 leading-relaxed">{project.description}</p>
              
              {/* Special handling for Food Delivery App */}
              {project.title === "Food Delivery App" && project.adminLink ? (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button 
                      onClick={() => handleFoodAppClick(true)}
                      className="flex-1 bg-green-500 text-white px-4 py-3 rounded-lg font-bold hover:bg-green-400 transition-colors text-center flex items-center justify-center gap-2"
                    >
                      <i className="bx bx-user"></i>
                      User Site
                    </button>
                    <button 
                      onClick={() => handleFoodAppClick(false)}
                      className="flex-1 bg-orange-500 text-white px-4 py-3 rounded-lg font-bold hover:bg-orange-400 transition-colors text-center flex items-center justify-center gap-2"
                    >
                      <i className="bx bx-cog"></i>
                      Admin Panel
                    </button>
                  </div>
                  
                  {/* Add the external link icon button like CRUD */}
                  <button 
                    onClick={() => handleProjectClick(project)}
                    className="w-full bg-cyan-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-cyan-300 transition-colors flex items-center justify-center gap-2"
                  >
                    <i className="bx bx-link-external"></i>
                    View Main Project
                  </button>
                </div>
              ) : (
                /* Regular project button */
                <div className="flex flex-col gap-2">
                  <button 
                    onClick={() => handleProjectClick(project)}
                    className={`w-full px-6 py-3 rounded-lg font-bold transition-colors ${
                      project.link !== "#" 
                        ? 'bg-cyan-400 text-black hover:bg-cyan-300' 
                        : 'bg-gray-500 text-white cursor-default'
                    } flex items-center justify-center gap-2`}
                  >
                    <i className="bx bx-link-external"></i>
                    {project.link !== "#" ? "View Project" : "Under Development"}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <Contact />
      </div>
    </section>
  );
};

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (This is a demo)');
  };

  return (
    <div id="contact" className="pt-20">
      <h1 className="text-4xl font-bold text-center mb-16">Get in Touch</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-6">Find Me</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <i className="bx bxs-envelope text-2xl"></i>
              <span>keerthanaanu3103@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <i className="bx bxs-phone text-2xl"></i>
              <span>9597503534</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input 
            type="text" 
            placeholder="Name" 
            className="w-full p-4 bg-white/10 border border-cyan-400/50 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors"
            required
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full p-4 bg-white/10 border border-cyan-400/50 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors"
            required
          />
          <textarea 
            placeholder="Message" 
            rows="4"
            className="w-full p-4 bg-white/10 border border-cyan-400/50 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors"
            required
          ></textarea>
          <button 
            type="submit"
            className="bg-cyan-400 text-black px-8 py-4 rounded-lg font-bold hover:bg-cyan-300 transition-colors w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Projects;