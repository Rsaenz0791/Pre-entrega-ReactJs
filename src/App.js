import './App.css';
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greetings="En Construccion" />
    </>
  )
}

export default App;
