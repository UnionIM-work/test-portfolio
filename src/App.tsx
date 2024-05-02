import Header from "@/components/Header";
import Home from "@/pages/Home";
import "./app.css";

function App() {
  return (
    <div>
      <Header />
      <main className={"max-w-[900px] mx-auto p-5"}>
        <Home />
      </main>
    </div>
  );
}

export default App;
