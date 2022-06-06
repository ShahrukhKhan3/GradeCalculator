/* assignment
  1- hr after each result
  2- complete Fail component
  3- print grade of each student such that

  90 - 100 A
  80 - 90  B
  70 - 80  C
  60 - 70  D
  50 - 60 E
  below 50 - F
*/

import Result from './Result';

function App(){
  let students = [
    {
      id: 1,
      marks: 100,
      name: "Ali",
      color: "green"
    }, 
    {
      id: 2,
      marks: 0,
      name: "Zohaib",
      color: "yellow",
    
    }, 
    {
      id: 3,
      marks: 0,
      name: "Rabi",
      color: "blue"
    }
  ];

  return (
    <div>
    
    {
      students.map(student => (
        
        <Result 
          key= {student.id}
          name = {student.name}
          marks= {student.marks} 
          color= {student.color}
        />   
      ))
    }
    
    </div>
  )
}

export default App;






// import Result from './Result';

// function App(){
//   let marks = [10, 90, 60, 90, 34];

//   return (
//     <div>
//     {
//       marks.map(m => <Result marks={m} color="blue" />)
//     }
//     </div>
//   )
// }

// export default App;




// import Result from './Result';

// function App(){
//   let marks = [10, 90, 60, 40, 70];

//   return (
//     <div>
//       <Result marks={marks[0]} color="blue" />
//       <Result marks={marks[1]} color="green" />
//       <Result marks={marks[2]} color="yellow" />
//       <Result marks={marks[3]} color="red" />
//       <Result marks={marks[4]} color="cyan" />
//     </div>
//   )
// }

// export default App;









// import {Pass} from './Pass';
// import {Fail} from './Fail';

// function App(){
//   let m = 90;
//   let n = "Muhammad Ahmad";

//   if(m >= 50) 
//     return <Pass marks={m} name={n} color="blue" />
//   else
//     return <Fail marks={m} name={n}/>
// }

// export default App;

















// -----------------------------------------------------------


// function App(){
//   // let myStyle = {backgroundColor: "green", color: "white"}

//   return (
//     <h1 style={{backgroundColor: "green", color: "white"}}> Sum is OK </h1>
//   )
// }

// export default App;


// -------------------------------------------
// import {sum} from './calc/sum';

// function App(){
//   if(sum(10, 20) < 25)
//     return <h1> Sum is OK </h1>
//   else
//     return <h1> Sum is too high </h1>
// }

// export default App;

// ----------------------------------------------
// import {sum} from './calc/sum';
// import {mul} from './calc/mul';
// import {div} from './calc/div';
// import {avg} from './calc/avg';
// import {min} from './calc/special/min'

// function App(){

//   return(
//     <div>
//       <h1> React </h1>
//       <h1> addition = {sum(10, 30)} </h1>
//       <h1> multi = {mul(10, 30)} </h1>
//       <h1> div = {div(10, 5)} </h1>
//       <h1> average = {avg(10, 20)} </h1>
//       <h1> min = {min(60, 40)}</h1>
//     </div>
//   )
// }

// export default App;


