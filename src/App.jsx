import Header from './Component/header.jsx'
import './App.css'
import {Routes, Route } from 'react-router-dom'
import Dashboard from "./Page/dashboard.jsx";
import ToDo from "./Page/to-do.jsx";
import MealPlanner from "./Page/meal-planner.jsx";
import Focus from "./Page/focus.jsx";
import Project from "./Page/project.jsx";
function App() {
  return (
  <>
    <Header/>
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/todo" element={<ToDo/>} />
      <Route path="/projects" element={<Project/>} />
      <Route path="/mealplanner" element={<MealPlanner/>} />
      <Route path="/focus" element={<Focus/>} />
    </Routes>
  </>
  )
}

export default App
