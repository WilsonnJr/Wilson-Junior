import { motion } from "framer-motion";
import { Cpu, Zap, Cable, Lightbulb, CircuitBoard, Plug } from "lucide-react";

const techItems = [
  { icon: Cpu, label: "BIM", delay: 0 },
  { icon: Zap, label: "Elétrica", delay: 0.5 },
  { icon: Cable, label: "Cabeamento", delay: 1 },
  { icon: Lightbulb, label: "Iluminação", delay: 1.5 },
  { icon: CircuitBoard, label: "Automação", delay: 2 },
  { icon: Plug, label: "Instalações", delay: 2.5 },
];

const OrbitingIcon = ({
  icon: Icon,
  label,
  index,
  total,
}: {
  icon: typeof Cpu;
  label: string;
  index: number;
  total: number;
}) => {
  const angle = (index / total) * 360;
  const radius = 140;

  return (
    <motion.div
      className="absolute"
      style={{
        top: "50%",
        left: "50%",
      }}
      animate={{
        rotate: [angle, angle + 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <motion.div
        className="flex flex-col items-center gap-1"
        style={{
          transform: `translateX(${radius}px) translateY(-50%)`,
        }}
        animate={{
          rotate: [-angle, -(angle + 360)],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <motion.div
          className="w-14 h-14 rounded-xl glass-card flex items-center justify-center border border-primary/30 shadow-[0_0_20px_hsl(var(--primary)/0.15)]"
          whileHover={{
            scale: 1.3,
            boxShadow: "0 0 40px hsl(var(--primary) / 0.5)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Icon className="w-6 h-6 text-primary" />
        </motion.div>
        <span className="text-[10px] font-medium text-muted-foreground whitespace-nowrap">
          {label}
        </span>
      </motion.div>
    </motion.div>
  );
};

const FloatingTechElements = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px] flex items-center justify-center relative">
      {/* Center core */}
      <div className="relative w-[300px] h-[300px]">
        {/* Pulse rings */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border border-primary/20"
            style={{ margin: `${-20 * i}px` }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 3,
              delay: i * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Center element */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full glass-card flex items-center justify-center border border-primary/40 shadow-[0_0_30px_hsl(var(--primary)/0.25)]"
          animate={{
            boxShadow: [
              "0 0 30px hsl(var(--primary) / 0.2)",
              "0 0 50px hsl(var(--primary) / 0.4)",
              "0 0 30px hsl(var(--primary) / 0.2)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-2xl font-bold font-display text-primary">WJ</span>
        </motion.div>

        {/* Orbiting icons */}
        {techItems.map((item, i) => (
          <OrbitingIcon
            key={item.label}
            icon={item.icon}
            label={item.label}
            index={i}
            total={techItems.length}
          />
        ))}
      </div>
    </div>
  );
};

export default FloatingTechElements;
