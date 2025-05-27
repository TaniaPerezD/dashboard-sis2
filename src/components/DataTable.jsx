import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/departamento.css';
import data  from '../data/departamento/depaResumen.json'
import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function App() {
  console.log('ResponsiveContainer:', ResponsiveContainer);

  return (
    <div className="container">
      <div className="row-1">
        <div className="titulos">
        DEPARTAMENTOS PRUEBA LUIS
        </div>
      </div>
      <div className="row-8">
        <div className="col-4">
          <div className="card-container">
            1000
          </div>

        </div>
        
        <div className="col-6">
            <div className="card-container">
              1000
            </div>
            <div className="container">
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="departamento" />
                <YAxis />
                <Tooltip/>
                <Legend />
                <Bar dataKey="cantidad_empresas" barSize={20} fill="#8884d8" />
              </BarChart>
            </div>

        </div>
      
      </div>
    </div>

  );
}

export default App;