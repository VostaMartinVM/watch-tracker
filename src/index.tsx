import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import LoginCreateAccountPage from "./routes/LoginCreateAccountPage";
import Upcoming from "./routes/Upcoming";
import Watchlist from "./routes/Watchlist";
import Explore from "./routes/Explore";
import MyShows from "./routes/MyShows";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/Upcoming" element={<Upcoming />} />
          <Route path="/Watchlist" element={<Watchlist />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/MyShows" element={<MyShows />} />
        </Route>
        <Route
          path="/LoginCreateAccountPage"
          element={<LoginCreateAccountPage />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
