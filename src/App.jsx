import DropDown from "./component/DropDown"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <DropDown />
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;