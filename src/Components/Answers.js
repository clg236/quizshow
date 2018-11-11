import React from 'react';
import Button from '@material-ui/core/Button';


//this is a STATELESS FUNCTIONAL COMPONENT (that's why we don't make it a class)
//it is merely presentational, we will pass everything into this component as props

function Answers(props) {
    return (
        <div>
            {/* here we use that arrap.map method to map over our array of answers and create a button for each that 
            displays the content value */}
            {props.answers.map(x => <Button size="large" onClick={props.onClick }>{x.content}</Button>)}
        </div>
    )
}

export default Answers;