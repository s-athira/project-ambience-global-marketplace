import "./App.scss";
import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";

function App() {
  return (
    <div>
      {/* <BrowserRouter> */}
      <Header />
      <Landing />
      {/* <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes> */}
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
