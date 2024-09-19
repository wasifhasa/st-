

// 'use client'
// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import Image from 'next/image';
// import Navbar from '../Components/Navbar';

// function Page() {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <div>
//       <section className="bg-gray-900 overflow-hidden">
//         <Navbar/>
//         <h1 className="text-5xl text-white font-extrabold text-center mt-28 underline" data-aos="fade-in">
//           OUR WORK
//         </h1>
//         <h1 className="text-3xl text-gray-500 text-center font-bold mt-20 hover:underline" data-aos="fade-in">
//            GRAPHIC AND LOGO DESIGNING
//         </h1>
//         <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 flex flex-col justify-center">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {/* Logos */}
//             <a href="#_" className="transform transition-all duration-500 hover:scale-105 hover:-translate-y-4" data-aos="flip-left">
//               <Image
//                 src="/l1.jpg" // Exact name you provided
//                 width={800}       
//                 height={512}      
//                 className="rounded-xl rotate-6 hover:rotate-0 object-cover w-full h-64"
//                 alt="Logo 1"
//               />
//             </a>
//             <a href="#_" className="transform transition-all duration-500 hover:scale-105 hover:-translate-y-4" data-aos="flip-left">
//               <Image
//                 src="/l2.jpg"
//                 width={800}
//                 height={512}
//                 className="rounded-xl -rotate-12 hover:rotate-0 object-cover w-full h-64"
//                 alt="Logo 2"
//               />
//             </a>
//             <a href="#_" className="transform transition-all duration-500 hover:scale-105 hover:-translate-y-4" data-aos="flip-left">
//               <Image
//                 src="/l3.jpg"
//                 width={800}
//                 height={512}
//                 className="rounded-xl rotate-6 hover:rotate-0 object-cover w-full h-64"
//                 alt="Logo 3"
//               />
//             </a>
//             <a href="#_" className="transform transition-all duration-500 hover:scale-105 hover:-translate-y-4" data-aos="flip-left">
//               <Image
//                 src="/l4.jpg"
//                 width={800}
//                 height={512}
//                 className="rounded-xl -rotate-12 hover:rotate-0 object-cover w-full h-64"
//                 alt="Logo 4"
//               />
//             </a>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
//             {/* Graphics */}
//             <a href="#_" className="transform transition-all duration-500 hover:scale-105 hover:-translate-y-4" data-aos="flip-left">
//               <Image
//                 src="/g1.jpg"
//                 width={800}
//                 height={512}
//                 className="rounded-xl rotate-6 hover:rotate-0 object-cover w-full h-64"
//                 alt="Graphic 1"
//               />
//             </a>
//             <a href="#_" className="transform transition-all duration-500 hover:scale-105 hover:-translate-y-4" data-aos="flip-left">
//               <Image
//                 src="/g2.jpg"
//                 width={800}
//                 height={512}
//                 className="rounded-xl -rotate-12 hover:rotate-0 object-cover w-full h-64"
//                 alt="Graphic 2"
//               />
//             </a>
//             <a href="#_" className="transform transition-all duration-500 hover:scale-105 hover:-translate-y-4" data-aos="flip-left">
//               <Image
//                 src="/g3.jpg"
//                 width={800}
//                 height={512}
//                 className="rounded-xl rotate-6 hover:rotate-0 object-cover w-full h-64"
//                 alt="Graphic 3"
//               />
//             </a>
//             <a href="#_" className="transform transition-all duration-500 hover:scale-105 hover:-translate-y-4" data-aos="flip-left">
//               <Image
//                 src="/g4.jpg"
//                 width={800}
//                 height={512}
//                 className="rounded-xl -rotate-12 hover:rotate-0 object-cover w-full h-64"
//                 alt="Graphic 4"
//               />
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Web development and designing */}

//       <section className="bg-gray-900 overflow-hidden">
//         <h1 className="text-3xl text-gray-500 text-center font-bold mt-40 hover:underline" data-aos="fade-in">
//           WEB DEVELOPMENT AND DESIGNING
//         </h1>

//         <div className="mt-20 max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 flex flex-col justify-center">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             <a href="#_" className="transform transition-all duration-500 hover:scale-105 hover:-translate-y-4" data-aos="flip-left">
//               <Image
//                 src="/w11.png"
//                   width={800}
//                 height={512}
//                 className="rounded-xl rotate-6 hover:rotate-0 object-cover w-full h-64"
//                 alt="Project 1"
//               />
//             </a>
//             <a href="#_" className="transform transition-all duration-500 hover:scale-105 hover:-translate-y-4" data-aos="flip-left">
//               <Image
//                 src="/w22.png"
//                                 width={800}
//                 height={512}
//                 className="rounded-xl -rotate-12 hover:rotate-0 object-cover w-full h-64"
//                 alt="Project 2"
//               />
//             </a>
//             <a href="#_" className="transform transition-all duration-500 hover:scale-105 hover:-translate-y-4" data-aos="flip-left">
//               <Image
//                 src="/w33.png"
//                 width={800}
//                 height={512}
//                 className="rounded-xl rotate-6 hover:rotate-0 object-cover w-full h-64"
//                 alt="Project 3"
//               />
//             </a>
//             <a href="#_" className="transform transition-all duration-500 hover:scale-105 hover:-translate-y-4" data-aos="flip-left">
//               <Image
//                 src="/w44.png"
//                 width={800}
//                 height={512}
//                 className="rounded-xl -rotate-12 hover:rotate-0 object-cover w-full h-64"
//                 alt="Project 4"
//               />
//             </a>
//             <a href="#_" className="transform transition-all duration-500 hover:scale-105 hover:-translate-y-4" data-aos="flip-left">
//               <Image
//                 src="/w55.png"
//                 width={800}
//                 height={512}
//                 className="rounded-xl rotate-6 hover:rotate-0 object-cover w-full h-64"
//                 alt="Project 5"
//               />
//             </a>
//             <a href="#_" className="transform transition-all duration-500 hover:scale-105 hover:-translate-y-4" data-aos="flip-left">
//               <Image
//                 src="/w6.jpg"
//                 width={800}
//                 height={512}
//                 className="rounded-xl -rotate-12 hover:rotate-0 object-cover w-full h-64"
//                 alt="Project 6"
//               />
//             </a>
//             <a href="#_" className="transform transition-all duration-500 hover:scale-105 hover:-translate-y-4" data-aos="flip-left">
//               <Image
//                 src="/w7.jpg"
//                 width={800}
//                 height={512}
//                 className="rounded-xl rotate-6 hover:rotate-0 object-cover w-full h-64"
//                 alt="Project 7"
//               />
//             </a>
//           </div>

//           <h1 className="mt-60 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500 text-5xl font-black" data-aos="fade-up">
//             Apart from this, we have many other projects as well
//           </h1>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Page;


'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Navbar from '../Components/Navbar';

function Page() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <section className="bg-gray-900 overflow-hidden">
        <Navbar />
        {/* Our Work Section */}
        <h1 className="text-5xl text-white font-extrabold text-center mt-28 underline" data-aos="fade-in">
          OUR WORK
        </h1>
        
        {/* Graphic and Logo Designing */}
        <h1 className="text-3xl text-gray-500 text-center font-bold mt-20 hover:underline" data-aos="fade-in">
          GRAPHIC AND LOGO DESIGNING
        </h1>
        <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-4 md:px-12 mx-auto py-12 lg:py-24 space-y-24 flex flex-col justify-center">
          
          {/* Logos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['l1', 'l2', 'l3', 'l4'].map((logo, index) => (
              <a key={index} href="#_" className="transform transition-transform duration-500 hover:scale-105" data-aos="flip-left">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={`/${logo}.jpg`}
                    layout="responsive"
                    width={800}
                    height={512}
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    alt={`Logo ${index + 1}`}
                  />
                </div>
              </a>
            ))}
          </div>

          {/* Graphics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {['g1', 'g2', 'g3', 'g4'].map((graphic, index) => (
              <a key={index} href="#_" className="transform transition-transform duration-500 hover:scale-105" data-aos="flip-left">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={`/${graphic}.jpg`}
                    layout="responsive"
                    width={800}
                    height={512}
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    alt={`Graphic ${index + 1}`}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Web Development and Designing Section */}
      <section className="bg-gray-900 overflow-hidden">
        <h1 className="text-3xl text-gray-500 text-center font-bold mt-40 hover:underline" data-aos="fade-in">
          WEB DEVELOPMENT AND DESIGNING
        </h1>

        <div className="mt-20 max-w-screen-xl 2xl:max-w-screen-3xl px-4 md:px-12 mx-auto py-12 lg:py-24 space-y-24 flex flex-col justify-center">
          
          {/* Web Development Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {['w11', 'w22', 'w33', 'w44', 'w55', 'w6', 'w7'].map((project, index) => (
              <a key={index} href="#_" className="transform transition-transform duration-500 hover:scale-105" data-aos="flip-left">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={`/${project}.png`}
                    layout="responsive"
                    width={800}
                    height={512}
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    alt={`Project ${index + 1}`}
                  />
                </div>
              </a>
            ))}
          </div>

          {/* Conclusion Message */}
          <h1 className="mt-60 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500 text-5xl font-black" data-aos="fade-up">
            Apart from this, we have many other projects as well
          </h1>
        </div>
      </section>
    </div>
  );
}

export default Page;
