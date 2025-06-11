import ContactForm from '@/components/ContactForm';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar,
  Car,
  Shield,
  Award
} from 'lucide-react';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['(555) 123-4567', '(555) 123-4568'],
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@luxeauto.com', 'sales@luxeauto.com'],
      description: 'Send us a message anytime'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Luxury Lane', 'Beverly Hills, CA 90210'],
      description: 'Visit our premium showroom'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Fri: 9:00 AM - 7:00 PM', 'Sat-Sun: 10:00 AM - 6:00 PM'],
      description: 'We\'re here when you need us'
    }
  ];

  const services = [
    {
      icon: Car,
      title: 'Test Drives',
      description: 'Experience luxury firsthand with our complimentary test drives'
    },
    {
      icon: Shield,
      title: 'Vehicle Inspection',
      description: 'Comprehensive 150-point inspection on every vehicle'
    },
    {
      icon: Award,
      title: 'Concierge Service',
      description: 'White-glove delivery and personalized assistance'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="luxury-heading text-4xl md:text-5xl lg:text-6xl mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to experience luxury automotive excellence? Our team of experts is here to assist you 
            in finding your perfect vehicle and answer any questions you may have.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 text-accent-600 rounded-full mb-4">
                  <info.icon className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-lg text-primary-900 mb-2">{info.title}</h3>
                <div className="space-y-1 mb-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-primary-700">{detail}</p>
                  ))}
                </div>
                <p className="text-sm text-primary-500">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="luxury-subheading text-3xl text-primary-900 mb-6">
                  Send us a Message
                </h2>
                <p className="text-primary-600 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              {/* Services */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="luxury-subheading text-2xl text-primary-900 mb-6">
                  Our Services
                </h3>
                <div className="space-y-6">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent-100 text-accent-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-primary-900 mb-1">
                          {service.title}
                        </h4>
                        <p className="text-primary-600">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Schedule Appointment */}
              <div className="bg-accent-50 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="w-8 h-8 text-accent-600" />
                  <h3 className="luxury-subheading text-2xl text-primary-900">
                    Schedule an Appointment
                  </h3>
                </div>
                <p className="text-primary-700 mb-6">
                  Book a private consultation with one of our luxury automotive specialists. 
                  We'll provide personalized recommendations based on your preferences and needs.
                </p>
                <button className="w-full bg-accent-600 text-white px-6 py-3 rounded-lg hover:bg-accent-700 transition-colors duration-200 font-semibold">
                  Book Consultation
                </button>
              </div>

              {/* Location */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="luxury-subheading text-2xl text-primary-900 mb-6">
                  Visit Our Showroom
                </h3>
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <p className="text-gray-500">Interactive Map Coming Soon</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-accent-600" />
                    <span className="text-primary-700">123 Luxury Lane, Beverly Hills, CA 90210</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Car className="w-5 h-5 text-accent-600" />
                    <span className="text-primary-700">Valet parking available</span>
                  </div>
                </div>
                <button className="mt-4 w-full border-2 border-accent-600 text-accent-600 px-6 py-3 rounded-lg hover:bg-accent-600 hover:text-white transition-all duration-200 font-semibold">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="luxury-subheading text-3xl text-primary-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: "Do you offer financing options?",
                answer: "Yes, we work with multiple premium lenders to offer competitive financing rates starting from 2.9% APR for qualified buyers."
              },
              {
                question: "Can I trade in my current vehicle?",
                answer: "Absolutely. We accept trade-ins and provide fair market valuations. Our team can assess your vehicle and provide an instant quote."
              },
              {
                question: "Do you provide vehicle history reports?",
                answer: "Every vehicle comes with a comprehensive history report and our 150-point inspection certificate for complete transparency."
              },
              {
                question: "What warranty do you offer?",
                answer: "All vehicles come with manufacturer warranty (if applicable) plus our exclusive Luxe Automotive protection plan for added peace of mind."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg text-primary-900 mb-3">{faq.question}</h3>
                <p className="text-primary-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
