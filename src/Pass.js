import Grade from "./Grade";
export function Pass({ name = "Unknown", marks, color = "green" }) {
  return (
    <div>
      {marks !== undefined || marks > 0? (
        <div>
          <h1 style={{ color: color }}> Pass </h1>
          <h3>
            Mr. {name}, your marks are {marks}
          </h3>
          <h1>Your Grade is <Grade m={marks} />  </h1>
        </div>
      ) : (
        <h1> Marks are not uploaded yet! </h1>
      
      )}
    </div>
  );
}





// <Pass marks={m} name={n} color="blue" />
// let props = {
//   marks: 100,
//   name: 'dsdds',
//   color: 'red'
// }

// export function Pass({name = 'Unknown', marks, color = "green"}){
//   if(!marks)
//     return(
//       <h1> Marks are not uploaded yet! </h1>
//     )

//   return (
//     <div>
//       <h1 style={{color: color}}> Pass </h1>
//       <h3> Mr. {name}, your marks are {marks} </h3>
//     </div>
//   )
// }

// export function Pass({name, marks, color}){
//   return (
//     <div>
//       <h1 style={{color: color || "green"}}> Pass </h1>
//       <h3> Mr. {name || 'Unknown'}, your marks are {marks} </h3>
//     </div>
//   )
// }

// export function Pass(props){
//   return (
//     <div>
//       <h1 style={{color: props.color ? props.color : "green"}}> Pass </h1>
//       <h3> Mr. {props.name ? props.name : 'Unknown'}, your marks are {props.marks} </h3>
//     </div>
//   )
// }
