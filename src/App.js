import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Question from './Components/Question';
import quizQuestions from './API/QuizQuestions';

class App extends Component {
  constructor(props) {
    super(props);

    //this state should contain anything that may trigger a UI update
    this.state = {
      score: 0,
      question: quizQuestions[0].question,
      answerOptions: quizQuestions[0].answers,
      answer:''
    };

    //One thing to note here is that we did not use the arrow function in handleAnswerClicked, so we 
    //need to hard bind our event handlers in the render function:
    this.handleAnswerClicked = this.handleAnswerClicked.bind(this);

  }

  //our lifecycle event (we'll do this when the component mounts)
  componentWillMount() {
    const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));  

    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

 //how about a random function to set the question and answers?
 shuffleArray(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element and reduce our count by one
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  
  //shuffle complete!
  return array;
};
  
  handleAnswerClicked(event) {
    this.setState({answer: event.currentTarget.value});
    alert("selected: " + event.currentTarget.value);
  }

 

  render() {
    return (
      <Grid container justify="center">
      <Question 
          answer={this.state.answer}
          answerOptions={this.state.answerOptions}
          question={this.state.question}
          questionTotal={quizQuestions.length}
          onAnswerClicked={this.handleAnswerClicked}
        />
      </Grid>
    );
  }
};

export default App;
