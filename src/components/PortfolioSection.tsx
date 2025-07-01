
import React, { useState } from 'react';
import { ExternalLink, X, ArrowRight } from 'lucide-react';
import PortfolioPin from './PortfolioPin';

interface Project {
  id: number;
  type: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl: string;
  problem: string;
  solution: string;
  learnings: string;
  screenshots: string[];
}

const PortfolioSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  // Function to get tech icon component
  const getTechIcon = (tech: string) => {
    const techName = tech.toLowerCase();
    
    if (techName.includes('react')) {
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.468a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.139s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.823 6.855l-.133.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a30.517 30.517 0 0 1 5.033 0l.234.02.134.193a30.472 30.472 0 0 1 1.35 2.122 30.6 30.6 0 0 1 1.166 2.228l.101.213-.101.213a30.615 30.615 0 0 1-1.166 2.228c-.414.716-.869 1.43-1.35 2.122l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0 0-4.384 28.916 28.916 0 0 0-2.196-3.798c-1.48-.111-2.915-.111-4.395 0a28.873 28.873 0 0 0-2.197 3.798 29.072 29.072 0 0 0 0 4.384 29.106 29.106 0 0 0 2.197 3.798z"/>
        </svg>
      );
    }
    
    if (techName.includes('next')) {
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.5429.0445h-.4570l-.0803-.0537-.0802-.0534.0062-5.2902.0067-5.2906.0236-.0802c.0802-.1597.144-.2134.3682-.2134.1604 0 .7978-.1597 1.8616-.4799z"/>
        </svg>
      );
    }
    
    if (techName.includes('typescript')) {
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
        </svg>
      );
    }
    
    if (techName.includes('supabase')) {
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 0 0 .836 1.659H12V23.604a.396.396 0 0 0 .716.233L21.797 11.576l.401-.562a1.04 1.04 0 0 0-.836-1.66z"/>
        </svg>
      );
    }
    
    if (techName.includes('tailwind')) {
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
        </svg>
      );
    }
    
    if (techName.includes('three')) {
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.38 0h23.24l-2.87 3.64H2.86L.38 0zm2.48 10.93l-2.1-2.68h15.84l-.6.76-12.44-.01-2.85 3.64H5.9l10.54.01-1.32 1.68H1.57l-.71-.9 1.06-1.34-.96-1.22zm3.5 8.45l-1.98-2.52H19.78l-.54.69H5.64l-.99 1.26H20.16l.78-.99L18.88 24H2.69l1.97-2.52z"/>
        </svg>
      );
    }
    
    // Default fallback for unrecognized technologies
    return (
      <span className="text-xs font-bold">
        {tech.charAt(0).toUpperCase()}
      </span>
    );
  };

  const projects: Project[] = [
    {
      id: 1,
      type: 'AI Powered SaaS',
      title: 'RepurposePro -AI Powered SaaS.',
      description: 'An SaaS tool that converts long blog posts into platform-ready short content using AI.',
      tech: ['Next.js', 'TypeScript', 'Supabase', 'TailwindCSS'],
      image: '/rep.png',
      liveUrl: 'https://repurpose-pro.vercel.app',
      problem: 'Creators waste hours repurposing content manually. This tool needed to automate that while preserving tone and brand.',
      solution: "I developed an AI-powered platform that turns blog posts into short-form content for multiple social platforms. It supports tone advanced customization, content management, AI content score and much more — all from a central dashboard. Built with Next.js and OpenRouter API, it's optimized for speed, scale, and ease of use.",
      learnings: 'I learned how to integrate powerful AI features while keeping the UX intuitive. Balancing automation, scalability, and simplicity was key to creating real value for creators.',
      screenshots: ['/rep-dashboard.png', '/rep-editor.png', '/rep-preview.png']
    },
    {
      id: 2,
      type: 'Business Website',
      title: 'Estain - Real Estate Marketplace',
      description: 'A modern real estate business web app built to simplify properties listing and closing deals faster for agents and buyers.',
      tech: ['React', 'Typescript', 'Tailwind CSS'],
      image: '/estain.png',
      liveUrl: 'https://estain.netlify.app',
      problem: 'Agents and property seekers struggled with outdated, slow, and cluttered platforms. The client needed a fast, responsive UI to handle rich property data with seamless search and filtering.',
      solution: 'I built a fast, responsive frontend using React.js and Tailwind CSS, featuring clean UI, advanced search and filter options, and optimized components for handling rich property data across all devices.',
      learnings: 'Building data-rich UIs taught me how to prioritize structure, reusability, and speed — especially when working with media-heavy content and complex filters.',
      screenshots: ['/estain-home.png', '/estain-search.png', '/estain-details.png']
    },
    {
      id: 3,
      type: 'Portfolio',
      title: 'Tameem - Portfolio',
      description: 'An interactive personal portfolio built to stand out and clearly communicate full-stack expertise.',
      tech: ['React', 'Tailwind CSS', 'Three js'],
      image: '/portfolio.png',
      liveUrl: 'https://example.com',
      problem: 'I needed a portfolio that not only showcased my skills but also provided an engaging user experience to leave a lasting impression on visitors.',
      solution: 'I created a visually striking portfolio using React and Three.js, featuring smooth animations, interactive elements, and a clean layout that highlights my projects and skills effectively.',
      learnings: 'This project taught me how to balance aesthetics with performance, ensuring that even complex animations and interactions remain smooth and engaging without compromising load times.',
      screenshots: ['/portfolio-hero.png', '/portfolio-projects.png', '/portfolio-contact.png']
    }
  ];

  const openCaseStudy = (project: Project) => {
    setSelectedProject(project);
    setIsClosing(false);
  };

  const closeCaseStudy = () => {
    setIsClosing(true);
    // Delay the actual close to allow animation
    setTimeout(() => {
      setSelectedProject(null);
      setIsClosing(false);
    }, 300);
  };

  // Handle escape key press
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedProject) {
        closeCaseStudy();
      }
    };

    if (selectedProject) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <>
      <section id="projects" className="py-32">
        <div className="section-padding">
          <div className="max-w-7xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-space-gray px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-royal-indigo rounded-full animate-pulse" />
                <span className="text-sm font-medium text-muted-silver">Featured Work</span>
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-clash font-bold text-soft-light mb-6">
                A small selection of{" "}
                <span className="text-gradient">recent projects</span>
              </h2>
              
              <p className="text-lg text-muted-silver max-w-2xl mx-auto leading-relaxed">
                Showcasing my expertise in creating exceptional digital experiences that drive results.
              </p>
            </div>

            {/* Portfolio Grid */}
            <div className="flex flex-wrap items-center justify-center gap-16 mt-10">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
                >
                  <PortfolioPin
                    // title="/tameem.dev"
                    href={project.liveUrl}
                    onClick={() => openCaseStudy(project)}
                  >

                    {/* Project Image */}
                    <div className="relative sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-6">
                      <div className="relative w-full h-full overflow-hidden rounded-xl bg-space-gray/50">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover object-top hover:object-center transition-all duration-500"
                          style={{ minWidth: '100%', minHeight: '100%' }}
                        />
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="bg-elegant-gold/20 text-elegant-gold px-3 py-1 rounded-full text-xs font-medium">
                          {project.type}
                        </span>
                      </div>

                      <h3 className="font-bold lg:text-2xl md:text-xl text-base text-soft-light mb-3 line-clamp-1">
                        {project.title}
                      </h3>

                      <p className="lg:text-base text-sm text-muted-silver line-clamp-2 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack & CTA */}
                      <div className="flex items-center justify-between mt-6">
                        <div className="flex items-center -space-x-2">
                          {project.tech.slice(0, 4).map((tech, index) => (
                            <div
                              key={index}
                              className="border border-space-gray/40 rounded-full bg-true-black/80 lg:w-8 lg:h-8 w-6 h-6 flex justify-center items-center text-muted-silver hover:text-elegant-gold transition-colors duration-200"
                              title={tech}
                            >
                              {getTechIcon(tech)}
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center gap-2 text-elegant-gold opacity-70 group-hover:opacity-100 transition-opacity">
                          <span className="text-sm font-medium">View Case Study</span>
                          <ArrowRight size={14} />
                        </div>
                      </div>
                    </div>
                  </PortfolioPin>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Case Study Modal with Bottom-to-Top Animation */}
      {selectedProject && (
        <div 
          className={`fixed inset-0 bg-true-black/90 backdrop-blur-md z-50 flex items-end justify-center transition-all duration-300 ease-out ${
            isClosing ? 'opacity-0' : 'opacity-100'
          }`}
          onClick={closeCaseStudy}
        >
          <div 
            className={`bg-space-gray/95 backdrop-blur-xl rounded-t-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-space-gray/30 transform transition-all duration-500 ease-out ${
              isClosing ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Drag Handle */}
            <div className="sticky top-0 bg-space-gray/95 backdrop-blur-xl border-b border-space-gray/20 rounded-t-3xl">
              {/* Drag Handle */}
              <div className="flex justify-center pt-3 pb-2">
                <div className="w-12 h-1 bg-muted-silver/40 rounded-full"></div>
              </div>
              
              <div className="px-6 pb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-clash font-bold text-soft-light">
                    {selectedProject.title}
                  </h2>
                  <p className="text-muted-silver">{selectedProject.type} Project</p>
                </div>
                <button 
                  onClick={closeCaseStudy}
                  className="p-3 hover:bg-true-black/50 rounded-xl transition-all duration-200 group"
                >
                  <X size={20} className="text-muted-silver group-hover:text-soft-light transition-colors" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-8">
              
              {/* Project Preview */}
              <div className="rounded-2xl overflow-hidden border border-space-gray/20 group">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Problem & Solution Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4 p-6 bg-space-gray/30 rounded-2xl border border-space-gray/20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center text-white text-sm font-bold">
                      !
                    </div>
                    <h3 className="text-xl font-clash font-semibold text-soft-light">
                      Challenge
                    </h3>
                  </div>
                  <p className="text-muted-silver leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>
                
                <div className="space-y-4 p-6 bg-space-gray/30 rounded-2xl border border-space-gray/20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white text-sm font-bold">
                      ✓
                    </div>
                    <h3 className="text-xl font-clash font-semibold text-soft-light">
                      Solution
                    </h3>
                  </div>
                  <p className="text-muted-silver leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="space-y-4">
                <h3 className="text-xl font-clash font-semibold text-soft-light">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-gradient-to-r from-elegant-gold/20 to-royal-indigo/20 text-soft-light px-4 py-2 rounded-xl font-medium border border-elegant-gold/20 hover:border-elegant-gold/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Learnings */}
              <div className="space-y-4 p-6 bg-space-gray/20 rounded-2xl border border-space-gray/20">
                <h3 className="text-xl font-clash font-semibold text-soft-light">
                  Key Learnings
                </h3>
                <p className="text-muted-silver leading-relaxed">
                  {selectedProject.learnings}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a 
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-3 bg-gradient-to-r from-elegant-gold to-elegant-gold/80 hover:from-elegant-gold/90 hover:to-elegant-gold/70 text-true-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span>Visit Live Project</span>
                  <ExternalLink size={18} />
                </a>
                <button 
                  onClick={closeCaseStudy}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-3 bg-space-gray/50 hover:bg-space-gray/70 text-soft-light font-semibold px-8 py-4 rounded-xl transition-all duration-300 border border-space-gray/30 hover:border-space-gray/50"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioSection;
