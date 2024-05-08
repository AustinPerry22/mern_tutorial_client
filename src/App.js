import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Public from "./Components/Public";
import Login from './Components/Login'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route index element={<Login />} />

    </Routes> 
  );
}

export default App;
