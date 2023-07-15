import './App.css';
import Navbar from './Components/navbar'
import TextArea from './Components/textarea';
function App() {
  return (
    <>

      <div className="App">
        <Navbar title="Home" />
      </div>
      {/* <TextArea heading="Enter a char" /> */}
      <div className="text-center">

        <TextArea heading="Convert lower case into uppercase" />
      </div>
    </>
  );
}

export default App;
