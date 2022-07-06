import React, { Component } from 'react';
import Movies from './components/movies';
// import NavBar from './components/navbar';
// import Counters from './components/counters';
import LoginForm from './components/loginForm';
import './App.css';
import RegisterForm from './components/registerForm';

class App extends Component {
  state = { 
    counters: [
        { id: 1, value: 4 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 }
    ]
 };

//  constructor(){
//    super();
//    console.log("App - Constructor");
//  }
//  componentDidMount() {
//    console.log("App mounted");
//  }


 handleIncrement = counter => {
     const counters = [...this.state.counters];
     const index = counters.indexOf(counter);
     counters[index] = { ...counter };
     counters[index].value++;
     this.setState({ counters });
 }

 handleDecrement = counter => {
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = { ...counter };
  counters[index].value--;
  this.setState({ counters });
}

 handleReset = () => {
    const counters = this.state.counters.map(c => {
         c.value = 0;
         return c;
     });
     this.setState({ counters });
 };

 handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id != counterId);
    this.setState({ counters });
  };

  render() {
    // console.log("App - Rendered");
    return (
      <>
        {/* <NavBar totalCounters={this.state.counters.filter(c => c.value > 0 ).length} /> */}
        <main className='container'>
          {/* <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          /> */}

          {/* <Movies /> */}
          {/* <LoginForm /> */}
          <RegisterForm />
        </main>
      </>
    );
  }
}

export default App;