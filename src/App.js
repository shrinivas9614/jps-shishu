import Student from "./componants/Student";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLogin from "./componants/Admin/AdminLogin";
function App() {
  return (
    <div className="App">
          <Student />
      <BrowserRouter>
        <Routes>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
