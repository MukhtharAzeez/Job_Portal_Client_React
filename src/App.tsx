import './App.css'
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import User from "./Routes/User";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { allUsersIdStore, messageStore, useProgressStore } from './zustand';
import { io } from 'socket.io-client';
import Admin from './Routes/Admin';
import CompanyRoutes from './Routes/Company';
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const setSocket = messageStore((state) => state.setSocket);
  const setOnlineUsers = messageStore((state) => state.setOnlineUsers);
  const socket = messageStore((state) => state.socket);
  const id = allUsersIdStore((state) => state.id)
  const setIsAnimating = useProgressStore((state) => state.setIsAnimating);
  const isAnimating = useProgressStore((state) => state.isAnimating);
  useEffect(() => {
    const socket = io("http://messagesocket.labonnz.club");
    setSocket(socket)
  }, [])
  useEffect(() => {
    if (socket && id) {
      socket.emit("new-user-add", id);
    }
  }, [socket])

  useEffect(() => {
    if (socket && id) {
      socket.on("get-user", (users: any) => {
        setOnlineUsers(users);
      });
    }
  }, [id, socket]);

  useEffect(() => {
    // const handleStart = () => {
    //   setIsAnimating(true)
    // }
    // const handleStop = () => {
    //   setIsAnimating(false)
    // }
    // router.events.on('routeChangeStart', handleStart)
    // router.events.on('routeChangeComplete', handleStop)
    // router.events.on('routeChangeError', handleStop)
    return () => {
      // router.events.off('routeChangeStart', handleStart)
      // router.events.off('routeChangeComplete', handleStop)
      // router.events.off('routeChangeError', handleStop)
    }

  }, [])
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Routes>
          <Route path="/admin/*" element={<Admin />} />
        </Routes>
        <Routes>
          <Route path="/company/*" element={<CompanyRoutes />} />
        </Routes>
        <Routes>
          <Route path="/*" element={<User />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
