import sprLogo from './assets/spr.png';

function App() {
  return (
    <div className="flex flex-col items-center">
      <img src={sprLogo} className="animate-logo-spin w-40 p-10 m-10" alt="spr logo" />
      <h1 className="font-bold">Vite + TypeScript React</h1>
      <h2 className="font-light text-sm italic">now with eslint and tailwind</h2>
    </div>
  );
}

export default App;
