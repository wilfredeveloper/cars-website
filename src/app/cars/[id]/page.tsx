import { notFound } from 'next/navigation';
import { cars } from '@/data/cars';
import CarGallery from '@/components/CarGallery';
import ContactForm from '@/components/ContactForm';
import CarCard from '@/components/CarCard';
import { 
  Engine, 
  Gauge, 
  Zap, 
  Settings, 
  Users, 
  Calendar,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

interface CarDetailPageProps {
  params: {
    id: string;
  };
}

export default function CarDetailPage({ params }: CarDetailPageProps) {
  const car = cars.find(c => c.id === params.id);

  if (!car) {
    notFound();
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const relatedCars = cars
    .filter(c => c.id !== car.id && (c.brand === car.brand || c.category === car.category))
    .slice(0, 3);

  const specIcons = {
    engine: Engine,
    horsepower: Zap,
    acceleration: Gauge,
    transmission: Settings,
    seating: Users,
    year: Calendar,
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative">
        <CarGallery images={car.images} />
        
        {/* Floating Info Card */}
        <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 max-w-sm shadow-2xl">
          <div className="space-y-4">
            <div>
              <h1 className="font-serif font-bold text-2xl text-slate-900">
                {car.brand} {car.model}
              </h1>
              {car.variant && (
                <p className="text-slate-600 font-medium">{car.variant}</p>
              )}
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-slate-900">{formatPrice(car.price)}</p>
                {car.originalPrice && car.originalPrice > car.price && (
                  <p className="text-sm text-slate-500 line-through">
                    {formatPrice(car.originalPrice)}
                  </p>
                )}
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
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

            <div className="flex space-x-3">
              <button className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
                Schedule Test Drive
              </button>
              <button className="flex-1 border-2 border-slate-900 text-slate-900 px-4 py-3 rounded-lg hover:bg-slate-900 hover:text-white transition-all duration-200 font-semibold">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Details */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <section>
              <h2 className="font-serif font-medium text-3xl text-slate-900 mb-6">Overview</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                {car.description}
              </p>
              
              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4">
                {car.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="font-medium text-slate-900">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Specifications */}
            <section>
              <h2 className="font-serif font-medium text-3xl text-slate-900 mb-6">Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(car.specifications).map(([key, value]) => {
                  const IconComponent = specIcons[key as keyof typeof specIcons];
                  return (
                    <div key={key} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                      {IconComponent && (
                        <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5" />
                        </div>
                      )}
                      <div>
                        <p className="text-sm text-slate-500 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </p>
                        <p className="font-semibold text-slate-900">
                          {typeof value === 'number' ? value.toLocaleString() : value}
                          {key === 'horsepower' && ' HP'}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Features */}
            <section>
              <h2 className="font-serif font-medium text-3xl text-slate-900 mb-6">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(car.features).map(([category, features]) => (
                  <div key={category}>
                    <h3 className="font-semibold text-lg text-slate-900 mb-4 capitalize">
                      {category}
                    </h3>
                    <ul className="space-y-2">
                      {features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Contact */}
          <div className="space-y-8">
            {/* Contact Card */}
            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="font-semibold text-xl text-slate-900 mb-6">Get in Touch</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-700">(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-700">info@luxeauto.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-700">123 Luxury Lane, Beverly Hills</span>
                </div>
              </div>

              <ContactForm carId={car.id} />
            </div>

            {/* Financing Info */}
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="font-semibold text-xl text-slate-900 mb-4">Financing Available</h3>
              <p className="text-slate-700 mb-4">
                Competitive rates starting from 2.9% APR with approved credit.
              </p>
              <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
                Get Pre-Approved
              </button>
            </div>
          </div>
        </div>

        {/* Related Cars */}
        {relatedCars.length > 0 && (
          <section className="mt-20">
            <h2 className="font-serif font-medium text-3xl text-slate-900 mb-8 text-center">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedCars.map((relatedCar) => (
                <CarCard key={relatedCar.id} car={relatedCar} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return cars.map((car) => ({
    id: car.id,
  }));
}
