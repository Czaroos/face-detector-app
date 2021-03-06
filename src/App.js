import React, { Component } from 'react';
import Particles from 'react-particles-js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    }
  },
  interactivity: {
    onresize: {
      enable: true,
      density_auto: true,
      density_area: 400
    }
  }
}

const initialState = {
  input: '',
  imageURL: '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    nickname: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      nickname: data.nickname,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }
    })
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
  this.setState({input: event.target.value});
}

clearPage = () => {
  document.getElementById('imageUrlInput').value = '';
  this.setState({input: ''});
  this.setState({imageURL: ''});
} 

onSubmit = () => {
  if (this.state.imageURL === '')
  {
    this.setState({imageURL: this.state.input});
    fetch('https://whispering-depths-44095.herokuapp.com/imageurl', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        input: this.state.input
      })
    })
    .then(response => {
      if (response.status !== 400) {
        response.json()
        .then(response => {
          fetch('https://whispering-depths-44095.herokuapp.com/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
          .then(response => response.json())
          .then(count => {
            this.setState(Object.assign(
              this.state.user,
              { entries: count }
            ))
          })
          this.displayFaceBox(this.calculateFaceLocation(response))
         })
        } else {
          this.clearPage();
          alert('Incorrect URL!');
        }
     })
  } else {
   alert('You have already posted an image!');
  }
}

onRouteChange = (route) => {
  if (route === 'signout') {
    this.setState(initialState);
  } else if (route === 'home') {
    this.setState({isSignedIn: true});
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
          <Rank nickname={this.state.user.nickname}
          entries={this.state.user.entries} />
          <ImageLinkForm
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
          clearPage={this.clearPage}/>
          <FaceRecognition
          box={box}
          imageURL={imageURL}/>
        </div>
        : (
          route === 'signin' ?
          <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
        )

        }
      </div>
    );
  }
}

export default App;
