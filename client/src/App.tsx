import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch(__API_PATH__)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <h1 className="text-xl font-bold ">home page</h1>
    </>
  );
}

export default App;
