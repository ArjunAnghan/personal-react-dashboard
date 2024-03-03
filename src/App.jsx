// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserProfilePage from './pages/UserProfilePage';
import ToDoListPage from './pages/ToDoListPage';
import { TaskProvider } from './contexts/TaskContext'
import Header from './components/Header';
import WeatherPage from './pages/WeatherPage';

const App = () => {
  return (
    <div className='bg-[#2D3250] h-screen w-screen'>
      <Router basename='/'>
        <TaskProvider>
        <Header/>
        <Routes>
          <Route path="/" element={<UserProfilePage/>} exact />
          <Route path="/todo" element={<ToDoListPage/>} />
          <Route path="/weather" element={<WeatherPage/>} />
        </Routes>
        </TaskProvider>
      </Router>
    </div>
    
  );
};

export default App;
