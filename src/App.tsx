import './App.css';
import Courses from './components/courses';
import Header from './components/header';
import TopBar from './components/topBar';

const App = () => (
  <div className="font-plusJakartaSans">
    <TopBar />
    <Header />
    <Courses />
  </div>
);

export default App;
