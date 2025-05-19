"use client"

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { homeSliderContent } from '@/lib/data'

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const slideCount = homeSliderContent.length
  
  const goToNextSlide = useCallback(() => {
    if (isTransitioning) return
    
    setIsTransitioning(true)
    setCurrentSlide(prev => (prev === slideCount - 1 ? 0 : prev + 1))
    
    // Reset transition state
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning, slideCount])
  
  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide()
    }, 6000)
    
    return () => clearInterval(interval)
  }, [goToNextSlide])
  
  const goToPrevSlide = useCallback(() => {
    if (isTransitioning) return
    
    setIsTransitioning(true)
    setCurrentSlide(prev => (prev === 0 ? slideCount - 1 : prev - 1))
    
    // Reset transition state
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning, slideCount])
  
  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === currentSlide) return
    
    setIsTransitioning(true)
    setCurrentSlide(index)
    
    // Reset transition state
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning, currentSlide])
  
  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Slides */}
      {homeSliderContent.map((slide, index) => (
        <div 
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-700",
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
          
          <div className="relative z-10 h-full container-custom flex flex-col justify-center">
            <div className="max-w-xl">
              <p 
                className={cn(
                  "text-primary mb-2 md:mb-3 tracking-widest uppercase text-sm font-medium transform transition-all duration-700 delay-100",
                  index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                )}
              >
                {slide.subtitle}
              </p>
              <h1 
                className={cn(
                  "text-3xl md:text-5xl lg:text-6xl font-playfair mb-4 transform transition-all duration-700 delay-200",
                  index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                )}
              >
                {slide.title}
              </h1>
              <p 
                className={cn(
                  "text-base md:text-lg text-gray-200 mb-6 max-w-md transform transition-all duration-700 delay-300",
                  index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                )}
              >
                {slide.description}
              </p>
              <div 
                className={cn(
                  "transform transition-all duration-700 delay-400",
                  index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                )}
              >
                <Button asChild size="lg">
                  <Link href={slide.ctaLink}>
                    {slide.ctaText}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation Arrows */}
      <button 
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button 
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {homeSliderContent.map((_, index) => (
          <button
            key={`indicator-${index}`}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all",
              index === currentSlide 
                ? "bg-primary w-8" 
                : "bg-white/50 hover:bg-white/70"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}