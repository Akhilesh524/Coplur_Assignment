import React, { Component } from 'react'
import './App.css'
export default class StudentsTable extends Component {
  render() {
    const marksList = this.props.marksList.map((student)=>
    
    <tr key={student}>
        <td>{student.name}</td>
        <td>{student.math}</td>
        <td>{student.chemistry}</td>
        <td>{student.physics}</td>
        <td>{student.math+student.chemistry+student.physics}</td>
        <td>{
           (((student.math+student.chemistry+student.physics)/300)*100).toFixed(1)
  }</td>
    </tr>


  
    )
    return (
      <div className='tableContainer'>
        <table>
            <thead>
             <tr>
                <th>
                    name
                </th>
                <th>
                    subect_1
                </th>
                <th>
                    subect_2
                </th>
                <th>
                    subect_3
                </th>
                <th>
                    total
                </th>
                <th>percentage</th>
             </tr>
            </thead>
            <tbody>
              {marksList}
            </tbody>
        </table>
      </div>
    )
  }
}
