import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';

import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import './App.css';


const app = new Clarifai.App({
  apiKey: 'a2dff173ba794df394bdbdf2372b94d4'
});

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageURL: '',
      box: {},
      route: 'signin',
      isSignedIn: false
    }
  }

calculateFaceLocation = (data) => {
  const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
  const image = document.getElementById('inputimage');
  const width = Number(image.width);
  const height = Number(image.height);
  return {
    leftCol: clarifaiFace.left_col * width,
    topRow: clarifaiFace.top_row * height,
    rightCol: width - (clarifaiFace.right_col * width),
    bottomRow: height - (clarifaiFace.bottom_row * height)
  };
}

displayFaceBox = (box) => {
  this.setState({box: box});
}

onInputChange = (event) => {
  console.log(this.state.input);
  this.setState({input: event.target.value});
}

clearForm = () => {
  document.getElementById('imageUrlInput').value = '';
  this.setState({input: ''});
}

onSubmit = () => {
  this.setState({imageURL: this.state.input});
  app.models.predict(
  Clarifai.FACE_DETECT_MODEL,
  this.state.input)
  .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
  .catch(err => console.log(err));
}

onRouteChange = (route) => {
  if (route === 'signout') {
    this.setState({isSignedIn: false})
  } else if (route === 'home') {
    this.setState({isSignedIn: true})
  }
  this.setState({route: route});
}

  render() {
    const { isSignedIn, imageURL, box, route } = this.state;
    return (
      <div className="App">
        <Particles className='particles'
        params={particlesOptions}/>
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        <Logo />
        { route === 'home'
        ?
        <div>
          <Rank />
          <ImageLinkForm
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
          clearForm={this.clearForm}/>
          <FaceRecognition
          box={box}
          imageURL={imageURL}/>
        </div>
        : (
          route === 'signin' ?
          <SignIn onRouteChange={this.onRouteChange}/>
          : <Register onRouteChange={this.onRouteChange}/>
        )

        }
      </div>
    );
  }
}

export default App;
