import React from "react";

class App extends React.Component {
  state = {
    person: {
      fullName: "Samir Mounir",
      bio: "Stay Tuned...",
      imgSrc: "https://cdn-icons-png.flaticon.com/512/6840/6840478.png",
      profession: "Web Developer",
    },
    show: false,
    count: 0,
  };
  displaytoggle = this.displaytoggle.bind(this);

   displaytoggle() {
    this.setState({ show : !this.state.show})
  }
  componentDidMount(){
    const i = setInterval(() => {
      this.setState(prevState=>({count: prevState.count + 1}))

    },1000)
  }
  render() {
    return ( <div>
        {this.state.show===true ? <>
        <h2>Hi, I am  {this.state.person.fullName}</h2>
        <h2> {this.state.person.bio}</h2>
        <img src={this.state.person.imgSrc} alt="" />
        <h2>  {this.state.person.profession}</h2>
      </>
      : <h1>hidden</h1>
      }
      <p>{this.state.count}</p>
<button onClick={this.displaytoggle}>Click me</button>

      </div>
    );
  }
}

export default App;
