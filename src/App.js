import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Users from './Users';
import UserCreate from "./UserCreate";
import UserEdit from "./UserEdit";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Users />}/>
        <Route path="create" element={<UserCreate />}/>
        <Route path="edit/:id" element={<UserEdit />}/>
      </Routes>
    </div>
  );
}

export default App;
