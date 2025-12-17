import { useState } from "react";
import AppContainer from "./components/AppContainer";
import Content from "./components/Content";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import CreateContextProvider from "./store/post-list-store";

function App() {
  return (
    <>
      <CreateContextProvider>
        <AppContainer>
          <NavBar />
          <div className="flex min-h-screen mt-14 ms-44 ">
            <Sidebar />
            <main className="flex-1 p-4">
              <Content />
            </main>
          </div>
          <Footer />
        </AppContainer>
      </CreateContextProvider>
    </>
  );
}

export default App;
