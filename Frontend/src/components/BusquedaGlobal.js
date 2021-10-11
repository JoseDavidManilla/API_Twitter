import React, { Component } from "react";
import axios from 'axios'

export default class BusquedaGlobal extends Component {
    state = {
        tweet: [],
        tweet2:[],
        busqueda: ''
    }

async componentDidMount(){
   //this.getBuscarGlobal()
   //this.getBuscarUsuarios()
}

getBuscarGlobal =  async (word) => {
    const res = await axios.get('http://localhost:4000/tweets/search/'+ word);
    this.setState({
        tweet: res.data.data.statuses
    });
    console.log(this.state.tweet)
}

getBuscarUsuarios =  async (word) => {
    const res = await axios.get('http://localhost:4000/tweets/Twrecent/'+ word);
    this.setState({
        tweet2: res.data.data
    });
    console.log(this.state.tweet2)
}
onSubmit =async (e) => {
    e.preventDefault();
    await this.getBuscarGlobal(this.state.busqueda);
    await this.getBuscarUsuarios(this.state.busqueda);
    
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
            <center><h5>Tweets publicos recientes</h5></center>
            <div className="row">
            {
                    this.state.tweet.map(user =>(
                <div className="col-md-4 p-2">
                <div className="card text-white bg-secondary mb-3">
                    <div className="card-header d-flex justify-content-between" key={user.id_str}>
                        <h5>Publicacion: {user.user.name}</h5>
                    </div>
                    <div className="card-body">
                    <p>Contenido:{user.full_text}</p>
                    <p>Descripcion: {user.user.description}</p>
                    </div>
                    <div className="card-footer">
                    <p>Lugar: {user.user.location}</p>
                            </div>
                </div>

            </div>
                    ))
                }
            </div>
            <br></br>
            <center><h5>Usuarios</h5></center>
            <div className="row">
            {
                    this.state.tweet2.map(user2 =>(
                <div className="col-md-4 p-2">
                <div className="card text-white bg-success mb-3">
                    <div className="card-header d-flex justify-content-between" key={user2.id_str}>
                    <h5>Usuario:{user2.name}</h5>
                    </div>
                    <div className="card-body">
                    <h7>Name: {user2.screen_name}</h7>
                    <p>{user2.full_text}</p>
                    <p>Descripcion: {user2.description}</p>
                    </div>
                    <div className="card-footer">
                    <p>Id_user: {user2.id_str}</p>
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
