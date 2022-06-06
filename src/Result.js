import {Pass} from './Pass';
import {Fail} from './Fail';

export default function Result(props){
  if(props.marks >= 50)
    return <Pass {...props}/>
  else
    return <Fail {...props}/>  
}


// export default function Result(props){
//   if(props.marks >= 50)
//     return <Pass marks={props.marks} color={props.color} name={props.name}/>
//   else
//     return <Fail marks={props.marks} color={props.color}   name={props.name} />  
// }