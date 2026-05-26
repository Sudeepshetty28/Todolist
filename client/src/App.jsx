import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './User';
import CreateUser from './CreateUser';
import Updateuser from './UpdateUser';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<User />} />
          <Route path='/create' element={<CreateUser />} />
          <Route path='/update/:id' element={<Updateuser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
