import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar"; // Use the navbar layout
import Index from "./pages/Index.jsx";
import FlightSearch from "./pages/FlightSearch.jsx";
import BookingConfirmation from "./pages/BookingConfirmation.jsx";
const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Destinations",
    to: "/destinations",
  },
  {
    title: "Bookings",
    to: "/bookings",
  },
  {
    title: "Contact Us",
    to: "/contact",
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="/flight-search" element={<FlightSearch />} />
              <Route path="/booking-confirmation" element={<BookingConfirmation />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;