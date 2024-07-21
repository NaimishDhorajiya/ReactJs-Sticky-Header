import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="text-center">
        <Home />
      </div>
      <Footer />
    </Provider>
  );
}

export default App;
