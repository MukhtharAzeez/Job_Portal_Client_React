import './App.css'
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import User from "./Routes/User";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
            <Routes>
              <Route path="/*" element={<User />} />
            </Routes>
            {/* <Routes>
              <Route path="/admin/*" element={<Admin />} />
            </Routes> */}
      </Router>
    </ThemeProvider>
  )
}

export default App
