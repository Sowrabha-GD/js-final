import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import InsightsPage from "./pages/InsightsPage";
import InsightDetailPage from "./pages/InsightDetailPage";
import VideosPage from "./pages/VideosPage";
import VideoDetailPage from "./pages/VideoDetailPage";
import LearnPage from "./pages/LearnPage";
import { FoundationsPage, PathsPage, PlaybooksPage, SessionsPage, LiveCohortsPage } from "./pages/LearnSubPages";
import AdvisoryPage from "./pages/AdvisoryPage";
import AdvisoryDetailPage from "./pages/AdvisoryDetailPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";
import BookConsultation from "@/pages/BookConsultation";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/:slug" element={<InsightDetailPage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/videos/:slug" element={<VideoDetailPage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/learn/foundations" element={<FoundationsPage />} />
          <Route path="/learn/paths" element={<PathsPage />} />
          <Route path="/learn/playbooks" element={<PlaybooksPage />} />
          <Route path="/learn/sessions" element={<SessionsPage />} />
          <Route path="/learn/live-cohorts" element={<LiveCohortsPage />} />
          <Route path="/advisory" element={<AdvisoryPage />} />
          <Route path="/advisory/:id" element={<AdvisoryDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book-consultation" element={<BookConsultation />} />                                  
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
