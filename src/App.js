import React, {Component} from 'react';
import './App.css';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      textList :['test', '666', '233333333', 'javascript', 'html', 'css', 'Vue', 'React', 'Angular'],
      input:"",
      domWidth: 0,
      domHeight: 0,
    }

  }


  async componentDidMount () {
     if (this.refs.content.style.position == '' || this.refs.content.style.position == 'static'){
      this.refs.content.style.position = 'relative';
     }
     this.refs.content.style.overflow = 'hidden';
     let rect = this.refs.content.getBoundingClientRect();
     await this.setState({
        domWidth: rect.right - rect.left,
        domHeight: rect.bottom - rect.top,
     })


  // let repeat =()=>{
  //   this.opera();
  //   setInterval(this.opera(),10000)
  // }
  // repeat();
    let opera = () =>{
    this.state.textList.map((Element, index) => {
      this.handleChild(Element);
  })};
  // opera();
  setInterval(opera,5000)

  }

  opera = () =>{
    this.state.textList.map((Element, index) => {
    this.handleChild(Element);
  })};






     

  // let opera = () =>{
  //   this.state.textList.map((Element, index) => {
  //   child(Element);
  // })};
  // // opera();
  // setInterval(opera,3000)







  handleInput =(e)=>{
    this.setState({
      input: e.target.value
    })
  }

  handleClick=()=>{
    this.setState({
        textList: [...this.state.textList, this.refs.userInput.value],
        input:"",
    },()=>{
      this.state.textList.map((Element, index) => {
        this.handleChild(Element);
      })
    })

}


handleChild(text){
  let div = document.createElement('div');
  div.style.position = 'absolute';
  div.style.left = this.state.domWidth + 'px';
  div.style.top = (this.state.domHeight - 20) * +Math.random().toFixed(2) + 'px';
  div.style.whiteSpace = 'nowrap';
  div.style.color = '#' + Math.floor(Math.random() * 0xffffff).toString(16);
  div.innerText = text;
  this.refs.content.appendChild(div);
  let roll = (timer) => {
    let now = +new Date();
    roll.last = roll.last || now;
    roll.timer = roll.timer || timer;
    let left = div.offsetLeft;
    let rect = div.getBoundingClientRect();
    if (left < (rect.left - rect.right)) {
      // this.refs.content.removeChild(div);
    } else {
        if (now - roll.last >= roll.timer) {
            roll.last = now;
            left -= 3;
            div.style.left = left + 'px';
        }
        requestAnimationFrame(roll);
    }
}
roll(50 * +Math.random().toFixed(2));
}


// function handleClick(){

// }



render(){
  const text = this.state.textList.map((Element, index) => {
    return <p key={ index }>{Element}</p>
  });



  return (
    <div className="App">
    <title>JS弹幕实现-div</title>
        <div class="container">
            <div id="content" class="content" ref = "content"></div>
            <div class="content-opt">
                <div id="content-text" class="content-text">
                {text}
                </div>
                <div class="content-input">
                    <input id="text" type="text" 
                      ref = "userInput"
                      value = {this.state.input}
                      onChange = {this.handleInput.bind(this)}
                            />
                    <button id="send" onClick={this.handleClick.bind(this)}>发送</button>
                </div>
            </div>
        </div>

    </div>

  );
}


 
}

export default App;
