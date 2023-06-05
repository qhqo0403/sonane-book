import { useState } from "react";
import Landing from "../components/Landing";
import HomeContent from "../components/HomeContent";

const Homepage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return <>{!isLoggedIn ? <Landing /> : <HomeContent />}</>;

export default Homepage;
