'use client';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://i.pinimg.com/originals/c0/35/7c/c0357c0f2ddbd9f7aeac20e01b9a02e1.jpg')` }}>
      {/* Overlay */}
     

      {/* Content */}
      <div className="relative flex flex-col justify-center items-center h-full text-center px-4">
        <p className="text-[rgb(0,191,255)] mb-9 text-2xl font-monoOne  tracking-widest uppercase">
          Welcome to
        </p>
        <h1 className="text-black text-5xl   sm:text-6xl md:text-7xl font-lobster tracking-widest mb-8">
          Ultimate Team Federation
        </h1>
        <p className="text-gray-950 text-lg sm:text-xl font-inter mb-10 max-w-2xl">
          The home of elite competition. Join the action. Track stats. Earn glory.
        </p>
      </div>
    </section>
  );
}
