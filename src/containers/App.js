import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';
import ParticleBackground from '../components/ParticleBackground/ParticleBackground';
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Rank from '../components/Rank/Rank';

function App() {
  return (
    <div className="App">
      <ErrorBoundry>
        <ParticleBackground />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/* <FaceRecognition /> */}
      </ErrorBoundry>
    </div>
  );
}

export default App;
