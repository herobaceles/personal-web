import profile from '../assets/profile.png';
import { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import slide1 from '../assets/1.png';
import slide2 from '../assets/2.png';
import slide3 from '../assets/3.png';

const images = [slide1, slide2, slide3];

export function CurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n) => n.toString().padStart(2, '0');
  return (
    <p className="text-sm font-mono">
      {pad(time.getHours())}:{pad(time.getMinutes())}:{pad(time.getSeconds())}
    </p>
  );
}

export default function NavBar() {
  return (
    <header className="bg-white flex justify-center my-2 px-4 py-2">
      <nav className="flex justify-between items-center w-200 container gap-4">

        {/* Left - Profile Info */}
        <div className="flex items-center">
          <img
            src={profile}
            alt="Profile"
            className="w-20 h-20 rounded-lg border border-[#eaeaea] shadow me-3"
          />
          <div>
            <h1 className="text-xl font-bold text-gray-800">Hero B</h1>
            <p className="text-xs text-gray-600">Frontend Developer / Student</p>
            <a
              href="mailto:hero.baceles.cln@gmail.com?subject=Hello%20Hero&body=Hi%20there,%20I%20wanted%20to%20reach%20out..."
              className="mt-1 inline-block px-3 py-1 text-xs bg-black text-white rounded hover:bg-gray-800 transition"
            >
              Send Email
            </a>
          </div>
        </div>

        {/* Right - Swiper Slider (smaller) */}
        <div className="w-28 h-20 hidden sm:block">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            className="rounded-md border border-[#eaeaea] shadow w-full h-full"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center">
                <img
                  src={img}
                  alt={`slide-${index}`}
                  className="w-full h-full object-cover rounded-md"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </nav>
    </header>
  );
}
