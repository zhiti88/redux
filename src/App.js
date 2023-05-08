import { useSelector, useDispatch } from "react-redux";
import FetchButton from "./Components/fetchButton";
import ClearButton from "./Components/clearButton";
import { fetchProducts, fetchUsers } from "./Api/dummyjson/fetch";
import "./App.css";

function App() {
  const loading = useSelector((state) => state.loading);
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Redux</h1>
      <div className="App">
        <FetchButton onClick={() => fetchProducts(dispatch)}>
          CARICA PRODOTTI
        </FetchButton>
        <FetchButton onClick={() => fetchUsers(dispatch)}>
          CARICA USERS
        </FetchButton>
        <ClearButton />
        {loading && "sto caricando..."}
        {data.length === 0 && "nessun dato caricato"}
        {data.map((item) => (
          <div key={`item${item.id}`}>
            <hr />
            <span>
              <span> {item.firstName ? "firstname" : "title"}:</span>
              <span>{item.firstName || item.title}</span>
            </span>
            <span>****</span>
            <span>
              <span> {item.lastName ? "lastname" : "price"}:</span>
              <span>{item.lastName || item.price}</span>
            </span>
          </div>
        ))}
        <br />
      </div>
    </>
  );
}

export default App;
