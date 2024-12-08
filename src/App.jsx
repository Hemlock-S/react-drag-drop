import './App.css'
import DropFileInput from './components/drop-file-input/DropFileInput';

function App() {

  return (
    <div className='box'>
     <h2 className="header">
      React drop files
     </h2>
     <DropFileInput onFileChange={(files) => onFileChange(files)}/>
    </div>
  )
}

export default App
