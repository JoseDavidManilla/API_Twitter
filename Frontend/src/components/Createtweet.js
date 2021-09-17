import React, { Component } from "react";
import axios from 'axios'

export default class Createtweet extends Component {
        state = {
            tweet: [],
            busqueda: ''
        }
    
    async componentDidMount(){
        const res = await axios.get('http://localhost:4000/tweets/recent');
        this.setState({
        //tweet: res.data,
        tweet: res.data.data
        //tweet: res.data.map(tw => tw.screen_name)
        });
       console.log(this.state.tweet)
    }
    
    onSubmit =async (e) => {
        e.preventDefault();
        await this.getBuscarGlobal(this.state.busqueda);
        
    }
    onChange= e => {
        //e.persist();
        this.setState({busqueda: e.target.value});
        console.log(this.state.busqueda);
    }
    render() {
        return (
            <div className="container">
            <div className="row">
            <div className="col-md-8">
            <input type="text" className="form-control" placeholder="Escribe una palabra.." 
                value={this.state.busqueda} onChange={this.onChange}/>
            </div>
            <div className="col-md-2">
            <form action="" onSubmit={this.onSubmit}>
                <button className="btn btn-danger" type="submit">
                Buscar
                </button>
            </form>
            </div>
            </div>
            <br></br>
            <div className="row">
                {
                    this.state.tweet.map(user =>(
                <div className="col-md-4 p-2">
                <div className="card bg-light mb-3">
                    <div className="card-header d-flex justify-content-between">
                        <h5>{user.user.name}</h5>
                    </div>
                    <div className="card-body">
                    <p>{user.user.description}</p>
                    <p>{user.full_text}</p>
                    </div>
                </div>

            </div>
                    ))
                }
            </div>
    </div> 
        );
    }
}