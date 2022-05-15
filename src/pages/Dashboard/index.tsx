import AnimatedPage from "../../components/AnimatedPage";
import { Link } from "react-router-dom";

const Dashboard = () => (
  <AnimatedPage>
    <h1>homepage</h1>

    <Link to="/">voltar</Link>
  </AnimatedPage>
);

export default Dashboard;
