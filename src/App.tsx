import { Route, Routes } from "react-router-dom";
import "./api/axiosDefaults";
import Homepage from "./pages/Homepage";
import RegisterForm from "./pages/auth/RegisterForm";
import LoginForm from "./pages/auth/LoginForm";
import SchoolListFeed from "./pages/schools/SchoolListFeed";
import AddReviewForm from "./pages/schools/AddReviewForm";
import SchoolDetail from "./pages/schools/SchoolDetail";
import ThreadFeed from "./pages/discussion/ThreadFeed";
import AddNewThreadForm from "./pages/discussion/AddNewThreadForm";
import ThreadDetail from "./pages/discussion/ThreadDetail";
import AddCommentForm from "./pages/discussion/AddCommentForm";
import PrelovedFeed from "./pages/preloved/PrelovedFeed";
import AddItemForm from "./pages/preloved/AddItemForm";
import ItemDetail from "./pages/preloved/ItemDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/schools" element={<SchoolListFeed />} />
        <Route path="/schools/addreview" element={<AddReviewForm />} />
        <Route path="/schools/schooldetail" element={<SchoolDetail />} />
        <Route path="/threads" element={<ThreadFeed />} />
        <Route path="/threads/create" element={<AddNewThreadForm />} />
        <Route path="/threads/threaddetail" element={<ThreadDetail />} />
        <Route
          path="/threads/threaddetail/comment"
          element={<AddCommentForm />}
        />
        <Route path="/preloved" element={<PrelovedFeed />} />
        <Route path="/preloved/create" element={<AddItemForm />} />
        <Route path="/preloved/itemdetail" element={<ItemDetail />} />
      </Routes>
    </>
  );
}

export default App;
