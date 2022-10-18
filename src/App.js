import { Navbar } from './components/Navbar';
import { Portfolio } from './components/Portfolio';
import { Profile } from './components/Profile';

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <Profile />
        <Portfolio />
      </div>
    </>
  );
}

export default App;
