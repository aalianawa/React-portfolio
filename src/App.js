
import './App.css';

import Dashboard from './components/dashboard/Dashboard';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

import Card from './components/Card/Card';
import CardSection from './components/CardSection/CardSection';
import CardPart from './components/CardParts/CardPart';
import Sixcard from './components/SixCard/Sixcard';
import SevenCard from './components/SevenCard/SevenCard';
import EightCard from './components/EightCard/EightCard';


function App() {
  return <>

  <Header />
 
  <Dashboard />
  <Card />
  <CardSection />
  <CardPart />
  <Sixcard />
  <SevenCard />
  <EightCard/>
  <Footer />
  </>;
 
  
}

export default App;
