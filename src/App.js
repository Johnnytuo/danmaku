import React, {Component} from 'react';
import './App.css';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      textList :['test', '666', '233333333', 'javascript', 'html', 'css', 'Vue', 'React', 'Angular'],
      input:"",
    }

  }


  componentDidMount () {
    console.log(this.refs.content.style.position);
     if (this.refs.content.style.position == '' || this.refs.content.style.position == 'static'){
      this.refs.content.style.position = 'relative';
     }
     this.refs.content.style.overflow = 'hidden';
     let rect = this.refs.content.getBoundingClientRect();

     this.domWidth = rect.right - rect.left;
     this.domHeight = rect.bottom - rect.top;
    //  console.log(rect.right,rect.left,this.domWidth,this.domHeight)
  }


  handleInput =(e)=>{
    this.setState({
      input: e.target.value
    })
  }

  handleClick=()=>{
    this.setState({
        textList: [...this.state.textList, this.refs.userInput.value],
        input:""
    })

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
