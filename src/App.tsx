import {BrowserRouter as Router ,Routes, Route} from "react-router-dom";
import { lazy,Suspense } from "react";
import Loader from "./components/loader";

// This helps in reducing the initial load time of the application
// by splitting the code into smaller chunks
// Components load only when needed, improving performance and user experience. 


const Home = lazy(() => import("./pages/home"));
const Search = lazy(() => import("./pages/search"));
const Cart = lazy(() => import("./pages/cart"));

const App = () => {
  return (
    <Router>
      {/* header */}
      <Suspense fallback={<Loader />}>
        <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />

        </Routes>
      </Suspense>
      {/* footer */}
    </Router>
  )
}

export default App
