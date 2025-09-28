import { useEffect, useState } from 'react';
import { Button } from './components/ui/button';

function App() {
   const [message, setMessage] = useState('Hi');

   useEffect(() => {
      fetch('/api/hello')
         .then((res) => res.json())
         .then((res) => setMessage(res.message));
   }, []);

   return (
      <div className="p-4">
         <p className="font-bold  bg-amber-200">{message}</p>
         <Button>Click Me</Button>
      </div>
   );
}

export default App;
