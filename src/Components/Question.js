import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Answers from './Answers';


//this is a stateless functional component (that's why we don't make it a class)
//it is merely presentational, we will pass everything into this component as props

function Question(props) {

  return (
    <Card >
      <CardContent>
        <p>{props.question}</p>
      </CardContent>
      <CardActions>
          <Answers answers={props.answerOptions} onClick={props.onAnswerClicked.bind(this)}/>
      </CardActions>
    </Card>
  );
}

export default Question;