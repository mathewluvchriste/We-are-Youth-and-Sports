import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import foto from "../assets/foto.png";

function About() {
    const controls = useAnimation();
    const [showModal, setShowModal] = useState(false);
    const handleHoverStart = () => {
        controls.start("hover");
    };

    const handleHoverEnd = () => {
        controls.start("rest");
    };

    return (
        <div
            data-scroll
            data-scroll-section
            data-scroll-speed="-.02"
            className="w-full px-[50px] py-20 bg-[#ff9841] rounded-2xl text-black"
        >
            {/* Header */}
            <h1 className="text-[4vw] leading-[4.5vw] tracking-tight pr-[6vw]">
                Youth and Sports lahir dari nol, sebuah awal sederhana dengan tujuan besar.
                Dibentuk untuk menghadirkan semangat baru dalam dunia olahraga di PPIT
                Nanjing, membuka ruang bagi kegiatan yang sebelumnya belum pernah ada,
                serta menginspirasi kebersamaan, energi, dan gaya baru dalam
                berorganisasi.
            </h1>

            {/* Content */}
            <div className="w-full border-t border-[#8f6441] mt-20 pt-5">
                <div className="grid grid-cols-12 gap-10">

                    {/* Left */}
                    <div className="col-span-3">
                        <h3 className="text-lg font-medium">
                            What Can You Expect:
                        </h3>
                    </div>

                    {/* Middle */}
                    <div className="col-span-7 text-[17px] leading-8">

                        <h3 className="font-bold text-xl mb-4">
                            Program Kerja Bersifat Tetap
                        </h3>

                        <ul className="list-disc pl-6 mb-10">
                            <li>Trail Outing – Youth and Sports</li>
                            <li>Survei Minat Bakat – Youth and Sports</li>
                            <li>
                                Live Talk Show – Youth and Sports dan
                                Nanjing Nusantara Champs
                            </li>
                            <li>
                                Sports Day x Caring x Wellpar 2.0 –
                                Youth and Sports dan Public Relation and Networking
                            </li>
                            <li>
                                Weekly Post – Youth and Sports dan
                                Nanjing Nusantara Champs
                            </li>
                        </ul>

                        <h3 className="font-bold text-xl mb-4">
                            Program Kerja Bersifat Insidental
                        </h3>

                        <ul className="list-disc pl-6">
                            <li>Photography by YAS – Youth and Sports</li>
                            <li>
                                Pembentukan Tim Basket, Mini Soccer,
                                Mobile Legends, dan Dance – Youth and Sports
                            </li>
                            <li>
                                Seleksi serta Keberangkatan Atlet Nanjing ke COPA –
                                Youth and Sports
                            </li>
                        </ul>
                    </div>

                    {/* Right */}
                    <div className="col-span-2 flex flex-col">
                        <div className="mb-6 font-medium">
                            Follow Us
                        </div>

                        {[
                            "Instagram",
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="relative w-fit cursor-pointer overflow-hidden mb-3"
                                whileHover="hover"
                                initial="initial"
                                animate="initial"
                            >
                                <a
                                    href="https://www.instagram.com/ppit_nanjing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative z-10"
                                >
                                    Instagram
                                </a>

                                <motion.div
                                    className="absolute bottom-0 left-0 h-[1px] bg-black"
                                    variants={{
                                        initial: { scaleX: 1, originX: 1 },
                                        hover: {
                                            scaleX: 0,
                                            originX: 1,
                                            transition: { duration: 0.3 },
                                        },
                                    }}
                                    style={{ width: "100%" }}
                                />

                                <motion.div
                                    className="absolute bottom-0 left-0 h-[1px] bg-black"
                                    variants={{
                                        initial: { scaleX: 0, originX: 0 },
                                        hover: {
                                            scaleX: 1,
                                            originX: 0,
                                            transition: {
                                                delay: 0.3,
                                                duration: 0.3,
                                            },
                                        },
                                    }}
                                    style={{ width: "100%" }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="w-full border-t border-[#8f6441] mt-[8rem] pt-[2rem] flex">
                <div className="w-1/2">
                    <h1 className="text-[4vw] mb-4 leading-none">
                        Our Approach
                    </h1>

                    <button
                    onClick={() => setShowModal(true)}
                    onMouseEnter={handleHoverStart}
                    onMouseLeave={handleHoverEnd}
                    className="relative w-52 h-16 bg-zinc-800 rounded-full text-white flex items-center justify-between pl-6 pr-2 group overflow-hidden"
                    >
                        <span className="z-10 tracking-wide font-medium">
                            READ MORE
                        </span>

                        <div className="w-12 h-12 z-10 flex items-center justify-center">
                            <div className="w-3 h-3 bg-white rounded-full transform scale-100 group-hover:scale-400 transition-transform duration-300 ease-in-out flex items-center justify-center">
                                <FaArrowUpLong className="text-black text-[4px] opacity-0 rotate-45 group-hover:opacity-100 transition-all duration-300" />
                            </div>
                        </div>

                        <span className="absolute left-0 bottom-0 w-full h-0 bg-zinc-950 rounded-full group-hover:h-full transition-all duration-300 ease-in-out z-0" />
                    </button>
                </div>

                <motion.div
                    className="w-1/2 h-[70vh] rounded-2xl overflow-hidden"
                    variants={{
                        rest: { scale: 1 },
                        hover: { scale: 0.95 },
                    }}
                    initial="rest"
                    animate={controls}
                    transition={{
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                >
                <motion.img
                src={foto}
                alt="YAS"
                className="w-full h-full object-cover"
                variants={{
                    rest: { scale: 1 },
                    hover: { scale: 1.08 },
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                />
                        variants={{
                            rest: { scale: 1 },
                            hover: { scale: 1.08 },
                        }}
                        transition={{
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                    />
                </motion.div>
            </div>
        </div>
    );
}
{showModal && (
  <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-[9999]">
    <div className="bg-white text-black p-8 rounded-2xl w-[80%] max-w-3xl max-h-[80vh] overflow-y-auto">

      <h2 className="text-4xl font-bold mb-8">
        Youth and Sports Department
      </h2>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-3">
          KOORDINATOR DEPARTMENT
        </h3>

        <p className="text-xl">
          Mathew Luv Christe
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-3">
          ANGGOTA DEPARTMENT
        </h3>

        <ul className="list-disc ml-6 space-y-2 text-lg">
          <li>Dennis Yegar Galedio</li>
          <li>Dustin Wijaya</li>
          <li>Eugenia Lysandra Lona</li>
          <li>Nur Dwi Ningsih Rizal Keala</li>
        </ul>
      </div>

      <button
        onClick={() => setShowModal(false)}
        className="mt-8 px-6 py-3 bg-black text-white rounded-full hover:bg-zinc-800 transition"
      >
        Close
      </button>

    </div>
  </div>
)}
export default About;