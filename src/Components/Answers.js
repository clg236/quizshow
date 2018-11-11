import React from 'react';
import Button from '@material-ui/core/Button';


//this is a STATELESS FUNCTIONAL COMPONENT (that's why we don't make it a class)
//it is merely presentational, we will pass everything into this component as props

function Answers(props) {
    return (
        <div>
            {/* just making sure we get the right props back to our event handler (passed in via onClick prop) */}
            {/* <Button onClick={props.onClick(props.answers[0].correct)}>{props.answers[0].content}</Button> */}
            
            {/* here we use that arrap.map method to map over our array of answers and create a button for each that 
            displays the content value, it also sends back the correct key value for the clicked button */}
            {
                props.answers.map(
                    (answer, index) => <Button key={index} size="large" data-answer-id={index} value={answer.content} onClick={props.onClick.bind(null)}>{answer.content}</Button>
                )
            }
        </div>
    )
}

export default Answers;
