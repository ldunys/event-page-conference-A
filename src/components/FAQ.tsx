import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const faqs = [
  {
    question: "What's the exact venue address?",
    answer: (
      <>
        The Tech Center event venue is located at{' '}
        <a 
          href="https://www.google.com/maps/search/?api=1&query=Tech+Center+123+Innovation+Street+New+York"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          123 Innovation Street, New York City
        </a>
      </>
    )
  },
  {
    question: "Is there parking available at the venue?",
    answer: "Yes, complimentary parking is available for all attendees in the main parking structure."
  },
  {
    question: "Is the event available online?",
    answer: "No, the event is in-person."
  },
  {
    question: "Can we network and meet other participants?",
    answer: "Yes, we'll provide you with a web app where you can chat and meet with other attendees."
  },
  {
    question: "Will presentations be available after the event?",
    answer: "All registered attendees will receive access to the presentation slides and session recordings within 48 hours after the event."
  }
];

const venueImages = [
  {
    url: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80",
    caption: "Main Conference Hall"
  },
  {
    url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80",
    caption: "Innovation Theater"
  },
  {
    url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80",
    caption: "Networking Lounge"
  }
];

export function FAQ() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* FAQ Column */}
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{faq.question}</h3>
                <div className="text-gray-600">{faq.answer}</div>
              </div>
            ))}
          </div>

          {/* Venue Image Slider */}
          <div className="h-full">
            <div className="relative h-full min-h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Swiper
                modules={[Autoplay, EffectFade, Navigation]}
                effect="fade"
                navigation
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                loop
                className="h-full"
              >
                {venueImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative h-full">
                      <img
                        src={image.url}
                        alt={image.caption}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                        <div className="p-6 text-white">
                          <h3 className="text-2xl font-bold mb-2">{image.caption}</h3>
                          <p className="text-sm opacity-90">Tech Center, 123 Innovation Street, New York</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}