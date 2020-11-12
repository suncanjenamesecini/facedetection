import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import './App.css';

const app = new Clarifai.App({
  apiKey: '6b86e959df894d5cad37e0c0b8b54daa'
});

const particlesOptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  },
  "interactivity":{
    "detect_on":"canvas",
    "events":{
      "onhover":{
        "enable":true,
        "mode":"repulse"
      },
      "onclick":{
        "enable":true,
        "mode":"push"
      },
      "resize":true
    },
    "modes":{
      "grab":{
        "distance":400,
        "line_linked":{
          "opacity":1
        }
      },
      "bubble":{
        "distance":400,
        "size":40,
        "duration":2,
        "opacity":8,
        "speed":3
      },
      "repulse":{
        "distance":143.85614385614386,
        "duration":0.4
      },
      "push":{
        "particles_nb":4
      },

      "remove":{
        "particles_nb":2
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      box1: {},
      box2: {},
      box3: {},
      box4: {},
      box5: {},
      box6: {},
      box7: {},
      box8: {},
      box9: {},
      box10: {},
      box11: {},
      box12: {},
      box13: {},
      box14: {},
      box15: {},
      box16: {},
      box17: {},
      box18: {},
      box19: {},
      box20: {},
      box21: {},
      box22: {},
      box23: {},
      box24: {},
      box25: {},
      box26: {},
      box27: {},
      box28: {},
      box29: {}
    }
  }

  calculateFaceLocation = (data) => {
    //const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const nizLica = data.outputs[0].data.regions;
    const image=document.getElementById('inputimage');
    const width=Number(image.width);
    const height=Number(image.height);
    //console.log(clarifaiFace);
    //opet ja promijenila
    console.log('niz lica', nizLica);
    const NizOkvira=nizLica.map(podaci => podaci.region_info.bounding_box);
    console.log('niz okvira',NizOkvira);
    const VelikaKutija=NizOkvira.map(objekat => {
      //leftCol: objekat.left_col*width;
      //topRow: objekat.top_row*height;
      //rightCol: width-(objekat.right_col*width);
      //bottomRow: height-(objekat.bottom_row*height);
      const obj = {};
      obj.leftCol = objekat.left_col*width;
      obj.topRow = objekat.top_row*height;
      obj.rightCol = width-(objekat.right_col*width);
      obj.bottomRow = height-(objekat.bottom_row*height);
      return obj;
    }) 
    return VelikaKutija;
  }

//ja promijenila--ne prepoznaje u FaceRecognition ali se kompajlira
  /*displayFaceBox = (BigBox) => {
    console.log('kutija',BigBox);
      this.setState({boxes: BigBox}); 
  }*/

  displayFaceBox = (BigBox) => {
    console.log('kutija',BigBox);
    if(BigBox.length===1)
      this.setState({box: BigBox[0]})
    else if(BigBox.length===2)
      this.setState({box: BigBox[0], box1: BigBox[1]})
    else if(BigBox.length===3)
      this.setState({box: BigBox[0], box1: BigBox[1], box2: BigBox[2]})
    else if(BigBox.length===4)
      this.setState({box: BigBox[0], box1: BigBox[1], box2: BigBox[2], box3: BigBox[3]})
    else if(BigBox.length===5)
      this.setState({box: BigBox[0], box1: BigBox[1], box2: BigBox[2], box3: BigBox[3], box4: BigBox[4]})
    else if(BigBox.length===6)
      this.setState({box: BigBox[0], box1: BigBox[1], box2: BigBox[2], box3: BigBox[3], box4: BigBox[4], box5: BigBox[5]})
    else if(BigBox.length===7)
      this.setState({box: BigBox[0], box1: BigBox[1], box2: BigBox[2], box3: BigBox[3], box4: BigBox[4], box5: BigBox[5],
       box6: BigBox[6]})
    else if(BigBox.length===8)
      this.setState({box: BigBox[0], box1: BigBox[1], box2: BigBox[2], box3: BigBox[3], box4: BigBox[4], box5: BigBox[5],
       box6: BigBox[6], box7: BigBox[7]})
    else if(BigBox.length===9)
      this.setState({box: BigBox[0], box1: BigBox[1], box2: BigBox[2], box3: BigBox[3], box4: BigBox[4], box5: BigBox[5],
       box6: BigBox[6], box7: BigBox[7], box8: BigBox[8]})
    else if(BigBox.length===10)
      this.setState({box: BigBox[0], box1: BigBox[1], box2: BigBox[2], box3: BigBox[3], box4: BigBox[4], box5: BigBox[5],
       box6: BigBox[6], box7: BigBox[7], box8: BigBox[8], box9: BigBox[9]})
    else if(BigBox.length===11)
      this.setState({box: BigBox[0], box1: BigBox[1], box2: BigBox[2], box3: BigBox[3], box4: BigBox[4], box5: BigBox[5],
       box6: BigBox[6], box7: BigBox[7], box8: BigBox[8], box9: BigBox[9], box10: BigBox[10]})
    else if(BigBox.length===12)
      this.setState({box: BigBox[0], box1: BigBox[1], box2: BigBox[2], box3: BigBox[3], box4: BigBox[4], box5: BigBox[5],
       box6: BigBox[6], box7: BigBox[7], box8: BigBox[8], box9: BigBox[9], box10: BigBox[10], box11: BigBox[11]})
    else if(BigBox.length===13)
      this.setState({box: BigBox[0], box1: BigBox[1], box2: BigBox[2], box3: BigBox[3], box4: BigBox[4], box5: BigBox[5],
       box6: BigBox[6], box7: BigBox[7], box8: BigBox[8], box9: BigBox[9], box10: BigBox[10], box11: BigBox[11], box12: BigBox[12]})
    else if(BigBox.length===14)
      this.setState({box: BigBox[0], box1: BigBox[1], box2: BigBox[2], box3: BigBox[3], box4: BigBox[4], box5: BigBox[5],
       box6: BigBox[6], box7: BigBox[7], box8: BigBox[8], box9: BigBox[9], box10: BigBox[10], box11: BigBox[11], box12: BigBox[12],
        box13: BigBox[13]})
    else if(BigBox.length===15)
      this.setState({box: BigBox[0], box1: BigBox[1], box2: BigBox[2], box3: BigBox[3], box4: BigBox[4], box5: BigBox[5],
       box6: BigBox[6], box7: BigBox[7], box8: BigBox[8], box9: BigBox[9], box10: BigBox[10], box11: BigBox[11], box12: BigBox[12],
        box13: BigBox[13], box14: BigBox[14]})
    else if(BigBox.length===16)
      this.setState({box: BigBox[0], box1: BigBox[1], box2: BigBox[2], box3: BigBox[3], box4: BigBox[4], box5: BigBox[5],
       box6: BigBox[6], box7: BigBox[7], box8: BigBox[8], box9: BigBox[9], box10: BigBox[10], box11: BigBox[11], box12: BigBox[12],
        box13: BigBox[13], box14: BigBox[14], box15: BigBox[15]})
    else if(BigBox.length===17)
      this.setState({box: BigBox[0], box1: BigBox[1], box2: BigBox[2], box3: BigBox[3], box4: BigBox[4], box5: BigBox[5],
       box6: BigBox[6], box7: BigBox[7], box8: BigBox[8], box9: BigBox[9], box10: BigBox[10], box11: BigBox[11], box12: BigBox[12],
        box13: BigBox[13], box14: BigBox[14], box15: BigBox[15], box16: BigBox[16]})
    else if(BigBox.length===18)
      this.setState({box: BigBox[0], box1: BigBox[1], box2: BigBox[2], box3: BigBox[3], box4: BigBox[4], box5: BigBox[5],
       box6: BigBox[6], box7: BigBox[7], box8: BigBox[8], box9: BigBox[9], box10: BigBox[10], box11: BigBox[11], box12: BigBox[12],
        box13: BigBox[13], box14: BigBox[14], box15: BigBox[15], box16: BigBox[16], box17: BigBox[17]})
    else if(BigBox.length===19)
      this.setState({box: BigBox[0], box1: BigBox[1], box2: BigBox[2], box3: BigBox[3], box4: BigBox[4], box5: BigBox[5],
       box6: BigBox[6], box7: BigBox[7], box8: BigBox[8], box9: BigBox[9], box10: BigBox[10], box11: BigBox[11], box12: BigBox[12],
        box13: BigBox[13], box14: BigBox[14], box15: BigBox[15], box16: BigBox[16], box17: BigBox[17], box18: BigBox[18]})
    else if(BigBox.length===20)
      this.setState({box: BigBox[0], box1: BigBox[1], box2: BigBox[2], box3: BigBox[3], box4: BigBox[4], box5: BigBox[5],
       box6: BigBox[6], box7: BigBox[7], box8: BigBox[8], box9: BigBox[9], box10: BigBox[10], box11: BigBox[11], box12: BigBox[12],
        box13: BigBox[13], box14: BigBox[14], box15: BigBox[15], box16: BigBox[16], box17: BigBox[17], box18: BigBox[18],
         box19: BigBox[19]})
    else if(BigBox.length===21)
      this.setState({box: BigBox[0], box1: BigBox[1], box2: BigBox[2], box3: BigBox[3], box4: BigBox[4], box5: BigBox[5],
       box6: BigBox[6], box7: BigBox[7], box8: BigBox[8], box9: BigBox[9], box10: BigBox[10], box11: BigBox[11], box12: BigBox[12],
        box13: BigBox[13], box14: BigBox[14], box15: BigBox[15], box16: BigBox[16], box17: BigBox[17], box18: BigBox[18],
         box19: BigBox[19], box20: BigBox[20]})
    else if(BigBox.length===22)
      this.setState({box: BigBox[0], box1: BigBox[1], box2: BigBox[2], box3: BigBox[3], box4: BigBox[4], box5: BigBox[5],
       box6: BigBox[6], box7: BigBox[7], box8: BigBox[8], box9: BigBox[9], box10: BigBox[10], box11: BigBox[11], box12: BigBox[12],
        box13: BigBox[13], box14: BigBox[14], box15: BigBox[15], box16: BigBox[16], box17: BigBox[17], box18: BigBox[18],
         box19: BigBox[19], box20: BigBox[20], box21: BigBox[21]})
    else if(BigBox.length===23)
      this.setState({box: BigBox[0], box1: BigBox[1], box2: BigBox[2], box3: BigBox[3], box4: BigBox[4], box5: BigBox[5],
       box6: BigBox[6], box7: BigBox[7], box8: BigBox[8], box9: BigBox[9], box10: BigBox[10], box11: BigBox[11], box12: BigBox[12],
        box13: BigBox[13], box14: BigBox[14], box15: BigBox[15], box16: BigBox[16], box17: BigBox[17], box18: BigBox[18],
         box19: BigBox[19], box20: BigBox[20], box21: BigBox[21], box22: BigBox[22]})
    else if(BigBox.length===24)
      this.setState({box: BigBox[0], box1: BigBox[1], box2: BigBox[2], box3: BigBox[3], box4: BigBox[4], box5: BigBox[5],
       box6: BigBox[6], box7: BigBox[7], box8: BigBox[8], box9: BigBox[9], box10: BigBox[10], box11: BigBox[11], box12: BigBox[12],
        box13: BigBox[13], box14: BigBox[14], box15: BigBox[15], box16: BigBox[16], box17: BigBox[17], box18: BigBox[18],
         box19: BigBox[19], box20: BigBox[20], box21: BigBox[21], box22: BigBox[22], box23: BigBox[23]})
    else if(BigBox.length===25)
      this.setState({box: BigBox[0], box1: BigBox[1], box2: BigBox[2], box3: BigBox[3], box4: BigBox[4], box5: BigBox[5],
       box6: BigBox[6], box7: BigBox[7], box8: BigBox[8], box9: BigBox[9], box10: BigBox[10], box11: BigBox[11], box12: BigBox[12],
        box13: BigBox[13], box14: BigBox[14], box15: BigBox[15], box16: BigBox[16], box17: BigBox[17], box18: BigBox[18],
         box19: BigBox[19], box20: BigBox[20], box21: BigBox[21], box22: BigBox[22], box23: BigBox[23], box24: BigBox[24]})
    else if(BigBox.length===26)
      this.setState({box: BigBox[0], box1: BigBox[1], box2: BigBox[2], box3: BigBox[3], box4: BigBox[4], box5: BigBox[5],
       box6: BigBox[6], box7: BigBox[7], box8: BigBox[8], box9: BigBox[9], box10: BigBox[10], box11: BigBox[11], box12: BigBox[12],
        box13: BigBox[13], box14: BigBox[14], box15: BigBox[15], box16: BigBox[16], box17: BigBox[17], box18: BigBox[18],
         box19: BigBox[19], box20: BigBox[20], box21: BigBox[21], box22: BigBox[22], box23: BigBox[23], box24: BigBox[24],
          box25: BigBox[25]})
    else if(BigBox.length===27)
      this.setState({box: BigBox[0], box1: BigBox[1], box2: BigBox[2], box3: BigBox[3], box4: BigBox[4], box5: BigBox[5],
       box6: BigBox[6], box7: BigBox[7], box8: BigBox[8], box9: BigBox[9], box10: BigBox[10], box11: BigBox[11], box12: BigBox[12],
        box13: BigBox[13], box14: BigBox[14], box15: BigBox[15], box16: BigBox[16], box17: BigBox[17], box18: BigBox[18],
         box19: BigBox[19], box20: BigBox[20], box21: BigBox[21], box22: BigBox[22], box23: BigBox[23], box24: BigBox[24],
          box25: BigBox[25], box26: BigBox[26]})
    else if(BigBox.length===28)
      this.setState({box: BigBox[0], box1: BigBox[1], box2: BigBox[2], box3: BigBox[3], box4: BigBox[4], box5: BigBox[5],
       box6: BigBox[6], box7: BigBox[7], box8: BigBox[8], box9: BigBox[9], box10: BigBox[10], box11: BigBox[11], box12: BigBox[12],
        box13: BigBox[13], box14: BigBox[14], box15: BigBox[15], box16: BigBox[16], box17: BigBox[17], box18: BigBox[18],
         box19: BigBox[19], box20: BigBox[20], box21: BigBox[21], box22: BigBox[22], box23: BigBox[23], box24: BigBox[24],
          box25: BigBox[25], box26: BigBox[26], box27: BigBox[27]})
    else if(BigBox.length===29)
      this.setState({box: BigBox[0], box1: BigBox[1], box2: BigBox[2], box3: BigBox[3], box4: BigBox[4], box5: BigBox[5],
       box6: BigBox[6], box7: BigBox[7], box8: BigBox[8], box9: BigBox[9], box10: BigBox[10], box11: BigBox[11], box12: BigBox[12],
        box13: BigBox[13], box14: BigBox[14], box15: BigBox[15], box16: BigBox[16], box17: BigBox[17], box18: BigBox[18],
         box19: BigBox[19], box20: BigBox[20], box21: BigBox[21], box22: BigBox[22], box23: BigBox[23], box24: BigBox[24],
          box25: BigBox[25], box26: BigBox[26], box27: BigBox[27], box28: BigBox[28]})
    else if(BigBox.length===30)
      this.setState({box: BigBox[0], box1: BigBox[1], box2: BigBox[2], box3: BigBox[3], box4: BigBox[4], box5: BigBox[5],
       box6: BigBox[6], box7: BigBox[7], box8: BigBox[8], box9: BigBox[9], box10: BigBox[10], box11: BigBox[11], box12: BigBox[12],
        box13: BigBox[13], box14: BigBox[14], box15: BigBox[15], box16: BigBox[16], box17: BigBox[17], box18: BigBox[18],
         box19: BigBox[19], box20: BigBox[20], box21: BigBox[21], box22: BigBox[22], box23: BigBox[23], box24: BigBox[24],
          box25: BigBox[25], box26: BigBox[26], box27: BigBox[27], box28: BigBox[28], box29: BigBox[29]});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input, box: {}, box1: {}, box2: {}, box3: {}, box4: {}, box5: {}, box6: {}, box7: {}, box8: {}, box9: {}, box10: {}, box11: {}, box12: {}, box13: {}, box14: {}, box15: {}, box16: {}, box17: {}, box18: {}, box19: {}, box20: {}, box21: {}, box22: {}, box23: {}, box24: {}, box25: {}, box26: {}, box27: {}, box28: {}, box29: {}});
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation />
        <Logo />
        <ImageLinkForm onInputChange = {this.onInputChange} onButtonSubmit = {this.onButtonSubmit} />
        <FaceRecognition box={this.state.box} box1={this.state.box1} box2={this.state.box2} box3={this.state.box3} box4={this.state.box4}
             box5={this.state.box5} box6={this.state.box6} box7={this.state.box7} box8={this.state.box8} box9={this.state.box9}
             box10={this.state.box10} box11={this.state.box11} box12={this.state.box12} box13={this.state.box13} box14={this.state.box14}
             box15={this.state.box15} box16={this.state.box16} box17={this.state.box17} box18={this.state.box18} box19={this.state.box19}
             box20={this.state.box20} box21={this.state.box21} box22={this.state.box22} box23={this.state.box23} box24={this.state.box24}
             box25={this.state.box25} box26={this.state.box26} box27={this.state.box27} box28={this.state.box28} box29={this.state.box29}
             box30={this.state.box30} imageUrl = {this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;