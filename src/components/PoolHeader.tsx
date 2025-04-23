import { motion } from "framer-motion";

const PoolHeader = () => {
  return (
    <motion.div 
      className="absolute top-10 left-0 right-0 z-50 text-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl font-bold text-white drop-shadow-lg">Summer Paradise</h1>
      <p className="text-xl text-white/90 mt-2 drop-shadow-md">Relax and enjoy the perfect day by the pool</p>
    </motion.div>
  );
};

export default PoolHeader;