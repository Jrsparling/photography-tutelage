import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Account from "./pages/Account";
import Discussion from "./pages/Discussion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Box } from "@chakra-ui/react";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Box bg={'teal'} minH={'100vh'}>
        <Navbar />
        <Footer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/account" element={<Account />} />
          <Route path="/discussion" element={<Discussion />} />
        </Routes>
      </Box>
    </ApolloProvider>
  );
}

export default App;
