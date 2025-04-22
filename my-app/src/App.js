
import Header from './Header';
import Footer from './Footer';
import StudentsTable from './StudentsTable';
const marksList = [ { name: "Akhilesh", math: 99, chemistry:90, physics: 88,}, 
  { name: "Anubhav" , math: 99,chemistry:85, physics:87 , }, 
  { name: "Nitin", math: 96, chemistry:70, physics: 80,  }, 
  { name: "Abhi", math: 90, chemistry:78, physics:45 ,  }, 
  { name: "Ahim", math: 80, chemistry:90, physics:89 , }, 
  { name: "sohel", math: 30, chemistry: 78, physics: 90,  }, 
  { name: "john", math: 50, chemistry:79, physics:37 , }, 
  { name: "Rohit", math: 40, chemistry:34, physics: 45,  }, 
  { name: "Akhil", math: 60, chemistry:76, physics: 65,  },
  { name: "Shiva", math: 35, chemistry:78, physics:78 ,  } ]
 
function App() {

  return (
    <div className="App">
    <Header/>
    <div className="container">
   <StudentsTable marksList = {marksList}/>
    </div>
    <Footer/>
  </div>
  );
}

export default App;