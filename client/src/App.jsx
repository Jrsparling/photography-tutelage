import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="bg-teal-700 min-h-screen">
        <Navbar />
        <Footer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </ApolloProvider>
  );
}

export default App;
