import { Component } from 'react';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';
import ParticleBackground from '../components/ParticleBackground/ParticleBackground';
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Rank from '../components/Rank/Rank';
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onSubmit = () => {
    console.log('click');
  }
  render() {
    return (
      <div className="App">
        <ErrorBoundry>
          <ParticleBackground />
          <Navigation />
          <Logo />
          <Rank />
          <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onSubmit} />
          {/* <FaceRecognition /> */}
        </ErrorBoundry>
    </div>
    )
  }
}

export default App;
