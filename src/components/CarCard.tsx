import Link from 'next/link';
import Image from 'next/image';
import { Car } from '@/types/car';
import { Eye, Heart, ArrowRight } from 'lucide-react';

interface CarCardProps {
  car: Car;
  featured?: boolean;
}

export default function CarCard({ car, featured = false }: CarCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const primaryImage = car.images.find(img => img.angle === 'front') || car.images[0];

  return (
    <div className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
      featured ? 'lg:col-span-2 lg:row-span-2' : ''
    }`}>
      {/* Image Container */}
      <div className={`relative overflow-hidden ${featured ? 'h-80 lg:h-96' : 'h-64'}`}>
        <Image
          src={primaryImage.url}
          alt={primaryImage.alt}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            car.availability === 'available' 
              ? 'bg-green-100 text-green-800' 
              : car.availability === 'reserved'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-red-100 text-red-800'
          }`}>
            {car.availability === 'available' ? 'Available' : 
             car.availability === 'reserved' ? 'Reserved' : 'Sold'}
          </span>
        </div>

        {/* Featured Badge */}
        {car.featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-accent-600 text-white px-3 py-1 rounded-full text-xs font-medium">
              Featured
            </span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200">
            <Heart className="w-4 h-4 text-slate-700" />
          </button>
          <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200">
            <Eye className="w-4 h-4 text-slate-700" />
          </button>
        </div>

        {/* Quick View Button */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            href={`/cars/${car.id}`}
            className="flex items-center justify-center space-x-2 bg-white/95 backdrop-blur-sm text-slate-900 px-4 py-2 rounded-lg hover:bg-white transition-colors duration-200 font-medium"
          >
            <span>View Details</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className={`p-6 ${featured ? 'lg:p-8' : ''}`}>
        {/* Brand & Model */}
        <div className="mb-3">
          <h3 className={`font-serif font-bold text-slate-900 ${featured ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>
            {car.brand} {car.model}
          </h3>
          {car.variant && (
            <p className="text-slate-600 font-medium mt-1">{car.variant}</p>
          )}
        </div>

        {/* Key Specs */}
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div>
            <span className="text-slate-500">Year</span>
            <p className="font-semibold text-slate-900">{car.specifications.year}</p>
          </div>
          <div>
            <span className="text-slate-500">Engine</span>
            <p className="font-semibold text-slate-900">{car.specifications.engine}</p>
          </div>
          <div>
            <span className="text-slate-500">Power</span>
            <p className="font-semibold text-slate-900">{car.specifications.horsepower} HP</p>
          </div>
          <div>
            <span className="text-slate-500">0-60 mph</span>
            <p className="font-semibold text-slate-900">{car.specifications.acceleration}</p>
          </div>
        </div>

        {/* Highlights */}
        {featured && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {car.highlights.slice(0, 3).map((highlight, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-slate-50 text-slate-700 rounded-full text-sm font-medium"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <div>
            <p className={`font-bold text-slate-900 ${featured ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>
              {formatPrice(car.price)}
            </p>
            {car.originalPrice && car.originalPrice > car.price && (
              <p className="text-sm text-slate-500 line-through">
                {formatPrice(car.originalPrice)}
              </p>
            )}
          </div>
          <Link
            href={`/cars/${car.id}`}
            className="bg-slate-900 text-white px-6 py-2 rounded-lg hover:bg-slate-800 transition-colors duration-200 font-medium"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
