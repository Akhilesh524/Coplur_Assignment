import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import StudentsTable from './StudentsTable';
import Result from './Result';
import Greating from './Greating';
import Parent from './Parent';
import EmployeeForm from './EmployeeForm';

const marksList = [{ name: "Akhilesh", math: 99, chemistry:90, physics: 88,}, 
  { name: "Anubhav" , math: 99,chemistry:85, physics:87 , }, 
  { name: "Nitin", math: 96, chemistry:70, physics: 80,  }, 
  { name: "Abhi", math: 90, chemistry:78, physics:45 ,  }, 
  { name: "Ahim", math: 80, chemistry:90, physics:89 , }, 
  { name: "sohel", math: 30, chemistry: 78, physics: 90,  }, 
  { name: "john", math: 50, chemistry:79, physics:37 , }, 
  { name: "Rohit", math: 40, chemistry:34, physics: 45,  }, 
  { name: "Akhil", math: 60, chemistry:76, physics: 65,  },
  { name: "Shiva", math: 35, chemistry:78, physics:78 ,  }];
const result = <Result isResult={true} />;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          {/* Home route: Header + all content */}
          <Route path="/" element={
            <>
              <Header />
              <div className="container">
                <Parent />
                <StudentsTable marksList={marksList} result={result} />
              </div>
              <Footer />
            </>
          } />

          {/* Employee Form route */}
          <Route path="/form" element={<EmployeeForm />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
