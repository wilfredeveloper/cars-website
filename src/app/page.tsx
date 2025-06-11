import Link from 'next/link';
import { cars } from '@/data/cars';
import Hero from '@/components/Hero';
import CarCard from '@/components/CarCard';
import { Star, Shield, Award, Users } from 'lucide-react';

export default function Home() {
  const featuredCars = cars.filter(car => car.featured);
  const stats = [
    { icon: Star, label: 'Years of Excellence', value: '25+' },
    { icon: Shield, label: 'Vehicles Sold', value: '2,500+' },
    { icon: Award, label: 'Awards Won', value: '50+' },
    { icon: Users, label: 'Happy Clients', value: '1,200+' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                  <p className="text-slate-600 font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-slate-900 mb-6">
              Featured Collection
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Discover our handpicked selection of the world's most prestigious automobiles,
              each representing the pinnacle of luxury, performance, and craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} featured={car.id === 'bentley-continental-gt-2024'} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/cars"
              className="inline-flex items-center bg-slate-900 text-white px-8 py-4 rounded-lg hover:bg-slate-800 transition-colors duration-200 font-semibold text-lg"
            >
              View All Vehicles
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="font-serif font-bold text-4xl md:text-5xl">
                  Curating Excellence Since 1999
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  At Luxe Automotive, we don't just sell cars—we curate experiences.
                  For over two decades, we've been the trusted destination for discerning
                  collectors and enthusiasts seeking the world's finest automobiles.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Uncompromising Quality</h3>
                    <p className="text-gray-300">Every vehicle undergoes rigorous inspection and certification.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">White Glove Service</h3>
                    <p className="text-gray-300">Personalized attention from initial inquiry to final delivery.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Global Network</h3>
                    <p className="text-gray-300">Access to exclusive vehicles from around the world.</p>
                  </div>
                </div>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-400 hover:text-slate-900 transition-all duration-200 font-semibold"
              >
                Learn More About Us
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop"
                  alt="Luxury car showroom"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <p className="text-2xl font-bold">25+</p>
                  <p className="text-sm">Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
