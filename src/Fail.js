// component
import Grade from './Grade';
export function Fail(props){
  return (
    <div>
      <h1 style={{color: "red"}}> Fail </h1>
      <h3> Mr./Miss {props.name}, your marks are {props.marks} </h3> 
      <h1>Your Grade is <Grade m={props.marks} /></h1>
      <hr/>
    </div>
  )
}