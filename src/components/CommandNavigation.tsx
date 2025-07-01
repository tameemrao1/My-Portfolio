
// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';

// interface CommandNavigationProps {
//   onNavigate: (section: string) => void;
// }

// const CommandNavigation: React.FC<CommandNavigationProps> = ({ onNavigate }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   const navigationItems = [
//     { id: 'about', label: 'About' },
//     { id: 'services', label: 'Services' },
//     { id: 'projects', label: 'Work' },
//     { id: 'contact', label: 'Contact' },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const progress = (window.scrollY / totalHeight) * 100;
//       setScrollProgress(Math.min(progress, 100));
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleNavClick = (sectionId: string) => {
//     onNavigate(sectionId);
//     setIsOpen(false);
//   };

//   return (
//     <>
//       {/* Menu Trigger with Progress Circle */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="fixed top-20 right-8 z-50 relative group"
//       >
//         <div className="relative w-12 h-12 flex items-center justify-center">
//           {/* Progress Circle */}
//           <svg className="absolute inset-0 w-12 h-12 transform -rotate-90">
//             <circle
//               cx="24"
//               cy="24"
//               r="20"
//               stroke="rgba(229, 192, 123, 0.2)"
//               strokeWidth="2"
//               fill="none"
//             />
//             <circle
//               cx="24"
//               cy="24"
//               r="20"
//               stroke="#E5C07B"
//               strokeWidth="2"
//               fill="none"
//               strokeDasharray={`${2 * Math.PI * 20}`}
//               strokeDashoffset={`${2 * Math.PI * 20 * (1 - scrollProgress / 100)}`}
//               className="transition-all duration-300 ease-out"
//             />
//           </svg>
          
//           {/* Menu Icon with smooth transition */}
//           <div className="bg-space-gray/80 backdrop-blur-sm rounded-full p-2 group-hover:bg-space-gray transition-all duration-300 transform group-hover:scale-110">
//             <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
//               {isOpen ? <X size={20} className="text-soft-light" /> : <Menu size={20} className="text-soft-light" />}
//             </div>
//           </div>
//         </div>
//       </button>

//       {/* Mobile Menu Overlay */}
//       <div 
//         className={`fixed inset-0 bg-true-black/60 backdrop-blur-sm z-40 transition-all duration-500 ease-out ${
//           isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
//         }`}
//         onClick={() => setIsOpen(false)}
//       />

//       {/* Mobile Menu Sidebar */}
//       <div 
//         className={`fixed top-0 right-0 h-full w-80 bg-space-gray/95 backdrop-blur-xl border-l border-space-gray/30 z-50 transform transition-all duration-500 ease-out ${
//           isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
//         }`}
//       >
//         <div className="p-6 pt-20">
//           <nav className="space-y-6">
//             {navigationItems.map((item, index) => (
//               <button
//                 key={item.id}
//                 onClick={() => handleNavClick(item.id)}
//                 className={`block w-full text-left text-soft-light hover:text-elegant-gold transition-all duration-300 text-lg font-medium transform hover:translate-x-2 hover:scale-105 ${
//                   isOpen ? 'animate-slide-in-stagger' : ''
//                 }`}
//                 style={{ 
//                   animationDelay: isOpen ? `${index * 100}ms` : '0ms',
//                   animation: isOpen ? `slideInRight 0.6s ease-out forwards` : 'none'
//                 }}
//               >
//                 {item.label}
//               </button>
//             ))}
//             <button 
//               onClick={() => handleNavClick('contact')}
//               className={`w-full bg-elegant-gold hover:bg-elegant-gold/90 text-true-black font-medium px-6 py-3 rounded-full text-sm transition-all duration-300 mt-8 transform hover:scale-105 ${
//                 isOpen ? 'animate-slide-in-stagger' : ''
//               }`}
//               style={{ 
//                 animationDelay: isOpen ? `${navigationItems.length * 100}ms` : '0ms',
//                 animation: isOpen ? `slideInRight 0.6s ease-out forwards` : 'none'
//               }}
//             >
//               Let's Talk
//             </button>
//           </nav>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CommandNavigation;
