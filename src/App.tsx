import { Table } from './components/Table/Table';
import { useUserData } from './hooks/useUserData';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Form } from './components/Form/Form';
import { Home } from './components/Home/Home';

function App() {
  const data = useUserData().data;

  return (

    <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/form' element={<Form />} />
          <Route path='/users' element={<Table users={data} />} />
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App
