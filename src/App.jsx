import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";

function AppContent() {
  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-[#0F2A3F] transition-colors duration-300">
      {/* Sticky header */}
      <Header />

      {/* Main content */}
      <main className="w-full">
        <AppRoutes />
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
