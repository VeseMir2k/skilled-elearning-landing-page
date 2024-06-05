import './App.css';
import Courses from './components/courses';
import Footer from './components/footer';
import Header from './components/header';
import TopBar from './components/topBar';

const App = () => (
  <div className="font-plusJakartaSans overflow-hidden">
    <TopBar />
    <Header />
    <Courses />
    <Footer />
  </div>
);

export default App;
