import { Component } from 'react';
import Clarifai from 'clarifai';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';
import ParticleBackground from '../components/ParticleBackground/ParticleBackground';
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Rank from '../components/Rank/Rank';
import FaceRecognition from '../components/FaceRecognition/FaceRecognition';

const app = new Clarifai.App({
  apiKey: '1b12ae636bb5460fadf4ba443da100f8'
 });
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageURL: '',
      box: {},
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height),
    }
  }

  displayFaceBox = (box) => {
    this.setState({ box });
  }

  onInputChange = (e) => {
    this.setState({ input: e.target.value })
  }

  // You can just use this as the first param instead of the model in case the api is down:
  // "53e1df302c079b3db8a0a36033ed2d15"

  onSubmit = () => {
    this.setState({ imageURL: this.state.input })
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <ErrorBoundry>
          <ParticleBackground />
          <Navigation />
          <Logo />
          <Rank />
          <ImageLinkForm
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onSubmit}
          />
          <FaceRecognition
            imageURL={this.state.imageURL}
            box={this.state.box}
          />
        </ErrorBoundry>
    </div>
    )
  }
}

export default App;
