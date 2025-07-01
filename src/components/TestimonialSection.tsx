
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CEO",
      company: "TechFlow Solutions",
      content: "Tameem delivered exceptional results that exceeded our expectations. The attention to detail and innovative approach transformed our digital presence completely.",
      avatar: "SC",
      rating: 5
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Product Manager",
      company: "InnovateLabs",
      content: "Working with Tameem was a game-changer. The seamless integration of design and functionality created an outstanding user experience for our platform.",
      avatar: "MR",
      rating: 5
    },
    {
      id: 3,
      name: "Elena Vasquez",
      role: "Founder",
      company: "Creative Studios",
      content: "The level of craftsmanship and technical expertise demonstrated was remarkable. Our project was delivered on time with incredible attention to user experience.",
      avatar: "EV",
      rating: 5
    },
    {
      id: 4,
      name: "David Kim",
      // role: "CEO",
      company: "Solo Entrepreneur",
      content: "Tameem's ability to translate complex requirements into elegant solutions is unmatched. The final product was both beautiful and highly performant.",
      avatar: "DK",
      rating: 5
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="py-32 section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-elegant-gold/5 via-transparent to-royal-indigo/5" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-space-gray/30 px-6 py-3 rounded-full mb-8 backdrop-blur-sm">
            <Quote size={18} className="text-elegant-gold" />
            <span className="text-sm font-medium text-muted-silver">Client Testimonials</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-sf-pro font-bold text-soft-light mb-6 leading-tight">
            What Clients
            <span className="block text-gradient">Are Saying</span>
          </h2>
          
          <p className="text-xl text-muted-silver max-w-2xl mx-auto leading-relaxed">
            Real feedback from amazing clients who trusted me with their vision
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          {/* Main Testimonial Card */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="max-w-4xl mx-auto">
                    <div className="premium-card relative group">
                      {/* Quote Icon */}
                      <div className="absolute -top-4 -left-4 w-16 h-16 bg-elegant-gold rounded-2xl flex items-center justify-center rotate-12 group-hover:rotate-6 transition-transform duration-500">
                        <Quote size={24} className="text-true-black" />
                      </div>
                      
                      {/* Content */}
                      <div className="pt-8">
                        <blockquote className="text-2xl lg:text-3xl font-sf-pro text-soft-light leading-relaxed mb-8 font-medium">
                          "{testimonial.content}"
                        </blockquote>
                        
                        {/* Client Info */}
                        <div className="flex items-center gap-6">
                          {/* Avatar */}
                          <div className="w-16 h-16 bg-gradient-to-br from-elegant-gold to-royal-indigo rounded-2xl flex items-center justify-center font-sf-pro font-bold text-true-black text-lg">
                            {testimonial.avatar}
                          </div>
                          
                          {/* Details */}
                          <div className="flex-1">
                            <h4 className="text-xl font-sf-pro font-semibold text-soft-light mb-1">
                              {testimonial.name}
                            </h4>
                            <p className="text-muted-silver font-medium">
                              {testimonial.role} • {testimonial.company}
                            </p>
                          </div>
                          
                          {/* Rating */}
                          <div className="flex gap-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <div
                                key={i}
                                className="w-3 h-3 bg-elegant-gold rounded-full"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-8 mt-12">
            {/* Previous Button */}
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-space-gray/50 hover:bg-space-gray backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={20} className="text-soft-light" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-elegant-gold scale-125'
                      : 'bg-space-gray hover:bg-muted-silver/50'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-space-gray/50 hover:bg-space-gray backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={20} className="text-soft-light" />
            </button>
          </div>
        </div>

        {/* Auto-play Indicator */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-elegant-gold animate-pulse' : 'bg-space-gray'}`} />
          <span className="text-xs text-muted-silver">
            {isAutoPlaying ? 'Auto-playing' : 'Manual control'}
          </span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
