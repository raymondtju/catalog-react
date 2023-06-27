import { Route, Routes } from "react-router";
import MainPage from "./pages";
import AboutPage from "./pages/about";
import GuestBookPage from "./pages/guestbook";
import Layout from "./components/layout";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/guest-book" element={<GuestBookPage />} />
        </Route>
      </Routes>
    </>
  );
}
