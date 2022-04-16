import React,{Component} from 'react';
import axios from 'axios';
import ImageResults from "../ImageResults/ImageResults";

class Search extends Component{
    state={
        searchText: '',
        apiUrl: 'https://pixabay.com/api',
        apiKey: '26200374-f0b0f669a3ffaf2f9e89e6de0',
        images:[]
    };
    onTextChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});   
    }; 

    fetching=(et)=>{
            if(et.target.value==='')
            {
                this.setState({images:[]});
            }
            else{
            axios
            .get(
                `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
                    this.state.searchText
                }&image_type=photo&safesearch=true`
            )
            .then(res=>this.setState({images:res.data.hits}))
            .catch(err=>console.log(err));
            }
        };
    
    render(){
        console.log(this.state.images);
        return(
            <div>
            <input type="text" 
            style=
            {{backgroundColor:'black',
            color:'white',
            width:"30vw",
            marginLeft:"33vw",
            marginTop:"5vh",
            paddingTop:20,
            paddingLeft:"4vw",
            fontSize:"3vh",
            borderTopStyle:"hidden",
            borderRightStyle:"hidden",
            borderLeftStyle:"hidden",
            outline:"none",
            borderBottomStyle:"groove",
        }}
        placeholder="Search Images"
        name="searchText"
        id = "box"
        value={this.state.searchText}
        onChange={this.onTextChange}
        onKeyDown={e =>{
            if(e.key==='Enter'){this.fetching(e)}
        }}
        />

<br />
{this.state.images.length>0?(<ImageResults images={this.state.images}/>):null}
            </div>

        )
    }
}

export default Search;