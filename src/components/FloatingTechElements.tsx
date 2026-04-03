import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const electricSymbols = [
  { symbol: "Ω", name: "Resistência" },
  { symbol: "V", name: "Tensão" },
  { symbol: "A", name: "Corrente" },
  { symbol: "W", name: "Potência" },
  { symbol: "F", name: "Capacitância" },
  { symbol: "H", name: "Indutância" },
  { symbol: "Hz", name: "Frequência" },
  { symbol: "Φ", name: "Fluxo" },
];

const AtomOrbit = ({
  children,
  duration,
  rotateX,
  rotateY,
  delay = 0,
}: {
  children: React.ReactNode;
  duration: number;
  rotateX: number;
  rotateY: number;
  delay?: number;
}) => (
  <div
    className="absolute inset-0"
    style={{
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transformStyle: "preserve-3d",
    }}
  >
    <motion.div
      className="absolute inset-0"
      style={{ transformStyle: "preserve-3d" }}
      animate={{ rotateZ: [0, 360] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
    >
      {children}
    </motion.div>
  </div>
);

const OrbitParticle = ({
  symbol,
  name,
  angle,
  radius,
}: {
  symbol: string;
  name: string;
  angle: number;
  radius: number;
}) => {
  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * radius;
  const y = Math.sin(rad) * radius;

  return (
    <motion.div
      className="absolute flex flex-col items-center gap-0.5"
      style={{
        left: "50%",
        top: "50%",
        transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
      }}
    >
      <motion.div
        className="w-10 h-10 rounded-full glass-card flex items-center justify-center border border-primary/30 shadow-[0_0_15px_hsl(var(--primary)/0.2)]"
        whileHover={{
          scale: 1.4,
          boxShadow: "0 0 35px hsl(var(--primary) / 0.6)",
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <span className="text-sm font-bold text-primary font-mono">{symbol}</span>
      </motion.div>
      <span className="text-[8px] font-medium text-muted-foreground whitespace-nowrap opacity-70">
        {name}
      </span>
    </motion.div>
  );
};

const FloatingTechElements = () => {
  const radius = 130;

  // Split symbols into 3 orbits
  const orbit1 = electricSymbols.slice(0, 3);
  const orbit2 = electricSymbols.slice(3, 5);
  const orbit3 = electricSymbols.slice(5, 8);

  return (
    <div className="w-full h-[400px] md:h-[500px] flex items-center justify-center relative">
      <div
        className="relative w-[320px] h-[320px]"
        style={{ perspective: "800px", transformStyle: "preserve-3d" }}
      >
        {/* Orbit ring trails */}
        {[
          { rx: 65, ry: 0 },
          { rx: -20, ry: 60 },
          { rx: 30, ry: -45 },
        ].map((r, i) => (
          <div
            key={i}
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: `rotateX(${r.rx}deg) rotateY(${r.ry}deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            <motion.div
              className="w-[260px] h-[260px] rounded-full border border-primary/10"
              animate={{ opacity: [0.15, 0.35, 0.15] }}
              transition={{
                duration: 4,
                delay: i * 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        ))}

        {/* Pulse rings behind core */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={`pulse-${i}`}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/15"
            style={{ width: 80 + i * 30, height: 80 + i * 30 }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.05, 0.3],
            }}
            transition={{
              duration: 3.5,
              delay: i * 0.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Center nucleus - Lightning bolt */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-20 h-20 rounded-full glass-card flex items-center justify-center border border-primary/50 shadow-[0_0_40px_hsl(var(--primary)/0.3)]"
          animate={{
            boxShadow: [
              "0 0 30px hsl(var(--primary) / 0.2)",
              "0 0 60px hsl(var(--primary) / 0.5)",
              "0 0 30px hsl(var(--primary) / 0.2)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Zap className="w-9 h-9 text-primary fill-primary/30" />
          </motion.div>
        </motion.div>

        {/* Orbit 1 - tilted like atom */}
        <AtomOrbit duration={25} rotateX={65} rotateY={0}>
          {orbit1.map((item, i) => (
            <OrbitParticle
              key={item.symbol}
              symbol={item.symbol}
              name={item.name}
              angle={(i / orbit1.length) * 360}
              radius={radius}
            />
          ))}
        </AtomOrbit>

        {/* Orbit 2 - different tilt */}
        <AtomOrbit duration={30} rotateX={-20} rotateY={60} delay={2}>
          {orbit2.map((item, i) => (
            <OrbitParticle
              key={item.symbol}
              symbol={item.symbol}
              name={item.name}
              angle={(i / orbit2.length) * 360}
              radius={radius}
            />
          ))}
        </AtomOrbit>

        {/* Orbit 3 - another tilt */}
        <AtomOrbit duration={35} rotateX={30} rotateY={-45} delay={4}>
          {orbit3.map((item, i) => (
            <OrbitParticle
              key={item.symbol}
              symbol={item.symbol}
              name={item.name}
              angle={(i / orbit3.length) * 360}
              radius={radius}
            />
          ))}
        </AtomOrbit>
      </div>
    </div>
  );
};

export default FloatingTechElements;
