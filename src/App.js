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
      questionId: 0,
      answerOptions: quizQuestions[0].answers,
      answer: null
    };

    //One thing to note here is that if we did not use the arrow function in handleAnswerClicked, so we 
    //need to hard bind our event handlers in the render function:
    this.handleAnswerClicked = this.handleAnswerClicked.bind(this);

  }
  
  handleAnswerClicked(event) {
    alert("selected!");
    this.setState({answer: event.target.value});
  }

  render() {
    return (
      <Grid container justify="center">
      <Question 
          answer={this.state.answer}
          answerOptions={this.state.answerOptions}
          questionId={this.state.questionId}
          question={this.state.question}
          questionTotal={quizQuestions.length}
          onAnswerClicked={this.handleAnswerClicked}
        />
      </Grid>
    );
  }
};

export default App;
