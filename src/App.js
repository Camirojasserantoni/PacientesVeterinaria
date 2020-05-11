import React, {Component} from 'react';
import './bootstrap.min.css';
import Header from './Components/Header';
import NuevaCita from './Components/NuevaCita';
import ListaCitas from './Components/ListaCitas';



class App extends Component {
  state = { 
    citas:[]
   }

  //cuando la aplicacion carga 
   componentDidMount(){
    const citasLS=localStorage.getItem('citas');
    if(citasLS) {
      this.setState({
        citas: JSON.parse(citasLS)
   })
  
  }
}
   //cuando eliminamos o agregamos nueva cita 
   componentDidUpdate(){
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
   }

   crearNuevaCita = datos => {
    //copiar el state actual 
    const citas= [...this.state.citas, datos];

    // agregar nuevo state
    this.setState({
      citas
    })
   }

    // elimina las citas del state 
    eliminarCita = id => {

      // tomar una copia del state 
      const citasActuales = [...this.state.citas];

      // utilizar filter para sacar elelemto  @id del arreglo

      const citas = citasActuales.filter(cita => cita.id !== id)

      //actualizar state
      this.setState({
        citas 

      })


    }


   render() { 

    return ( 
      <div className="container">
          <Header 
              titulo='Administrador Pacientes Veterinaria'
          />
          <div className="row">
              <div className="col-md-10 mx-auto">
                <NuevaCita
                crearNuevaCita={this.crearNuevaCita}
                />
              
              <div className="mt-5 col-md-10 mx-auto">
                <ListaCitas
                  citas={this.state.citas}
                  eliminarCita={this.eliminarCita}
                
                />
            </div>
          </div>
      </div>
    </div>
    );
  }
}
 
export default App;