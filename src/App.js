
import './App.css'
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
import Rank from './Components/Rank/Rank'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm'
import React, { Component } from 'react'
import FaceRecognition from './Components/FaceRecognition/FaceRecognition'
import SignIn from './Components/SignIn/SignIn'
import Register from './Components/Register/Register'
import Particles from "react-tsparticles"

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}


const initialState ={
  
    input: '',
    imageUrl: '',
    box: {},
    route: 'signin',
    isSignedIn: false,
    user: {
      id: '',
      name: '',
      email: '',
      entries: 0,
      joined: new Date()
    }
  
}
class App extends Component {
  constructor() {
    super();
    this.state = initialState
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name_user,
        email: data.email,
        entries: data.entries,
        joined: new Date()
      }
    })
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
    fetch('https://facedetection-server-tariro.herokuapp.com/imageUrl',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
          input: this.state.input
        }),
    })
    .then(response=>response.json())
      .then(response => {
        if (response) {
          fetch('https://facedetection-server-tariro.herokuapp.com/image',
            {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(
                {
                  id: this.state.user.id
                }),
            })
            .then(response=>response.json())
            .then(count=>{
              this.setState(Object.assign(this.state.user,{entries:count}))
            })
            .catch(console.log)
        }
       this.faceBox(this.calculateFaceLocation(response))}
       )
      .catch(err => console.log(err)
      )
  }


  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    }
    else {

      if (route === 'home')
        this.setState({ isSignedIn: true })

    }
    this.setState({ route: route })
  }


  render() {
    const { isSignedIn, imageUrl, box, route } = this.state
    return (
      <div className="App"> 
      <Particles className='particles'params={particlesOptions}/>
      
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        {
          route === 'home'
            ? <div><Logo />
              <Rank name ={this.state.user.name} entries={this.state.user.entries}/>
              <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
              <FaceRecognition imageUrl={imageUrl} box={box} />
            </div>
            :
            (route === 'signin'

              ? <SignIn onRouteChange={this.onRouteChange}  loadUser={this.loadUser}  />
              : <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
            )


        }
      </div>
    )
  }
}

export default App;
