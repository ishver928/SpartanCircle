import { useState } from "react";
import Landing from "./pages/landing";
import Basics from "./pages/basics";
import Academics from "./pages/academics";
import Interests from "./pages/interests";

function App() {
  const [page, setPage] = useState("landing");

  if (page === "landing") {
    return <Landing setPage={setPage} />;
  }

  if (page === "basic") {
    return <Basics setPage={setPage} />;
  }

  if (page === "academics") {
    return <Academics setPage={setPage} />;
  }

  if (page === "interests") {
    return <Interests setPage={setPage} />;
  }

  return null;
}

export default App;