import { Car } from '@/types/car';

export const cars: Car[] = [
  {
    id: 'bentley-continental-gt-2024',
    brand: 'Bentley',
    model: 'Continental GT',
    variant: 'V8',
    price: 248000,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=1200&h=800&fit=crop',
        alt: 'Bentley Continental GT Front View',
        angle: 'front'
      },
      {
        url: 'https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=1200&h=800&fit=crop',
        alt: 'Bentley Continental GT Side View',
        angle: 'side'
      },
      {
        url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop',
        alt: 'Bentley Continental GT Interior',
        angle: 'interior'
      }
    ],
    specifications: {
      engine: '4.0L Twin-Turbo V8',
      horsepower: 542,
      torque: '568 lb-ft',
      acceleration: '3.9 seconds',
      topSpeed: '198 mph',
      transmission: '8-Speed Dual-Clutch',
      drivetrain: 'All-Wheel Drive',
      fuelEconomy: '15/24 mpg',
      seating: 4,
      bodyStyle: 'Grand Tourer',
      year: 2024
    },
    features: {
      exterior: ['LED Matrix Headlights', 'Carbon Fiber Splitter', '21" Alloy Wheels', 'Adaptive Suspension'],
      interior: ['Handcrafted Leather', 'Diamond Quilted Seats', 'Rotating Display', 'Naim Audio System'],
      technology: ['12.3" Touchscreen', 'Apple CarPlay', 'Head-Up Display', 'Wireless Charging'],
      safety: ['Adaptive Cruise Control', 'Lane Keep Assist', 'Blind Spot Monitoring', 'Emergency Braking']
    },
    description: 'The Bentley Continental GT represents the pinnacle of luxury grand touring. With its handcrafted interior, powerful V8 engine, and timeless design, it offers an unparalleled driving experience that combines performance with ultimate refinement.',
    highlights: ['Handcrafted British Luxury', 'Twin-Turbo V8 Performance', 'All-Weather Capability', 'Bespoke Customization'],
    availability: 'available',
    featured: true,
    category: 'coupe'
  },
  {
    id: 'mercedes-s-class-2024',
    brand: 'Mercedes-Benz',
    model: 'S-Class',
    variant: 'S 580',
    price: 115000,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&h=800&fit=crop',
        alt: 'Mercedes S-Class Front View',
        angle: 'front'
      },
      {
        url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&h=800&fit=crop',
        alt: 'Mercedes S-Class Side View',
        angle: 'side'
      },
      {
        url: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?w=1200&h=800&fit=crop',
        alt: 'Mercedes S-Class Interior',
        angle: 'interior'
      }
    ],
    specifications: {
      engine: '4.0L Twin-Turbo V8',
      horsepower: 496,
      torque: '516 lb-ft',
      acceleration: '4.4 seconds',
      topSpeed: '155 mph',
      transmission: '9-Speed Automatic',
      drivetrain: 'Rear-Wheel Drive',
      fuelEconomy: '16/24 mpg',
      seating: 5,
      bodyStyle: 'Luxury Sedan',
      year: 2024
    },
    features: {
      exterior: ['Digital Light Technology', 'Panoramic Sunroof', '20" AMG Wheels', 'Active Body Control'],
      interior: ['Nappa Leather', 'Massage Seats', 'Ambient Lighting', 'Burmester 4D Sound'],
      technology: ['12.8" OLED Display', 'MBUX Interior Assistant', 'Augmented Reality Navigation', '5G Connectivity'],
      safety: ['PRE-SAFE System', 'Active Distance Assist', 'Evasive Steering Assist', 'Car-to-X Communication']
    },
    description: 'The Mercedes-Benz S-Class sets the standard for luxury sedans worldwide. Featuring cutting-edge technology, supreme comfort, and refined performance, it represents the future of automotive luxury.',
    highlights: ['Flagship Luxury Sedan', 'Advanced MBUX Technology', 'First-Class Comfort', 'Intelligent Drive Systems'],
    availability: 'available',
    featured: true,
    category: 'sedan'
  },
  {
    id: 'audi-a8-2024',
    brand: 'Audi',
    model: 'A8',
    variant: 'L 60 TFSI',
    price: 98000,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&h=800&fit=crop',
        alt: 'Audi A8 Front View',
        angle: 'front'
      },
      {
        url: 'https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=1200&h=800&fit=crop',
        alt: 'Audi A8 Side View',
        angle: 'side'
      },
      {
        url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop',
        alt: 'Audi A8 Interior',
        angle: 'interior'
      }
    ],
    specifications: {
      engine: '3.0L TFSI V6',
      horsepower: 335,
      torque: '369 lb-ft',
      acceleration: '5.6 seconds',
      topSpeed: '155 mph',
      transmission: '8-Speed Tiptronic',
      drivetrain: 'All-Wheel Drive',
      fuelEconomy: '18/28 mpg',
      seating: 5,
      bodyStyle: 'Executive Sedan',
      year: 2024
    },
    features: {
      exterior: ['Matrix LED Headlights', 'Aluminum Space Frame', '20" Wheels', 'Adaptive Air Suspension'],
      interior: ['Valcona Leather', 'Ventilated Seats', 'Four-Zone Climate', 'Bang & Olufsen Audio'],
      technology: ['MMI Touch Response', 'Virtual Cockpit Plus', 'Audi Connect', 'Wireless Phone Box'],
      safety: ['Audi Pre Sense', 'Traffic Jam Assist', 'Park Assist Plus', 'Night Vision Assistant']
    },
    description: 'The Audi A8 combines progressive design with innovative technology. This flagship sedan offers a perfect balance of performance, luxury, and efficiency, making it the ideal choice for discerning drivers.',
    highlights: ['Lightweight Construction', 'Quattro All-Wheel Drive', 'Level 3 Autonomous Driving', 'Predictive Suspension'],
    availability: 'available',
    featured: false,
    category: 'sedan'
  },
  {
    id: 'bentley-bentayga-2024',
    brand: 'Bentley',
    model: 'Bentayga',
    variant: 'V8',
    price: 235000,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=1200&h=800&fit=crop',
        alt: 'Bentley Bentayga Front View',
        angle: 'front'
      },
      {
        url: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=1200&h=800&fit=crop',
        alt: 'Bentley Bentayga Side View',
        angle: 'side'
      },
      {
        url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop',
        alt: 'Bentley Bentayga Interior',
        angle: 'interior'
      }
    ],
    specifications: {
      engine: '4.0L Twin-Turbo V8',
      horsepower: 542,
      torque: '568 lb-ft',
      acceleration: '4.4 seconds',
      topSpeed: '180 mph',
      transmission: '8-Speed Automatic',
      drivetrain: 'All-Wheel Drive',
      fuelEconomy: '14/21 mpg',
      seating: 5,
      bodyStyle: 'Luxury SUV',
      year: 2024
    },
    features: {
      exterior: ['LED Matrix Headlights', 'Panoramic Sunroof', '22" Alloy Wheels', 'Bentley Dynamic Ride'],
      interior: ['Diamond Quilted Leather', 'Heated/Cooled Seats', 'Rear Entertainment', 'Naim Audio'],
      technology: ['10.9" Touchscreen', 'My Bentley App', 'Head-Up Display', 'Wireless Charging'],
      safety: ['Adaptive Cruise Control', 'Traffic Jam Assist', 'Top View Camera', 'Night Vision']
    },
    description: 'The Bentley Bentayga redefines luxury SUV standards. Combining the refinement of a Bentley with the versatility of an SUV, it delivers uncompromising luxury for any journey.',
    highlights: ['Fastest Luxury SUV', 'Handcrafted Interior', 'Off-Road Capability', 'Bespoke Options'],
    availability: 'available',
    featured: true,
    category: 'suv'
  },
  {
    id: 'mercedes-amg-gt-2024',
    brand: 'Mercedes-AMG',
    model: 'GT 63 S',
    variant: '4MATIC+',
    price: 165000,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&h=800&fit=crop',
        alt: 'Mercedes-AMG GT Front View',
        angle: 'front'
      },
      {
        url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&h=800&fit=crop',
        alt: 'Mercedes-AMG GT Side View',
        angle: 'side'
      },
      {
        url: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?w=1200&h=800&fit=crop',
        alt: 'Mercedes-AMG GT Interior',
        angle: 'interior'
      }
    ],
    specifications: {
      engine: '4.0L Twin-Turbo V8',
      horsepower: 630,
      torque: '664 lb-ft',
      acceleration: '3.1 seconds',
      topSpeed: '196 mph',
      transmission: '9-Speed AMG SPEEDSHIFT',
      drivetrain: 'All-Wheel Drive',
      fuelEconomy: '15/21 mpg',
      seating: 4,
      bodyStyle: 'Grand Tourer',
      year: 2024
    },
    features: {
      exterior: ['AMG Panamericana Grille', 'Active Aerodynamics', '21" AMG Wheels', 'Carbon Fiber Package'],
      interior: ['AMG Performance Seats', 'Carbon Fiber Trim', 'AMG Track Pace', 'Burmester 3D Sound'],
      technology: ['MBUX Infotainment', 'AMG Track Pace', 'Augmented Reality Navigation', 'Wireless Charging'],
      safety: ['AMG Dynamic Select', 'Active Brake Assist', 'Blind Spot Assist', 'PRE-SAFE System']
    },
    description: 'The Mercedes-AMG GT 63 S 4MATIC+ represents the perfect fusion of luxury and performance. With its handcrafted AMG engine and cutting-edge technology, it delivers an unparalleled driving experience.',
    highlights: ['Handcrafted AMG Engine', 'Race-Inspired Design', 'Advanced Aerodynamics', 'Track-Ready Performance'],
    availability: 'available',
    featured: false,
    category: 'coupe'
  }
];
