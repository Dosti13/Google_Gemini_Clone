import React, { useState } from "react";
import Sidebar from "./Compnent/sidebar";
import Mainpage from "./Compnent/Mainpage";
import Header from "./Compnent/Header";


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={() => setIsSidebarOpen((prev) => !prev)} />
        <Mainpage />
      </div>
    </div>
  );
}

export default App;
