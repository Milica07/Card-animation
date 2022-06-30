import {motion} from 'framer-motion';
import { useState } from 'react';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <motion.div transition={{ layout: {duration:1, type: "spring"} }} 
      Layout 
      onClick={() => setIsOpen(!isOpen)} 
      className="card"
      style={{   borderRadius: "1rem", boxShadov: '0px 10px 30px rgba(0,0,0,0.5)' }}>
        <motion.h2 Layout="position">Quote 🚀</motion.h2>
        {isOpen && ( 
        <motion.div initial={{opacity: 0}} animate={{ opacity: 1}} transition={{ duration: 1 }} 
        className="expand" exit={{ opacity: 0 }}>
          <p>
          Master the basics. Then practice them every day without fail. 
          Small disciplines repeated with consistency every day lead to great achievements gained slowly over time.
          </p>
          <button>John C. Maxwell</button>
        </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default App;
