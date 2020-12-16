import React,{useState,useEffect} from 'react';

const App=()=>{
  const [temperatureValue,setTemperatureValue]=useState(10);
  const [temperatureColor,setTemperatureColor]=useState('cold');

  useEffect(()=>{
    if(temperatureValue<15){
      setTemperatureColor("cold");
    }else{
      setTemperatureColor('hot');
    }
  },[temperatureValue])

  const increaseTemperature=()=>{
    if(temperatureValue===30){
      return
    }
    setTemperatureValue(temperatureValue+1)
  }

  const decreaseTemperature=()=>{
    if(temperatureValue===-16){
      return
    }
    setTemperatureValue(temperatureValue-1);
  }

  return(
    <div className='app-container'>
      <div className='temperature-display-container'>
        <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
      </div>
      <div className='button-container'>
        <button onClick={increaseTemperature}>+</button>
        <button onClick={decreaseTemperature}>-</button>
      </div>
    </div>
  )
}

export default App