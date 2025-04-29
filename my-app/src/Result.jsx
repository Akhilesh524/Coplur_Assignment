import React from 'react'
import Pass from './Pass';
import Fail from './Fail';

function Result(props) {
    const isResult=props.isResult;
    if(isResult){
       return <Pass/>
    }
    return <Fail/>
}

export default Result
