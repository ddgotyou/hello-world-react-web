import React from 'react'
import MyButton from '../../components/Button'
import ProgressBar from '../../components/ProgressBar'
import TestList from '../../components/TestList'

export default class ConflictTest extends React.Component{
    render(){
        return(
        
        <div>
            <MyButton></MyButton>
            <ProgressBar></ProgressBar>
            <TestList></TestList>
        </div>      
        )
    }


}