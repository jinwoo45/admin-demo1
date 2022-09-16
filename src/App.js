import './App.css';
import Login from './pages/Login';
import Member from './pages/member/Member';
import Community from './pages/community/Community';
import { Routes, Route} from "react-router-dom";
import Navbar from './components/Sidebar';
import Club from './pages/club/Club';
import Admin from './pages/admin/Admin';
import Payment from './pages/payment/Payment';


function App() {

  return (
    <div>
          
      <Routes>
          <Route element={<Navbar/>}>
          <Route path="/" element={<Member/>} />
          <Route path="/member" element={<Member />} />
          <Route path="/community" element={<Community />} />
          <Route path="/club" element={<Club />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/nft" element={<Member />} />
          <Route path="/question" element={<Member />} />
          </Route>
          
          {/* 내비바 숨기고 싶은 페이지 */}
          <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
