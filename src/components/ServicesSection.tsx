
import React, { useState, useEffect, useRef } from 'react';
import { Code, Palette, Zap, Globe, ArrowRight, CheckCircle } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const [activeService, setActiveService] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
  {
    id: 'saas-mvp',
    icon: Code,
    title: 'SaaS MVP Development',
    subtitle: 'Launch-ready web apps for startups',
    description:
      'From idea to launch — I build MVPs with auth, dashboard, database, and even AI-integrations. Ideal for founders ready to validate and grow fast.',
    features: [
      'Auth & database setup',
      'GPT & AI integrations',
      'Real-time functionality',
      'Scalable architecture'
    ],
    gradient: 'from-elegant-gold to-yellow-400'
  },
  {
    id: 'dashboards',
    icon: Palette,
    title: 'Dashboards & Admin Panels',
    subtitle: 'Custom internal tools & CRMs',
    description:
      'Build powerful dashboards, CRMs, and internal tools that fit your workflow — fast, secure, and fully tailored to your data.',
    features: [
      'Custom UI & charts',
      'API & backend integration',
      'Built for lead generation',
      'Real-time insights'
    ],
    gradient: 'from-royal-indigo to-purple-500'
  },
  {
    id: 'business-sites',
    icon: Globe,
    title: 'Business Websites',
    subtitle: 'Multi-page, SEO-optimized sites',
    description:
      'Modern websites for service businesses and agencies — built to load fast, rank well, and turn visitors into customers.',
    features: [
      'Clean UI & UX',
      'SEO optimization',
      'Mobile-first experience',
      'Built for lead generation'
    ],
    gradient: 'from-blue-400 to-indigo-500'
  },
  {
    id: 'landing-pages',
    icon: Code,
    title: 'High-Converting Landing Pages',
    subtitle: 'Campaigns, launches & lead-gen',
    description:
      'One-page sites designed to convert — for product launches, marketing campaigns, or growing your email list.',
    features: [
      'Conversion-focused design',
      'Form & CTA integrations',
      'Mobile-first experience',
      'Fast-loading performance'
    ],
    gradient: 'from-green-400 to-emerald-500'
  }
];

 const workProcess = [
  {
    step: 1,
    title: 'Discovery & Planning',
    description:
      'We clarify your goals, understand user needs, and map a focused strategy to build the right solution.',
    duration: 'Based on scope',
  },
  {
    step: 2,
    title: 'Design & Prototyping',
    description:
      'Crafting clean wireframes and polished UI mockups to align vision and function before development begins.',
    duration: 'Varies by project',
  },
  {
    step: 3,
    title: 'Development & Implementation',
    description:
      'Building your application using clean, scalable code — optimized for speed, usability, and real-world impact.',
    duration: 'Depends on features',
  },
  {
    step: 4,
    title: 'Testing & Optimization',
    description:
      'Thorough testing and fine-tuning to ensure your product is fast, functional, and ready for any screen.',
    duration: 'Project-dependent',
  },
  {
    step: 5,
    title: 'Launch',
    description:
      'Final deployment, polish, and delivery — setting your product up for a strong and confident launch.',
    duration: 'Final stage',
  },
];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(entry.target.getAttribute('data-step') || '0');
            setVisibleSteps((prev) => [...new Set([...prev, stepIndex])]);
          }
        });
      },
      { threshold: 0.5 }
    );

    const stepElements = document.querySelectorAll('[data-step]');
    stepElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-32 section-padding relative" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-space-gray/30 via-transparent to-true-black" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Services Section */}
        <div className="mb-32">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-elegant-gold/10 px-6 py-3 rounded-full mb-8 backdrop-blur-sm">
              <Zap size={18} className="text-elegant-gold" />
              <span className="text-sm font-medium text-elegant-gold">Services & Expertise</span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-sf-pro font-bold text-soft-light mb-6 leading-tight">
              What I
              <span className="block text-gradient">Deliver</span>
            </h2>
            
            <p className="text-xl text-muted-silver max-w-3xl mx-auto leading-relaxed">
              Practical solutions tailored to bring your digital vision to life with precision and innovation
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeService === index;
              
              return (
                <div
                  key={service.id}
                  className={`premium-card cursor-pointer transition-all duration-500 ${
                    isActive ? 'ring-2 ring-elegant-gold/30 transform scale-[1.02]' : ''
                  }`}
                  onMouseEnter={() => setActiveService(index)}
                >
                  {/* Service Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-sf-pro font-bold text-soft-light mb-2">
                        {service.title}
                      </h3>
                      <p className="text-elegant-gold font-medium text-sm">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-silver text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm text-muted-silver"
                      >
                        <div className="w-1.5 h-1.5 bg-elegant-gold rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Work Process Section */}
        <div>
          {/* Header */}
          <div id='work-process' className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-royal-indigo/10 px-6 py-3 rounded-full mb-8 backdrop-blur-sm">
              <CheckCircle size={18} className="text-royal-indigo" />
              <span className="text-sm font-medium text-royal-indigo">Work Process</span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-sf-pro font-bold text-soft-light mb-6 leading-tight">
              How We
              <span className="block text-gradient">Work Together</span>
            </h2>
            
            <p className="text-xl text-muted-silver max-w-3xl mx-auto leading-relaxed">
              A structured approach that ensures quality, transparency, and exceptional results at every stage
            </p>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-elegant-gold via-royal-indigo to-elegant-gold opacity-30" />
            
            <div className="space-y-12">
              {workProcess.map((process, index) => (
                <div
                  key={process.step}
                  data-step={index}
                  className={`flex items-start gap-8 transition-all duration-700 ${
                    visibleSteps.includes(index)
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Step Number */}
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-elegant-gold to-royal-indigo rounded-2xl flex items-center justify-center font-sf-pro font-bold text-true-black text-lg">
                    {process.step}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 premium-card max-w-2xl">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-sf-pro font-bold text-soft-light">
                        {process.title}
                      </h3>
                      {/* <span className="text-elegant-gold font-medium text-sm bg-elegant-gold/10 px-3 py-1 rounded-full">
                        {process.duration}
                      </span> */}
                    </div>
                    
                    <p className="text-muted-silver text-lg leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
