import React, { Component } from "react";
import axios from 'axios'

export default class BusquedaGlobal extends Component {
        state = {
            tweet: [],
            busqueda: ''
        }
    
    async componentDidMount(){
       this.getBuscarGlobal()
    }

    getBuscarGlobal =  async (word) => {
        const res = await axios.get('http://localhost:4000/tweets/search/'+ word);
        this.setState({
            tweet: res.data.data.statuses
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
                <center><h5>TweetRecent</h5></center>
                <div className="row">
                    {
                        this.state.tweet.map(user =>(
                    <div className="col-md-4 p-2">
                    <div className="card text-white bg-secondary mb-3">
                        <div className="card-header d-flex justify-content-between">
                            <h5>{user.user.name}</h5>
                        </div>
                        <div className="card-body">
                        <p>{user.full_text}</p>
                        <p>{user.user.description}</p>
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
