import { useState } from "react";
import { alerta } from "../funtion";

export const FormulaCuadratica = () => {
const [a, setA]=useState('');
const [b, setB]=useState('');
const [c, setC] = useState('');
const [x1, setX1] = useState('');
const [x2, setX2] = useState('');


const calcularFormulaCuadratica = () => {
    if (a.trim() === '') {
        alerta('Ingrese primer número', 'warning', 'txtA');
    } else if (b.trim() === '') {
        alerta('Ingrese segundo número', 'warning', 'txtB');
    } else if (c.trim() === '') {
        alerta('Ingrese tercer número', 'warning', 'txtC');
   
    } else {
        let valor1 = parseFloat(a);
        let valor2 = parseFloat(b);
        let valor3 = parseFloat(c);
        const Formula = valor2 * valor2 - 4 * valor1 * valor3;

        if (Formula < 0) {
            alerta('La ecuación no tiene soluciones reales', 'error');
        } else {
            const raizFormula = Math.sqrt(Formula);
            const x1 = (-valor2 + raizFormula) / (2 * valor1);
            const x2 = (-valor2 - raizFormula) / (2 * valor1);
            setX1(x1);
            setX2(x2);
        }
    }
}



const limpiar = () => {
    setA('');
    setB('');
    setC('');
    setX1('');
    setX2('');
}



return (
    <div className="form-control container">
        <div className="mb-2">
            <div className="row">
                <div className="col-2">
                    <label className="form-label">Valor A:</label>
                </div>
                <div className="col-auto">
                    <input type="number" id="txtA" className="from-control" value={a} onChange={(e) => setA(e.target.value)} />
                </div>
            </div>
        </div>
        <div className="mb-2">
            <div className="row">
                <div className="col-2">
                    <label className="form-label">Valor B:</label>
                </div>
                <div className="col-auto">
                    <input type="number" id="txtB" className="from-control" value={b} onChange={(e) => setB(e.target.value)} />
                </div>
            </div>
        </div>
        <div className="mb-2">
            <div className="row">
                <div className="col-2">
                    <label className="form-label">Valor C:</label>
                </div>
                <div className="col-auto">
                    <input type="number" id="txtC" className="from-control" value={c} onChange={(e) => setC(e.target.value)} />
                </div>
            </div>
        </div>
        <div className="mb-2">
            <div className="row">
                <div className="col-2">
                    <label className="form-label">X1:</label>
                </div>
                <div className="col-auto">
                    <input type="number" id="x1" className="from-control" value={x1} onChange={(e) => setX1(e.target.value)} readOnly />
                </div>
              
            </div>
        </div>
        <div className="mb-2">
            <div className="row">
              
                <div className="col-2">
                    <label className="form-label">X2:</label>
                </div>
                <div className="col-auto">
                    <input type="number" id="x2" className="from-control" value={x2} onChange={(e) => setX2(e.target.value)} readOnly />
                </div>
            </div>
        </div>
        
        <div className="mb-2">
            <div className="row">
                <div className="col-6">
                    <button type="button" className="btn btn-primary" onClick={() => calcularFormulaCuadratica ()} >Calcular Formula</button>
                    <button type="button" className="btn btn-danger" onClick={() => limpiar()} >Limpiar</button>
                </div>
            </div>
        </div>
    </div>
);
}