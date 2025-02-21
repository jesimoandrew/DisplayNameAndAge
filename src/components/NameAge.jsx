import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './NameAge.css';
import DisplayBox from './DisplayBox';

const NameAge = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [showDisplayBox, setShowDisplayBox] = useState(false);
  const [displayName, setDisplayName] = useState(""); 
  const [displayAge, setDisplayAge] = useState(""); 
  const [startAnimation, setStartAnimation] = useState(false); 

  useEffect(() => {
    setStartAnimation(true); 
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleDisplayButtonClick = () => {
    if (name.trim() !== "" && age.trim() !== "") {
      setDisplayName(name);
      setDisplayAge(age);
      setShowDisplayBox(true);
    } else {
      alert("Please enter both Name and Age.");
      setShowDisplayBox(false);
    }
  };

  return (
    <>
      <motion.div
        className="container"
        initial={{ opacity: 0, rotateX: 90, rotateY: -20, scale: 0.8 }} 
        animate={startAnimation ? { opacity: 1, rotateX: 0, rotateY: 0, scale: 1 } : {}} 
        transition={{ duration: 0.5, ease: "easeOut" }} 
        whileHover={{ scale: 1.01 }}
      >
        <div className='input-line'>
          <p>Name</p>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>

        <div className='input-line'>
          <p>Age</p>
          <input type="number" value={age} onChange={handleAgeChange} />
        </div>

        <button onClick={handleDisplayButtonClick}>DISPLAY</button>
      </motion.div>

      <AnimatePresence>
        {showDisplayBox && (
          <motion.div
          
          initial={{ 
            scale: 0.5, 
            y: -20, 
            borderColor: "#b769ff", 
          }}
          animate={{
            scale: [1, 1.02, 1],  // Subtle scaling effect
            y: [0, -5, 0],        // Floating effect
            borderColor: ["#b769ff", "white", "#b769ff"], // Animate from #b769ff to white continuously
          }}
          exit={{ opacity: 0, scale: 0.5, y: -20 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,    // Continuous animation
            repeatType: "mirror" // Smooth back and forth
          }}
        >
            <DisplayBox name={displayName} age={displayAge} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NameAge;
