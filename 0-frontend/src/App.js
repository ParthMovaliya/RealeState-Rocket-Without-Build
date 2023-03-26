import { BrowserRouter as Router } from "react-router-dom"
import React from 'react'
import { useSelector } from "react-redux";

import "./App.css"
import Header from "./Components/Header/Header"
import Loading from "./Components/Loading/Loading";
import AnimateRoutes from "./AnimateRoutes";
import { ConfigProvider } from "antd";

const App = () => {
  const { loading } = useSelector(state => state.sends)

  return (
    <div>
      < ConfigProvider
        theme={{
          token: {
            colorPrimary: 'red',
          },
        }}
      >
        <Router>
          <Header>
            {loading ? <Loading /> :
              <AnimateRoutes />
            }
          </Header>
        </Router>
      </ConfigProvider>
    </div>
  )
}

export default App