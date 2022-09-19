import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Add from "./pages/Add";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";
import Error from "./pages/Error";

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<SignIn />} />
          <Route path="/add" element={<Add />} />
          <Route path="/book/:id" element={<Detail />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
