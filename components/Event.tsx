"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const onlineEvents = [
  { name: "PhaseZero", src: "/alt_tag_en.png", alt: "PhaseZero Logo" },
  { name: "PhaseZero", src: "/alt_tag_en.png", alt: "PhaseZero Logo" },
];

const images = [
  { src: "/images/9.webp", alt: "Build your own Enterprise" },
  { src: "/images/shark.jpg", alt: "Shark Hunt" },
  { src: "/images/conclave.webp", alt: "Conclave" },
  { src: "/images/town.jpg", alt: "Town" },
  { src: "/images/her.jpg", alt: "Her Era" },
  { src: "/images/Find.jpg", alt: "Find Nima" },
  { src: "/images/shark.jpg", alt: "Shark Hunt" },
  { src: "/images/confluence.jpg", alt: "Confluence" },
  { src: "/images/bitburst.jpg", alt: "Bit'Burst" },
];

export default function Event() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="p-5 lg:p-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#094395]">
          Events
        </h2>

        {/* Online Events Section */}
        <div className="mb-10">
          <Link href="/gamenight">
            <p className="text-xl font-semibold text-blue-600 hover:underline mb-4">
              Online Events
            </p>
          </Link>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {onlineEvents.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              >
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt || "Online Event"}
                  width={300}
                  height={300}
                  className="w-full h-50 object-cover transition-transform duration-300 transform hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <p className="text-white text-sm">{item.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Offline Events Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-50 object-cover transition-transform duration-300 transform hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <p className="text-white text-sm">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Button */}
        <div className="flex justify-center mt-8">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <a
              href="https://www.instagram.com/iedc_cev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-blue-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                More
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative px-4">
            <Image
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              width={800}
              height={600}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
