import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Question1 from './question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Question4 from './Question4';




function App() {
  return (
    <div>
      <Routes>
        <Route path="/question1" element={<Question1 />} /> {/* Новый URL */}
        <Route path="/question2" element={<Question2 />} /> {/* Новый URL */}
        <Route path="/question3" element={<Question3 />} /> {/* Новый URL */}
        <Route path="/question4" element={<Question4 />} /> {/* Новый URL */}
      </Routes>
    </div>
  );
}

export default App;
