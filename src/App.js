import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import { Feed, Header, SearchResult, VideoDetails } from "./components";
import { AppContext } from "./context/context";

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <Box sx={{  }}>
          <Header />
          <Routes>
            <Route exact path="/" element={<Feed />} />
            <Route path="/searchResult/:searchQuery" element={<SearchResult />} />
            <Route path="/video/:id" element={<VideoDetails />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
