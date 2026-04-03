import { motion } from "framer-motion";

import mrvLogo from "@/assets/mrv.png";
import plaengeLogo from "@/assets/plaenge.png";
import piemonteLogo from "@/assets/piemonte.png";
import yticonLogo from "@/assets/yticon.png";
import yoshiiLogo from "@/assets/yoshii.webp";

const logos = [
  { src: mrvLogo, name: "MRV", url: "https://www.mrv.com.br" },
  { src: plaengeLogo, name: "Plaenge", url: "https://www.plaenge.com.br" },
  { src: piemonteLogo, name: "Piemonte", url: "https://www.piemonte.com.br" },
  { src: yticonLogo, name: "Yticon", url: "https://www.yticon.com.br" },
  { src: yoshiiLogo, name: "Yoshii", url: "https://www.yoshii.com.br" },
];

// Duplicate for seamless infinite scroll
const duplicated = [...logos, ...logos, ...logos];

const LogoCarousel3D = () => {
  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

      <motion.div
        className="flex gap-8 w-max"
        animate={{ x: [0, -(logos.length * 200)] }}
        transition={{
          x: {
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {duplicated.map((logo, i) => (
          <a
            key={`${logo.name}-${i}`}
            href={logo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-shrink-0"
          >
            <motion.div
              className="w-[168px] h-[100px] glass-card flex items-center justify-center p-5 border border-primary/10 rounded-xl transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-[0_0_25px_hsl(var(--primary)/0.15)]"
              whileHover={{ scale: 1.08, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 brightness-0 invert group-hover:brightness-100 group-hover:invert-0"
                loading="lazy"
              />
            </motion.div>
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoCarousel3D;
