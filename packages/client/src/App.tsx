import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Hi");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((res) => setMessage(res.message));
  }, []);

  return <h1>{message}</h1>;
}

export default App;
