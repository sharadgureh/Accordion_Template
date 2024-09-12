import './App.css'
import {data} from "./Data"
import Accordion from './Components/Accordion'
function App() {
  return (
    <main>
<h2>Accordion Project</h2>
<p>frequently asked Question</p>
<menu>
  {data.map((item)=> <Accordion key={item.id} {...item}/>)}
</menu>
    </main>
  )
}

export default App