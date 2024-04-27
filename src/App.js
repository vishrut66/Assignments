import Box from './component/Box';
import Filter from './component/Filter';
import { useState, useEffect } from 'react';
import Assignments from "./data-Assignment";
import Materials from './data-Materials';
import './App.css';



function App() {

  const [assignments, setAssignments] = useState([]);
  const [materials, setMaterials] = useState([]);

  const [subject, setSubject] = useState("AI")


  // Filter assignments based on subject
  function filterDataBySubject(subject) {
    const Ass = Assignments.filter(assignment => assignment.subject === subject);
    setAssignments(Ass);

    const material = Materials.filter(assignment => assignment.subject === subject);
    setMaterials(material)
  }

  const handleChange = (e) => {
    setSubject(e.target.value)
  }

  useEffect(() => {
    filterDataBySubject(subject);
  }, [subject]);

  return (
    <div className="App">
      <div className="title">IT - 6 Sem</div>
      <Filter onChange={handleChange} />
      <Box assignments={assignments} materials={materials} />
    </div>
  );
}

export default App;
