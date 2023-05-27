import React from 'react'
// import Todo from './todos/Todo'
// import TodoForm from './todos/TodoForm'
import Header from './components/semantic/Header';
import Footer from './components/semantic/Footer';
import Backlog from './components/Backlog'
import Ready from './components/Ready';
import Progress from './components/Progress';
import Finished from './components/Finished'

function App() {
  localStorage.setItem('app', App)
  return (
    <div className='kanban'>
      <Header />
      <main>
        <div className='container-div'>
        <Backlog />
        <Ready />
        </div>
        <div className='container-div'>
        <Progress />
        <Finished />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;