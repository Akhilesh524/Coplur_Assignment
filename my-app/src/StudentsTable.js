import React, { Component } from 'react'
import './App.css'

export default class StudentsTable extends Component {
  render() {
   const res = this.props.result;
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
  <td>{res}</td>
    </tr>


  
    )
    return (
      <div className='tableContainer'>
        <table className="table table-success table-striped-columns">
            <thead>
             <tr>
                <th>
                    name
                </th>
                <th>
                    subject_1
                </th>
                <th>
                    subject_2
                </th>
                <th>
                    subject_3
                </th>
                <th>
                    total
                </th>
                <th>percentage</th>
                <th>result</th>
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
