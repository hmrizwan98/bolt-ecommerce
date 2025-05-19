import Link from 'next/link'
import Image from 'next/image'
import { homeCategories } from '@/lib/data'
import { cn } from '@/lib/utils'

export default function CategoryPreview() {
  return (
    <section className="py-16 bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair mb-3">Shop by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collections of premium beauty products designed to enhance your natural beauty
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {homeCategories.map((category, index) => (
            <Link 
              key={category.id}
              href={category.link}
              className={cn(
                "group relative h-80 rounded-lg overflow-hidden",
                "animate-fade-in opacity-0", 
                { "animation-delay-100": index === 0 },
                { "animation-delay-200": index === 1 },
                { "animation-delay-300": index === 2 },
                { "animation-delay-400": index === 3 }
              )}
              style={{ 
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards' 
              }}
            >
              <Image 
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
              <div className="absolute inset-0 flex items-end p-6">
                <div>
                  <h3 className="text-white text-2xl font-playfair mb-2">{category.name}</h3>
                  <span className="inline-block text-primary text-sm font-medium transition-transform duration-300 group-hover:translate-x-2">
                    Explore Collection →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}