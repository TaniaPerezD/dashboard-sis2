import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import '../../styles/departamento.css';
import { useNavigate } from 'react-router-dom';
import empresas from '../../data/departamento/dataEmpresas.json';

const DepPage = () => {
    const navigate = useNavigate();
    const [departamentoSeleccionado, setDepartamentoSeleccionado] = useState(null);
    
    const departamentoListados = () => {
        const departamentosSet = new Set();
        empresas.forEach((empresa) => {
            if (empresa.departamento) {
                departamentosSet.add(empresa.departamento);
            }
        });
        return Array.from(departamentosSet);
    };

    const procesoGraficoActivo = (departamentoSeleccionado) => {
        const resumen = {};
        let flag = false;

        if (departamentoSeleccionado === null) {
            flag = true;
        }

        empresas.forEach((empresa) => {
            if (empresa.departamento !== departamentoSeleccionado && !flag) return;

            const departamento = empresa.departamento;
            const activo = empresa.activo;

            if (!resumen[departamento]) {
                resumen[departamento] = { departamento, activo: 0, inactivo: 0 };
            }

                if(activo) {
                    resumen[departamento].activo += 1;
                }
                else {
                    resumen[departamento].inactivo += 1;
                }
        });

        return Object.values(resumen);
    };

    const procesoGraficoMes = (departamentoSeleccionado) => {

        const ordenMeses = [
            "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ];

        const resumen = {};
        let flag = false;

        if (departamentoSeleccionado === null) {
            flag = true;
        }

        empresas.forEach((empresa) => {
            if (empresa.departamento !== departamentoSeleccionado && !flag) return;

            const mesApertura = empresa.mes_apertura;
            const mesCierre = empresa.mes_cierre;

            if (!resumen[mesApertura]) {
            resumen[mesApertura] = { mes: mesApertura, apertura: 0, cierre: 0 };
            }
            resumen[mesApertura].apertura++;

            if (mesCierre) {
            if (!resumen[mesCierre]) {
                resumen[mesCierre] = { mes: mesCierre, apertura: 0, cierre: 0 };
            }
            resumen[mesCierre].cierre++;
            }
            
        });
        
        const resumenOrdenado = Object.values(resumen).sort((a, b) => {
            return ordenMeses.indexOf(a.mes) - ordenMeses.indexOf(b.mes);
        });
        
        return resumenOrdenado;
    };

    const ordenarMeses = (resumen) => {
        const ordenMeses = [
            "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ];
        resumen.sort((a, b) => {
            return ordenMeses.indexOf(a.mes) - ordenMeses.indexOf(b.mes);
        });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-11">
                    <div className="titulos">DEPARTAMENTOS</div>
                </div>
                <div className="col-1">
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" className="dropdown-custom">
                            Sección 1
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => navigate('/Departamental/SeccionUno')}>Sección 1</Dropdown.Item>
                            <Dropdown.Item onClick={() => navigate('/Departamental/SeccionDos')}>Sección 2</Dropdown.Item>
                            <Dropdown.Item onClick={() => navigate('/Departamental/SeccionTres')}>Sección 3</Dropdown.Item>
                            <Dropdown.Item onClick={() => navigate('/Departamental/SeccionCuatro')}>Sección 4</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>

            <div className="row">
                <div className="col-4">
                    <div className="row">
                        <div className="card-dashboard" style={{ height: '80px'}}>
                            <div className="card-dashboard-header">
                                Departamento 
                            </div>
                            <div className="d-flex justify-content-between align-items-center gap-2 mt-1 px-3 mb-3">
                                 <Dropdown>
                                     <Dropdown.Toggle
                                         id="dropdown-basic"
                                         style={{
                                             backgroundColor: 'white',
                                             color: '#182335',
                                             border: '1px solid #182335'
                                         }}
                                     >
                                         {departamentoSeleccionado || "Departamento"}
                                     </Dropdown.Toggle>
                                     <Dropdown.Menu>
                                         {departamentoListados().map(dep => (
                                             <Dropdown.Item key={dep} onClick={() => setDepartamentoSeleccionado(dep)}>
                                                 {dep}
                                             </Dropdown.Item>
                                         ))}
                                     </Dropdown.Menu>
                                 </Dropdown>
 
                                 <button
                                     className="btn btn-outline-secondary btn-sm"
                                     onClick={() => setDepartamentoSeleccionado(null)}
                                 >
                                     Limpiar filtros
                                 </button>
                             </div>
                        </div>

                        <div className="col-6">
                            <div className="card-dashboard" style={{ height: '80px' }}>
                                <div className="card-dashboard-header">Años</div>
                                <div className="card-dashboard-content" style={{ height: '30px' }}>
                                    <Dropdown>
                                        <Dropdown.Toggle
                                            id="dropdown-anio"
                                            style={{ color: '#182335', backgroundColor: 'white', border: '1px solid #182335' }}
                                        >
                                            {anioSeleccionado || 'Años'}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {aniosListados().map(anio => (
                                                <Dropdown.Item key={anio} onClick={() => setAnioSeleccionado(anio)}>
                                                    {anio}
                                                </Dropdown.Item>
                                            ))}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-end mt-2">
                        <button className="btn btn-outline-secondary btn-sm" onClick={limpiarFiltros}>
                            Limpiar filtros
                        </button>
                    </div>

                    <div className="row mt-2">
                        <div className="card-dashboard" style={{ height: '350px' }}>
                            <div className="card-dashboard-header">Departamento</div>
                            <div className="card-dashboard-content">
                                <img src="https://i.pinimg.com/736x/86/bf/2f/86bf2fd1cef4d4e137d70eab4d0c8cbb.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-7">
                    <div className="card-dashboard">
                        <div className="card-dashboard-header">
                            Q empresas activas vs inactivas
                            <Dropdown>
                                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                    Departamento
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {departamentoListados().map((departamento) => (
                                        <Dropdown.Item
                                            key={departamento}
                                            onClick={() => setDepartamentoSeleccionado(departamento)}
                                        >
                                            {departamento}
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="card-dashboard-content">
                            <ResponsiveContainer width=" 100%" height="100%">
                                <BarChart
                                layout="vertical" 
                                data={procesoGraficoActivo(departamentoSeleccionado)}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                                >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis type="number" />
                                <YAxis dataKey="departamento" type="category" />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="activo" fill="#EEAF9D" />
                                <Bar dataKey="inactivo" fill="#94A3BA" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DepPage;
