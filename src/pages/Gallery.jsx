import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = [
  {
    src: "https://scontent-del2-3.xx.fbcdn.net/v/t39.30808-6/485060839_1193389116127642_3061222382281011930_n.jpg?stp=cp6_dst-jpegr_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Br9E2ghLEc4Q7kNvwHX6JjQ&_nc_oc=AdmSe_xHp3skS1taP3lPMO3rmli3VAzhdCl3s_4ZoZ7cCeRYoBcn0K6HwG6obqHHXss&_nc_zt=23&se=-1&_nc_ht=scontent-del2-3.xx&_nc_gid=GbwKTQ9LRH7tyCZo7wqVoQ&oh=00_AfFj9cHMIk5RbSDpSgHC5gW6dugxPtIx3FSpJ1L5Yy9WvA&oe=680DA680",
    title: "Yearly Test 2024",
    year: "2024",
    category: "Test",
  },
  {
    src: "https://scontent-del2-1.xx.fbcdn.net/v/t39.30808-6/485146176_1193389066127647_2678901485341023811_n.jpg?stp=cp6_dst-jpegr_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zBunIHB_ITwQ7kNvwHWsC3u&_nc_oc=AdlUk2fn0X1ig8IeeAueStZHDAH3d4_2Eo7qf93F1z67IAZlgTjoQEEdV0QphffvZFI&_nc_zt=23&se=-1&_nc_ht=scontent-del2-1.xx&_nc_gid=ORdYQAg4Tj9dkWK87MY_Ow&oh=00_AfHc4jPm1qjC8B65XXrE-PV6fNtKkELCk1A1eSyES5kCrA&oe=680D9219",
    title: "Yearly Test 2024",
    year: "2024",
    category: "Test",
  },
  {
    src: "https://scontent-del1-1.xx.fbcdn.net/v/t39.30808-6/491368045_1218368620296358_1392608482775601499_n.jpg?stp=cp6_dst-jpegr_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=1c1WbTYd5aUQ7kNvwGSKN7S&_nc_oc=Adn3cb-xIEHRXdegYteHELO5mP0WrbuzrsADl7DZMTFVls5eSyiI6PN5FoTN43N3-FE&_nc_zt=23&se=-1&_nc_ht=scontent-del1-1.xx&_nc_gid=k9Qpm40x0EgF3fyAUq0VSw&oh=00_AfFDbDywJhhoNm3M--A4k4vC7RjuQy_bll8TRR1FF1cIMQ&oe=680DA72D",
    title: "Prize Distribution",
    year: "2025",
    category: "Event",
  },
  {
    src: "https://scontent-del2-3.xx.fbcdn.net/v/t39.30808-6/491300213_1220032253463328_5273723672102680354_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=DhzyX-nATmsQ7kNvwGS9tAZ&_nc_oc=AdmBZ6ZXRJDCPVDTV4ry3TAOQTKukmzEH_24unZRabOaqbW_Pe-3IAa9yrTpXYSRnV8&_nc_zt=23&_nc_ht=scontent-del2-3.xx&_nc_gid=RR9ODyRs2n0GnD86L5KWCA&oh=00_AfGaEhWMEtsWQKyujg4OGwEicQ-NO1tVBxfkuWULr2ngsw&oe=680D9CEC",
    title: "Farewell Party",
    year: "2024",
    category: "Event",
  },
  {
    src: "https://scontent-del1-1.xx.fbcdn.net/v/t39.30808-6/486261162_1196121512521069_6749611790910609568_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=iNEU_tmjM9cQ7kNvwF8doHP&_nc_oc=AdlNfpYjfXOJ5nzxwyQHXUNdtgITK9il4bvgFxRSU9nMOz_YAbU2kXA04nYsNkg-8JQ&_nc_zt=23&_nc_ht=scontent-del1-1.xx&_nc_gid=GbsXlCNd568ySu7t-XJvHQ&oh=00_AfGcjq39Ua6KPmwYgC4xOljZ2QzhzvemJiXH5CsTDJ1s1Q&oe=680DBFFC",
    title: "Farewell Party",
    year: "2023",
    category: "Event",
  },
  // Add more images...
];

const uniqueYears = ["All", ...new Set(galleryImages.map((img) => img.year))];

export default function Gallery() {
  const [filterYear, setFilterYear] = useState("All");
  const [selectedImg, setSelectedImg] = useState(null);

  const filteredImages =
    filterYear === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.year === filterYear);

  return (
    <section className="bg-white py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-red-600 mb-10">
        Gallery & Events
      </h2>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {uniqueYears.map((year) => (
          <button
            key={year}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              filterYear === year
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-red-400 hover:text-white transition-all`}
            onClick={() => setFilterYear(year)}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredImages.map((img, index) => (
          <div
            key={index}
            className="cursor-pointer group overflow-hidden rounded-xl shadow-md"
            onClick={() => setSelectedImg(img)}
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
            />
            <div className="bg-red-600 text-white text-center py-2 text-sm">
              {img.title}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.img
              src={selectedImg.src}
              alt={selectedImg.title}
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // prevent closing on image click
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
