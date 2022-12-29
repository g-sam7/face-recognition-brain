import { Component } from 'react';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';
import ParticleBackground from '../components/ParticleBackground/ParticleBackground';
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import UploadCount from '../components/UploadCount/UploadCount';
import FaceRecognition from '../components/FaceRecognition/FaceRecognition';
import SignIn from '../components/SignIn/SignIn';
import Register from '../components/Register/Register';

const initialState = {
  input: '',
  imageURL: '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: '',
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {initialState}
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined,
    }});
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if ( route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route })
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    console.log(clarifaiFace)
    const image = document.getElementById('inputImage');
    console.log(image)
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

  onImageUpload = () => {
    this.setState({ imageURL: this.state.input });
      fetch('http://localhost:3000/imageurl', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          input: this.state.input
        })
      })
      .then(response => response.json())
      .then((response) => {
        if (response) {
          fetch('http://localhost:3000/image', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id,
            })
          })
          .then(response => response.json())
          .then(count => {
            this.setState(Object.assign(this.state.user, { entries: count }))
          })
          .catch(console.log)
        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch((error) => console.log(error));
  }

  render() {
    const {
      isSignedIn,
      imageURL,
      box,
      route,
      user,
    } = this.state;
    const HomePage = (
      <div>
        <Logo />
        <UploadCount
          name={user?.name}
          entries={user?.entries}
        />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onImageUpload}
        />
        <FaceRecognition
          imageURL={imageURL}
          box={box}
        />
      </div>
    )
    let applicationDisplay;
    switch (route) {
      case 'signin':
        applicationDisplay = (
          <SignIn onRouteChange={this.onRouteChange} />
        );
        break;
      case 'register':
        applicationDisplay = (
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        );
        break;
      case 'home':
        applicationDisplay = HomePage;
        break;
      default:
        applicationDisplay = (
          <SignIn
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        );
    }
    return (
      <div className="App">
        <ErrorBoundry>
          <ParticleBackground />
          <Navigation
            onRouteChange={this.onRouteChange}
            isSignedIn={isSignedIn}
          />
          {applicationDisplay}
        </ErrorBoundry>
    </div>
    )
  }
}

export default App;
