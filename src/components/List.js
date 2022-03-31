import { React, useState,useEffect } from 'react'
// import data from "./ListData.json"
import axios from "axios"

function List(props) {

  const [data, setCountryList] = useState([]);

  const fetchData = async () => {
    const res =  await axios.get('http://localhost:3000/api/list')
     
         setCountryList(res.data) 
        //  setCountryListDefault(data)
        //  console.log("setCountryList", setCountryList);
       }
       
       useEffect(()=>{
           fetchData();
       },[])

       console.log(data);


    const filteredData = data.filter((el) => {
        if (props.input === '') {
            //return el;
        } else {
            return el.value.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul id="ss_elem_list" tabindex="0" role="listbox" aria-labelledby="ss_elem">
            {filteredData.map((item) => (
                <li key={item.id}>{item.value}</li>
            ))}
        </ul>
    )
}

export default List
