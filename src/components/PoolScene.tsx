import { motion } from "framer-motion";

const PoolScene = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background gradient for sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-300 to-blue-500 z-0"></div>
      
      {/* Sun */}
      <motion.div 
        className="absolute top-10 right-20 w-20 h-20 rounded-full bg-yellow-300 shadow-lg z-10"
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />
      
      {/* Pool water */}
      <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-blue-400 z-10">
        {/* Water surface effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-300/50 to-blue-600/80">
          {/* Water ripples */}
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-[1px] bg-white/20"
              style={{ top: `${10 + i * 20}%` }}
              animate={{
                y: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Pool edge */}
      <div className="absolute bottom-[33%] left-0 right-0 h-4 bg-gray-200 z-20"></div>
      
      {/* Woman in the pool */}
      <div className="absolute bottom-[15%] left-1/2 transform -translate-x-1/2 z-30">
        <img 
          src="https://images.unsplash.com/photo-1560090995-01632a28895b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
          alt="Blonde woman in swimming pool"
          className="h-80 object-cover rounded-lg shadow-xl"
        />
      </div>
      
      {/* Pool deck */}
      <div className="absolute bottom-0 left-0 right-0 h-[33%] bg-amber-100 z-0">
        {/* Deck texture */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>
      
      {/* Lounge chair */}
      <div className="absolute bottom-[5%] right-[15%] w-40 h-12 bg-white rounded-md z-20">
        <div className="absolute top-0 left-0 right-0 h-2 bg-blue-500 rounded-t-md"></div>
      </div>
      
      {/* Cocktail */}
      <div className="absolute bottom-[15%] right-[20%] z-30">
        <div className="w-6 h-10 bg-gradient-to-t from-pink-300 to-orange-200 rounded-b-md"></div>
        <div className="w-8 h-1 bg-white -mt-10 rounded-full"></div>
        <div className="w-1 h-4 bg-pink-500 -mt-4 ml-3"></div>
      </div>
    </div>
  );
};

export default PoolScene;