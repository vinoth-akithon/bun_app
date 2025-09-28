import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Hi");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((res) => setMessage(res.message));
  }, []);

  return <p className="font-bold p-4 bg-amber-200">{message}</p>;
}

export default App;
