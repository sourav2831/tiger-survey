import React from 'react';
import { InputGroup } from 'reactstrap';
import { FormControl } from "react-bootstrap";

const DisplayMultiQuestion=(props)=>{
    return (
        <div>
        <InputGroup>
            <InputGroup.Prepend>
            <InputGroup.Radio aria-label="Radio button for following text input" />
            </InputGroup.Prepend>
            <FormControl aria-label="Text input with radio button" />
        </InputGroup>
</div>
    )

}
export default DisplayMultiQuestion;