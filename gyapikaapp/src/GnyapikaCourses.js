import React from 'react';
import axios from 'axios';

class GnyapikaCourses extends React.Component{
    constructor(props){
        super(props);
        this.state={userName:'',email:'',password:'',persons:[]};
    }

    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const personsdata = res.data;
        this.setState({ persons:personsdata });
        console.log(this.state.persons);
      });
      
    }


    render(){
        return(
            <div >
                {this.state.persons.map(obj=>{
                    return <h5>{obj.name}</h5>
                })}
            </div>
        )
    }
    
}

export default GnyapikaCourses;