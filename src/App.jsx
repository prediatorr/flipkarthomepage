import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { useReducer } from "react";

function App() {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "SEARCH":
        return { ...state, filter: action.payload };
      default: 
        return state;
    }
  }, {filter:""});

  return (
    <div className="relative">
      <Header state={state} dispatch={dispatch}/>
      <Body state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
