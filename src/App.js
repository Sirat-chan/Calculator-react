import './App.css';
import {
  useRef,
    useState
} from "react";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  const plus = (e) =>{
    e.preventDefault();
    setResult((result) => result + Number (inputRef.current.value));
  };
  const minus =(e) => {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };
  const times =(e) => {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };
  const divide =(e) => {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };
  const resetInput =(e) =>{
    e.preventDefault();
    inputRef.current.value = 0;
  };
  const resetResult =(e) =>{
    e.preventDefault();
    setResult((prevVal) => prevVal *0);
  };
  return (
    <div className="App">
    <div>
      <h1 className="font-serif text-3xl">Simplest Working Calculator</h1>
    </div>
      <form>
        <div class="flex-nowrap">
        <p ref={resultRef}>{result}</p>
        <input
        pattern="[0-9]"
        ref={inputRef}
        class="placeholder-gray-500 border h-10 w-64  mt-6"
        type="number"
        placeholder="Type a number"
        />
        </div>
        <div>
        <button className="bg-transparent hover:bg-green-500
                text-green-500 font-semibold hover:text-white py-2 px-4 border border-green-500
                hover:border-transparent rounded mt-6 mr-4" onClick={plus}>add</button>
        <button className="bg-transparent hover:bg-green-500
                text-green-500 font-semibold hover:text-white py-2 px-4 border border-green-500
                hover:border-transparent rounded mr-4" onClick={minus}>substract</button>
        <button className="bg-transparent hover:bg-green-500
                text-green-500 font-semibold hover:text-white py-2 px-4 border border-green-500
                hover:border-transparent rounded mr-4" onClick={times}>multiply</button>
        <button className="bg-transparent hover:bg-green-500
                text-green-500 font-semibold hover:text-white py-2 px-4 border border-green-500
                hover:border-transparent rounded mr-4" onClick={divide}>divide</button>
        <button className="bg-transparent hover:bg-red-500
                text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500
                hover:border-transparent rounded mr-4" onClick={resetInput}>reset input</button>
        <button className="bg-transparent hover:bg-red-500
                text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500
                hover:border-transparent rounded mr-4" onClick={resetResult}>reset result</button>
        </div>
      </form>
    </div>
  );
}

export default App;
