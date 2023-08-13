import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Overview from './Body/Overview/overview';
import SalesAnalytics from './Body/SalesAnalytics/SalesAnalytics';
import Audience from './Body/AudienceDemographics/Audience';
import Engagement from './Body/Engagement/Engagement';
import Orders from './Body/Orders/orders';
import Sidebar from './Sidebar/Sidebar';
import style from './App.module.css';

const App=()=>{
    return (
        <div className={style.App}>
            <Router>
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Layout><Overview /></Layout>} />
                    <Route path="/sales" element={<Layout><SalesAnalytics /></Layout>} />
                    <Route path="/audience" element={<Layout><Audience /></Layout>} />
                    <Route path="/engagement" element={<Layout><Engagement /></Layout>} />
                    <Route path="/orders" element={<Layout><Orders /></Layout>} />
                    <Route path="*" element={<h1> Page not found </h1>} />
                </Routes>
            </Router>
        </div>
    )
}
export default App;