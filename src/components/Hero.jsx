import { motion } from "framer-motion";
import Logo from "../assets/logo.jpg";

export default function Hero() {
  return (
    <section className="text-center py-16 px-4 bg-gradient-to-b from-yellow-50 via-red-50 to-blue-50">
      {/* Logo animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center mb-6"
      >
        <img
          src={Logo}
          alt="Logo"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-red-400 shadow-lg"
        />
      </motion.div>

      {/* Coaching Center Name */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-3xl md:text-5xl font-extrabold text-red-600 mb-2"
      >
        New Krishna Coaching Center
      </motion.h1>

      {/* Tagline */}
      <p className="text-xl md:text-2xl italic text-gray-700 mb-3">
        Come with your aim, we shape your future
      </p>

      {/* Location */}
      <p className="text-lg text-gray-600 mb-2">
        Sidhuapar, Barhalganj – Gorakhpur
      </p>

      {/* Contact */}
      <p className="text-base text-gray-700 font-medium">
        Contact No.{" "}
        <span className="text-blue-800 font-semibold">+91 9935769888</span>
      </p>
    </section>
  );
}
