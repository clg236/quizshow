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

  //our lifecycle events
  componentWillMount() {
    const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));  

    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }
  
  handleAnswerClicked(event) {
    this.setState({answer: event.currentTarget.value});
    alert("selected: " + event.currentTarget.value);
  }

  //how about a random function to set the question and answers?
  randomQuestion() = {

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
