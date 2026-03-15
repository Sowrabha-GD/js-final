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
import LearnSubPage, {/* FoundationsPage, PathsPage, PlaybooksPage, SessionsPage, LiveCohortsPage  */} from "./pages/LearnSubPages";
import AdvisoryPage from "./pages/AdvisoryPage";
import AdvisoryDetailPage from "./pages/AdvisoryDetailPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";
import BookConsultation from "@/pages/BookConsultation";
import CohortDetail from "./pages/CohortDetail";
import Register from "./pages/Register";
import CohortInquiry from "./pages/cohortInquiry";

import ConsultantRoadMap from "./pages/ConsultantRoadMap";
import TechnicalArchitectRoadMap from "./pages/TechnicalArchitectRoadMap";
import SolutionARchitectRoadMap from "./pages/SolutionARchitectRoadMap";
import DeveloperRoadMap from "./pages/DeveloperRoadMap";
import CAreerOverviewPage from "./pages/CareerOverviewPage";
import ExpertisePage from "./pages/ExpertisePage";
import AutomotivePage from "./pages/automotive";
import EducationPage from "./pages/education";
import FinancialServicesPage from "./pages/financial-services";
import HealthcarePage from "./pages/healthcare";
import ManufacturingPage from "./pages/manufacturing";
import TravelHospitalityPage from "./pages/travel-hospitality";
import IndustriesPage from "./pages/industries";
import ExperienceCloudPage from "./pages/experience";
import MarketingCloudPage from "./pages/marketing";
import QuoteToCashPage from "./pages/quote-to-cash";
import SalesSolutionsPage from "./pages/sales";
import ServiceSolutionsPage from "./pages/service";
import SecurityPage from "./pages/SecurityPage";
import ApexPatternsPage from "./pages/ApexDesignPatternsPage";  
import IntegrationPage from "./pages/IntegrationArchitecturePage";  
import LargeDataVolumesPage from "./pages/LargeDataVolumesPage";
import OrgRestructuringPage from "./pages/OrgRestructuringPage"; 
import AgentforcePage from "./pages/AgentforcePage";
import AgentforceGuidePage from "./pages/AgentforceGuidePage"; 
import DubaiSalesforceArchitect from "./pages/DubaiSalesforceArchitectLandingPage";
import SalesforceAdminTraining from "./pages/SalesforceAdminTrainingLandingPage";
import SalesforceFreelanceArchitectNewYork from "./pages/SalesforceFreelanceArchitectNewYorkLandingPage";
import SalesforceContractArchitectFrankfurt from "./pages/SalesforceContractArchitectFrankfurtLandingPage";
import SalesforceTechnicalArchitectManchester from "./pages/SalesforceTechnicalArchitectManchesterLandingPage";
import SalesforceArchitektFreiberuflerBerlin from "./pages/SalesforceArchitektFreiberuflerBerlinLandingPage";
import SalesforceTechnicalArchitectMunichLandingPage from "./pages/SalesforceTechnicalArchitectMunichLandingPage";
import SalesforceContractArchitectLondon from "./pages/SalesforceContractArchitectLondonLandingPage";
import GermanySalesforceArchitect from "./pages/GermanySalesforceArchitectLandingPage";
import SalesforceFreelanceArchitectSydney from "./pages/SalesforceFreelanceArchitectSydneyLandingPage";
import SalesforceTechnicalArchitectRemoteUS from "./pages/SalesforceTechnicalArchitectRemoteUSLandingPage";
import SalesforceContractArchitectSanFrancisco from "./pages/SalesforceContractArchitectSanFranciscoLandingPage";
import SalesforceContractArchitectMelbourne from "./pages/SalesforceContractArchitectMelbourneLandingPage";
import SalesforceTechnicalArchitectBrisbane from "./pages/SalesforceTechnicalArchitectBrisbaneLandingPage";
import ServiceIntegrationTraining from "./pages/ServiceIntegrationTrainingLandingPage";
import ServiceCloudTraining from "./pages/ServiceCloudTrainingLandingPage";
import SalesCloudTraining from "./pages/SalesCloudTrainingLandingPage";
import CPQTraining from "./pages/CPQTrainingLandingPage";
import LWCTraining from "./pages/LWCTrainingLandingPage";
import ApexDevelopmentTraining from "./pages/ApexDevelopmentTrainingLandingPage";
import CloudStrategy from "./pages/CloudStrategyPage";
import DevelopmentExcellence from "./pages/DevelopmentExcellencePage";
import SecurityCompliance from "./pages/SecurityCompliancePage";
import SalesforceArchitecture from "./pages/SalesforceArchitecturePage";
import OrgRestructuringCaseStudy from "./pages/OrgRestructuringCaseStudyPage";
import SecurityCaseStudy from "./pages/SecurityCaseStudyPage";
import IntegrationArchitectureCaseStudy from "./pages/IntegrationArchitectureCaseStudyPage";
import ApexDesignPatternsCaseStudy from "./pages/ApexDesignPatternsCaseStudyPage";
import LargeDataVolumesCaseStudy from "./pages/LargeDataVolumesCaseStudyPage";
import EducationCaseStudy from "./pages/EducationCaseStudyPage";
import AutomotiveCaseStudy from "./pages/AutomotiveCaseStudyPage";
import FinancialServicesCaseStudy from "./pages/FinancialServicesCaseStudyPage";
import HealthcareCaseStudy from "./pages/HealthcareCaseStudyPage";
import ManufacturingCaseStudy from "./pages/ManufacturingCaseStudyPage";
import TravelHospitalityCaseStudy from "./pages/TravelHospitalityCaseStudyPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import AgentforceCaseStudy from "./pages/AgentforceCaseStudyPage";
import ContactFreelance from "./pages/ContactFreelancePage";
import ContactTraining from "./pages/ContactTrainingPage";
import FreeResourcesMaster from "./pages/FreeResourcesMasterPage";
import CTAStudyGuide from "./pages/CTAStudyGuideFormPage";
import LDVStrategyGuide from "./pages/LDVStrategyGuideFormPage";
import ApexPatternsGuide from "./pages/ApexPatternsGuideFormPage";
import IntegrationPatternsGuide from "./pages/IntegrationPatternsGuideFormPage";
import SecurityChecklist from "./pages/SecurityChecklistFormPage";
import ArchitectureChecklist from "./pages/ArchitectureChecklistFormPage";
import CareerRoadmaps from "./pages/CareerRoadmapsFormPage";
import AgentforceGuide from "./pages/AgentforceGuideFormPage";
import InterviewPrepKit from "./pages/InterviewPrepKitFormPage";
import ComingSoon from "./pages/ComingSoonPage";
import ComingSoonPage from "./pages/ComingSoonPage";
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
          <Route path="/learn" element={<LearnSubPage />} />

<Route path="/learn/foundations" element={<ComingSoon />} />

<Route path="/learn/paths" element={<ComingSoon />} />

<Route path="/learn/playbooks" element={<ComingSoon />} />

<Route path="/learn/sessions" element={<ComingSoon />} />

<Route path="/learn/live-cohorts" element={<ComingSoonPage />} />
          {/* <Route path="/learn/foundations" element={<FoundationsPage />} /> 
          <Route path="/learn/paths" element={<PathsPage />} />
          <Route path="/learn/playbooks" element={<PlaybooksPage />} />
          <Route path="/learn/sessions" element={<SessionsPage />} />8 */}
         
          <Route path="/advisory" element={<AdvisoryPage />} />
          <Route path="/advisory/:id" element={<AdvisoryDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book-consultation" element={<BookConsultation />} />  
          {/*<Route path="/learn/live-cohorts/:id" element={<CohortDetail />} />
          <Route path="/learn/live-cohorts/register/:id" element={<Register />} />
          <Route path="/learn/live-cohorts/inquiry/:id" element={<CohortInquiry />} />*/}
          <Route path="/careers/consultant" element={<ConsultantRoadMap />} />
          <Route path="/careers/technical-architect" element={<TechnicalArchitectRoadMap />} />
          <Route path="/careers/solution-architect" element={<SolutionARchitectRoadMap />} />
          <Route path="/careers/developer" element={<DeveloperRoadMap />} />
          <Route path="/careers" element={<CAreerOverviewPage />} />
          <Route path="/expertise" element={<ExpertisePage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/industries/automotive" element={<AutomotivePage />} />
          <Route path="/industries/education" element={<EducationPage />} />
          <Route path="/industries/financial-services" element={<FinancialServicesPage />} />
          <Route path="/industries/healthcare" element={<HealthcarePage />} />
          <Route path="/industries/manufacturing" element={<ManufacturingPage />} />
          <Route path="/industries/travel-hospitality" element={<TravelHospitalityPage />} />
          <Route path="/experience" element={<ExperienceCloudPage />} />
          <Route path="/marketing" element={<MarketingCloudPage />} />
          <Route path="/quote-to-cash" element={<QuoteToCashPage />} />
          <Route path="/sales" element={<SalesSolutionsPage />} />
          <Route path="/service" element={<ServiceSolutionsPage />} />
          <Route path="/SecurityPage" element={<SecurityPage />} />
          <Route path="/ApexDesignPatternsPage" element={<ApexPatternsPage />} />
          <Route path="/IntegrationArchitecturePage" element={<IntegrationPage />} />
          <Route path="/LargeDataVolumesPage" element={<LargeDataVolumesPage />} />
          <Route path="/OrgRestructuringPage" element={<OrgRestructuringPage />} />
          <Route path="/AgentforcePage" element={<AgentforcePage />} />
          <Route path="/AgentforceGuidePage" element={<AgentforceGuidePage />} />
          <Route path="/DubaiSalesforceArchitectLandingPage" element={<DubaiSalesforceArchitect />} />
          <Route path="/SalesforceAdminTrainingLandingPage" element={<SalesforceAdminTraining />} />
          <Route path="/SalesforceFreelanceArchitectNewYorkLandingPage" element={<SalesforceFreelanceArchitectNewYork />} />
          <Route path="/SalesforceContractArchitectFrankfurtLandingPage" element={<SalesforceContractArchitectFrankfurt />} />
          <Route path="/SalesforceTechnicalArchitectManchesterLandingPage" element={<SalesforceTechnicalArchitectManchester />} />
          <Route path="/SalesforceArchitektFreiberuflerBerlinLandingPage" element={<SalesforceArchitektFreiberuflerBerlin />} />
          <Route path="/SalesforceTechnicalArchitectMunichLandingPage" element={<SalesforceTechnicalArchitectMunichLandingPage />} />
          <Route path="/SalesforceContractArchitectLondonLandingPage" element={<SalesforceContractArchitectLondon />} />
          <Route path="/GermanySalesforceArchitectLandingPage" element={<GermanySalesforceArchitect />} />
          <Route path="/SalesforceFreelanceArchitectSydneyLandingPage" element={<SalesforceFreelanceArchitectSydney />} />
          <Route path="/SalesforceTechnicalArchitectRemoteUSLandingPage" element={<SalesforceTechnicalArchitectRemoteUS />} />
          <Route path="/SalesforceContractArchitectSanFranciscoLandingPage" element={<SalesforceContractArchitectSanFrancisco />} />
          <Route path="/SalesforceContractArchitectMelbourneLandingPage" element={<SalesforceContractArchitectMelbourne />} />
          <Route path="/SalesforceTechnicalArchitectBrisbaneLandingPage" element={<SalesforceTechnicalArchitectBrisbane />} />
          <Route path="/ServiceIntegrationTrainingLandingPage" element={<ServiceIntegrationTraining />} />
          <Route path="/ServiceCloudTrainingLandingPage" element={<ServiceCloudTraining />} />
          <Route path="/SalesCloudTrainingLandingPage" element={<SalesCloudTraining />} />
          <Route path="/CPQTrainingLandingPage" element={<CPQTraining />} />
          <Route path="/LWCTrainingLandingPage" element={<LWCTraining />} />
          <Route path="/ApexDevelopmentTrainingLandingPage" element={<ApexDevelopmentTraining />} />  
          <Route path="/CloudStrategyPage" element={<CloudStrategy />} />
          <Route path="/DevelopmentExcellencePage" element={<DevelopmentExcellence />} />
          <Route path="/SecurityCompliancePage" element={<SecurityCompliance />} />
          <Route path="/SalesforceArchitecturePage" element={<SalesforceArchitecture />} />
          <Route path="/OrgRestructuringCaseStudyPage" element={<OrgRestructuringCaseStudy />} />
          <Route path="/SecurityCaseStudyPage" element={<SecurityCaseStudy />} />
          <Route path="/IntegrationArchitectureCaseStudyPage" element={<IntegrationArchitectureCaseStudy />} />
          <Route path="/ApexDesignPatternsCaseStudyPage" element={<ApexDesignPatternsCaseStudy />} />
          <Route path="/LargeDataVolumesCaseStudyPage" element={<LargeDataVolumesCaseStudy />} />
          <Route path="/EducationCaseStudyPage" element={<EducationCaseStudy />} />
          <Route path="/AutomotiveCaseStudyPage" element={<AutomotiveCaseStudy />} />
          <Route path="/FinancialServicesCaseStudyPage" element={<FinancialServicesCaseStudy />} />
          <Route path="/HealthcareCaseStudyPage" element={<HealthcareCaseStudy />} />
          <Route path="/ManufacturingCaseStudyPage" element={<ManufacturingCaseStudy />} />
          <Route path="/TravelHospitalityCaseStudyPage" element={<TravelHospitalityCaseStudy />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/AgentforceCaseStudyPage" element={<AgentforceCaseStudy />} /> 
          <Route path="/ContactFreelancePage" element={<ContactFreelance />} />
          <Route path="/ContactTrainingPage" element={<ContactTraining />} />
          <Route path="/FreeResourcesMasterPage" element={<FreeResourcesMaster />} />
          <Route path="/CTAStudyGuideFormPage" element={<CTAStudyGuide />} />
          <Route path="/LDVStrategyGuideFormPage" element={<LDVStrategyGuide />} />
          <Route path="/ApexPatternsGuideFormPage" element={<ApexPatternsGuide />} />
          <Route path="/IntegrationPatternsGuideFormPage" element={<IntegrationPatternsGuide />} />
          <Route path="/SecurityChecklistFormPage" element={<SecurityChecklist />} />
          <Route path="/ArchitectureChecklistFormPage" element={<ArchitectureChecklist />} />
          <Route path="/CareerRoadmapsFormPage" element={<CareerRoadmaps />} />
          <Route path="/AgentforceGuideFormPage" element={<AgentforceGuide />} />
          <Route path="/InterviewPrepKitFormPage" element={<InterviewPrepKit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
