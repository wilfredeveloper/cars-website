'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const heroSlides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=1920&h=1080&fit=crop',
    title: 'Bentley Continental GT',
    subtitle: 'Handcrafted Excellence',
    description: 'Experience the pinnacle of British luxury with uncompromising performance and timeless elegance.',
    price: '$248,000',
    cta: 'Explore Collection'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1920&h=1080&fit=crop',
    title: 'Mercedes-Benz S-Class',
    subtitle: 'The Future of Luxury',
    description: 'Discover cutting-edge technology and supreme comfort in the world\'s most advanced luxury sedan.',
    price: '$115,000',
    cta: 'Schedule Test Drive'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=1920&h=1080&fit=crop',
    title: 'Audi A8',
    subtitle: 'Progressive Luxury',
    description: 'Where innovative design meets intelligent technology for the ultimate driving experience.',
    price: '$98,000',
    cta: 'Learn More'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl mx-auto text-center">
            {heroSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`transition-all duration-1000 ${
                  index === currentSlide
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8 pointer-events-none'
                }`}
              >
                <div className="space-y-8">
                  <div className="space-y-4">
                    <p className="text-blue-400 font-medium text-lg tracking-wide uppercase">
                      {slide.subtitle}
                    </p>
                    <h1 className="font-serif font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-tight">
                      {slide.title}
                    </h1>
                  </div>

                  <p className="text-gray-200 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
                    {slide.description}
                  </p>

                  <div className="flex items-center justify-center space-x-8">
                    <div className="text-white text-center">
                      <span className="text-sm text-gray-300 block">Starting at</span>
                      <p className="text-3xl md:text-4xl font-bold">{slide.price}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
                    <Link
                      href="/cars"
                      className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold text-lg inline-flex items-center justify-center"
                    >
                      {slide.cta}
                    </Link>
                    <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-200 font-semibold text-lg inline-flex items-center justify-center space-x-2">
                      <Play className="w-5 h-5" />
                      <span>Watch Video</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-blue-500 w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Arrow Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-200"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-200"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="flex flex-col items-center space-y-2 text-white">
          <span className="text-sm font-medium">Scroll</span>
          <div className="w-px h-12 bg-white/50">
            <div className="w-px h-3 bg-blue-500 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
