
import './App.css'
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
import Rank from './Components/Rank/Rank'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm'
import React, { Component } from 'react'
import FaceRecognition from './Components/FaceRecognition/FaceRecognition'
import Clarifai from 'clarifai'
import SignIn from './Components/SignIn/SignIn'
import Register from './Components/Register/Register'

const app = new Clarifai.App({
  apiKey: 'da590abc3c674f8ca2469d32a157d3a7'
});


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn:false
    }
  }
  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('inputimage')
    const width = Number(image.width)
    const height = Number(image.height)
    console.log("width ", width, "Height ", height)
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  faceBox = (box) => {
    this.setState({ box: box })
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }
  onSubmit = () => {
    this.setState({ imageUrl: this.state.input })

    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.faceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err))
  }


  onRouteChange = (route) => {
    if(route==='signout'){
      this.setState({isSignedIn:false})
    }
    else {if(route==='home')
 this.setState({isSignedIn:true})
  }
  this.setState({route:route})
}



  render() {
   const {isSignedIn,imageUrl,box,route} = this.state
    return (
      <div className="App">
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        {
          route === 'home'
            ? <div><Logo />
              <Rank />
              <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
              <FaceRecognition imageUrl={imageUrl} box={box} />
              </div>
            :
            ( route === 'signin'

            ?<SignIn onRouteChange={this.onRouteChange} />
            :<Register onRouteChange={this.onRouteChange}/>
            ) 
            
            
        }
      </div>
    )
  }
}

export default App;
