import Index from "./pages/Index/Index";
import Articles from "./pages/Articles/Articles";
import BmiCalculator from "./pages/BmiCalculator/BmiCalculator";
import BmrCalculator from "./pages/BmrCalculator/BmrCalculator";
import WaterCalculator from "./pages/WaterCalculator/WaterCalculator";
import ArticleInfo from "./pages/ArticleInfo/ArticleInfo";
import AboutUs from "./pages/AboutUs/AboutUs";

const routes = [
  { path: "/", element: <Index /> },
  { path: "/articles", element: <Articles /> },
  { path: "/bmi", element: <BmiCalculator /> },
  { path: "/bmr", element: <BmrCalculator /> },
  { path: "/water", element: <WaterCalculator /> },
  { path: "/articles/:articleInfo", element: <ArticleInfo /> },
  { path: "/about-us", element: <AboutUs /> },
];

export default routes;
