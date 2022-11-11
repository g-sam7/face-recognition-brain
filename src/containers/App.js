import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';

function App() {
  return (
    <div className="App">
      <ErrorBoundry>
        <Navigation />
        <Logo />
        <ImageLinkForm />
        {/* <FaceRecognition /> */}
      </ErrorBoundry>
    </div>
  );
}

export default App;
