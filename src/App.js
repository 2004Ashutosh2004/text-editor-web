import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar'
import Textform from './Component/Textform';
import { BrowserRouter,Route } from 'react-router-dom';
// import Form2 from './Component/form2';
// import Form from './Component/form';
// import Form1 from './Component/form1';
function App() {
  
    setInterval(()=>{
      document.title='Text Editor is Amazing Mode';
    },2000);
    setInterval(()=>{
      document.title='Install Text Editor Now';
    },1500);
  
  
  return (
    <>
    <BrowserRouter>
      <Navbar title="Ashutosh_Profile"/>
      <div className="container-fluid Ashutosh mt-0 darkmode-toggle" id='darkmode-toggle-button'>
      
          <Route exact path="/about" component={About}></Route>
          <Route path="/">
            <Textform heading="Enter the Text to Analyze"/>
            
          </Route>
        

      </div>
      </BrowserRouter>
      {/* <Form/> */}
      {/* <Form1/> */}
      {/* <Form2/> */}
          </>
        );
      }


export default App

