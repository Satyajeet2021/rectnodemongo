import { React, useState } from "react";
import List from "./List";

import TextField from '@material-ui/core/TextField';


// class Search extends React.Component {
   
//   // Constructor 
//   constructor(props) {
//       super(props);
 
//       this.state = {
//           items: [],
//           DataisLoaded: false
//       };
//       const [inputText, setInputText] = useState("");
//       let inputHandler = (e) => {
//         //convert input text to lower case
//         var lowerCase = e.target.value.toLowerCase();
//         setInputText(lowerCase);
//       };
//   }
 
//   // ComponentDidMount is used to
//   // execute the code 
//   componentDidMount() {
//       fetch(
// "https://jsonplaceholder.typicode.com/users")
//           .then((res) => res.json())
//           .then((json) => {
//               this.setState({
//                   items: json,
//                   DataisLoaded: true
//               });
//           })
//   }

  


//   render() {
//       const { DataisLoaded, items } = this.state;
//       if (!DataisLoaded) return <div>
//           <h1> Pleses wait some time.... </h1> </div> ;
 
//       return (
//       <div className="main Serach_aircraft">
//         <h1>Search Thousands of Used Aircraft</h1>
//         <div className="search">
//           <TextField
//             id="outlined-basic"
//             onChange={inputHandler}
//             variant="outlined"
//             fullWidth
//             label="Ex: Gulfstream, SR22T"
//           />
//         </div>
//         <List input={inputText} />
//       </div>
//     );
// }
// }
 
// export default Search;
function Search() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  
  
  

  return (
    <div className="main Serach_aircraft">
      <h1>Search Thousands of Used Aircraft</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Ex: Gulfstream, SR22T"
        />
      </div>
      <List input={inputText} />
    </div>
  );
}

export default Search;