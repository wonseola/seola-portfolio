import { Routes, Route } from "react-router-dom";
import App from "./App";
import ProjectDetail from "./components/ProjectDetail";
import NotFound from "./components/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
