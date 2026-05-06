import { Link } from "react-router-dom";
import {useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import passionImage from "../assets/passion.jpg";
import Coffee from "../assets/coffee.jpg";
import Dessert from "../assets/desserts.jpg";
import Drinks from "../assets/drinks.jpg";
import heroImg from "../assets/hero.jpg"; 

gsap.registerPlugin(ScrollTrigger);
function Home() {

  const [activeCard, setActiveCard] = useState(null);

  const subtitleRef = useRef();
  const btnRef = useRef();
  

  useEffect(() => {
    ScrollTrigger.refresh();
  const ctx = gsap.context(() => {

    const tl = gsap.timeline();

          tl.from(".word1", {
            y: 80,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          })
      
          .from(".word2", {
            y: 80,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          }, "-=0.4")
      
          .from(subtitleRef.current, {
            y: 40,
            opacity: 0,
            duration: 0.8,
          }, "-=0.3")
      
          .from(btnRef.current, {
            y: 30,
            opacity: 0,
            scale: 0.9,
            duration: 0.6,
            clearProps: "all",
            ease: "power3.out",
          }, "-=0.4");
      
        });
      
            gsap.fromTo( ".passion-text",
                { x: -100, opacity: 0 },
                {
                  x: 0,
                  opacity: 1,
                  duration: 1,
                  scrollTrigger: {
                    trigger: ".passion-text",
                    start: "top 80%",
                    toggleActions: "play none none none",
                  },
                }
              );
              
              gsap.fromTo(
                ".passion-img",
                { x: 100, opacity: 0 },
                {
                  x: 0,
                  opacity: 1,
                  duration: 1,
                  scrollTrigger: {
                    trigger: ".passion-img",
                    start: "top 80%",
                    toggleActions: "play none none none",
                  },
                }
              );
            
          gsap.utils.toArray(".card").forEach((card,index) => {
            gsap.fromTo(
              card,
              { x: index % 2 === 0 ? -100 : 100, opacity: 0, },
              {
                x: 0,
                opacity: 1,
                duration: 0.8,
                scrollTrigger: {
                  trigger: card,
                  start: "top 85%",
                  toggleActions: "play none none none", 
                },
              }
            );
          });

          gsap.utils.toArray(".img-box").forEach((img, i) => {
              gsap.fromTo(
                img,
                {
                  x: i % 2 === 0 ? 100 : -100,
                  opacity: 0,
                },
                {
                  x: 0,
                  opacity: 1,
                  duration: 0.8,
                  scrollTrigger: {
                    trigger: img,
                    start: "top 85%",
                  },
                }
              );
            });
            
          gsap.utils.toArray(".zoom-img").forEach((img) => {
              gsap.fromTo(
                img,
                { scale: 1.2, opacity: 0 },
                {
                  scale: 1,
                  opacity: 1,
                  duration: 1,
                  scrollTrigger: {
                    trigger: img,
                    start: "top 85%",
                  },
                }
              );
            });

            gsap.to(".hero-bg", {
              y: 80,
              ease: "none",
              scrollTrigger: {
                trigger: ".hero-section",
                start: "top top",
                end: "bottom top",
                scrub: 1, 
                invalidateOnRefresh: true,
              },
            });

            gsap.utils.toArray(".reveal-section").forEach((section) => {
              gsap.fromTo(
                section,
                { y: 80, opacity: 0, filter: "blur(8px)" },
                {
                  y: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                  duration: 1,
                  scrollTrigger: {
                    trigger: section,
                    start: "top 85%",
                  },
                }
              );
            });
      
            
        
                  
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#c6b2a2]">

      <section className="hero-section relative min-h-screen overflow-hidden flex flex-col justify-center items-center text-center ">
        
        <div
          className="hero-bg absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        />

        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <div className="relative z-10">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 ">
            <span className="inline-block text-white [text-shadow:0_4px_12px_rgba(0,0,0,0.8)] mr-2">
              {"Welcome to".split(" ").map((word, i) => (
            <span key={i} className="inline-block mr-2 word1">
             {word}
            </span>
            ))}
            </span>

             <span className="inline-block text-[#d4a373] [text-shadow:0_4px_12px_rgba(0,0,0,0.8)] drop-shadow-lg">
              {"Coffee House ".split(" ").map((word, i) => (
            <span key={i} className="inline-block mr-2 word2">
             {word}
            </span>
            ))}
            </span>
            
          </h1>

          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Premium coffee, handcrafted drinks & cozy vibes.
          </p>

          <Link
            ref={btnRef}
            to="/menu"
            className="inline-block mt-10 bg-[#d4a373] text-[#3e2723] px-10 py-3 rounded-full font-semibold hover:bg-[#c08b5c] transition transform hover:scale-105"
          >
            Explore Menu
          </Link>
        </div>
      </section>

      <section className="reveal-section bg-[#372825] text-white py-24 px-8 md:px-20 grid md:grid-cols-2 gap-12 items-center -mt-20 relative">
        <div className="passion-text">
          <h2 className="text-5xl font-extrabold mb-6">
            Brewed with <span className="text-[#d4a373]">Passion</span>
          </h2>
          <p className="text-gray-200 leading-relaxed">
            Every cup is crafted with love, quality beans and barista-level perfection.
          </p>
        </div>

        <div className="passion-img">
        <div className=" h-80 rounded-2xl overflow-hidden shadow-2xl border border-[#d4a373]/30">
          <img
            src={passionImage}
            alt="Coffee Passion"
            className="w-full h-full object-cover transition duration-500 hover:scale-110 hover:brightness-110"
          />
        </div>
        </div>
      </section>

      <section className="reveal-section py-24 px-6 md:px-20 overflow-hidden bg-gradient-to-br from-[#c6b2a2] via-[#f9f0d7] to-[#e0c9aa] ">
        <div className="space-y-16">

            <div className="relative md:flex md:items-center md:gap-12 cursor-pointer"
            onClick={() =>
              setActiveCard(activeCard === "coffee" ? null : "coffee")
            }
            >

          <div className="img-box md:w-1/2 bg-[#e6d0b6] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
               <h3 className="text-2xl font-bold text-[#3e2723]">Coffee</h3>
                <p className="text-[#6f4e37] mt-2">Espresso, Cappuccino & more</p>
             </div>

              <div className="h-100 rounded-2xl overflow-hidden shadow-2xl border border-[#d4a373]/30">
                <img
                  src={Coffee}
                  alt="coffee"
                  className="w-full h-full object-cover transition duration-500 zoom-img hover:scale-110 hover:brightness-110"
                />
              </div>
              {activeCard === "coffee" && (
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 backdrop-blur-sm rounded-2xl gap-4 z-10">

                <Link
                  to="/hot-coffee"
                  onClick={() => setActiveCard(null)}
                  className="bg-[#d4a373] text-white px-6 py-2 rounded-full font-bold hover:scale-105 transition"
                >
                  Hot Coffee
                </Link>

                <Link
                  to="/cold-coffee"
                  onClick={() => setActiveCard(null)}
                  className="bg-white text-[#4c3531] px-6 py-2 rounded-full font-bold hover:scale-105 transition"
                >
                   Cold Coffee
                </Link>

              </div>
            )}
            </div>
          

          <Link to="/drinks">
            <div className="md:flex md:items-center md:gap-12 md:flex-row-reverse">
              <div className="img-box md:w-1/2 bg-[#e6d0b4] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-[#3e2723]"> Drinks</h3>
                <p className="text-[#6f4e37] mt-2">Refreshing & Delightful</p>
              </div>

              <div className="h-100 rounded-2xl overflow-hidden shadow-2xl border border-[#d4a373]/30">
                <img
                  src={Drinks}
                  alt=" Drinks"
                  className="w-full h-full object-cover  transition duration-500 zoom-img hover:scale-110 hover:brightness-110"
                />
              </div>
            </div>
          </Link>

          <Link to="/desserts">
            <div className="md:flex md:items-center md:gap-12">
              <div className="img-box md:w-1/2 bg-[#e6d0b4] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-[#3e2723]">Desserts</h3>
                <p className="text-[#6f4e37] mt-2">Sweet & Fresh</p>
              </div>

              <div className="h-100 rounded-2xl overflow-hidden shadow-2xl border border-[#d4a373]/30">
                <img
                  src={Dessert}
                  alt="Dessert"
                  className="w-full h-full object-cover transition duration-500 zoom-img hover:scale-110 hover:brightness-110"
                />
              </div>
            </div>
          </Link>

        </div>
      </section>

    </div>
  );
}

export default Home;
