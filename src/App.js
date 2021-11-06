import './App.css';
import {useState} from 'react';
import html2canvas from 'html2canvas';
function App() {
  const [linea1,setLinea1]= useState('x')
  const [linea2,setLinea2]= useState('x')
  const [imagen,setImagen]= useState('x')
  const onChangeLinea1 = (e) => {
    setLinea1(e.target.value)
  }
  const onChangeLinea2 = (e) =>{
    setLinea2(e.target.value)
  }
  const onChangeImagen = (e) =>{
    setImagen(e.target.value)
  }
  const onClickGenera = (e) =>{
    html2canvas(document.querySelector("#meme")).then(canvas => {
     var img = canvas.toDataURL("image/png");
     var link = document.createElement('a');
      link.href = img;
      link.download = 'meme.png';
      link.click();
  });
  }
 
 
  return (  
    <div className="App">
      <select onChange={onChangeImagen}>
        <option value="descarga.jpg">Casa en llama</option>
        <option value="futurama.jpg">Futurama</option>
        <option value="negro.jpg">Negro</option>
        <option value="nose.jpg">No Se</option>
      </select><br/><br/>
        <input type="text" placeholder="Linea 1" onChange={onChangeLinea1}></input><br/><br/>
        <input type="text" placeholder="Linea 2" onChange={onChangeLinea2}></input><br/><br/>
        <button onClick={onClickGenera}>Generar</button>
    <div className="meme" id="meme">
      <span>{linea1} </span>
      <span>{linea2}</span>
      <img src={"/img/"+imagen}></img>
    </div>



    </div>

  );
}

export default App;
