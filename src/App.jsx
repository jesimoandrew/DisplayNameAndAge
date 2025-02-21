import { motion } from 'framer-motion';
import './App.css';
import NameAge from './components/NameAge';

function App() {
  return (
    <>
      <div className="out">
      <motion.h1
        initial={{ y: -100, opacity: 0, rotateX: 90 }}
        animate={{ y: 0, opacity: 1, rotateX: 0 }} 
        transition={{ duration: 1.5, ease: "easeOut" }} 
      >
        NAME & AGE DISPLAY
      </motion.h1>
      <NameAge />

      </div>
      
    </>
  );
}

export default App;
