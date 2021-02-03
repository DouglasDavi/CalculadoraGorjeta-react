import React, {useState} from 'react';
import './App.css';

function App(){

  const [dinheiro, setDinheiro] = useState('')

  const [gorjeta, setGorjeta ] = useState('')

  return(
    <div>
      <input name="dinheiro" type="number" className='inpu' value={dinheiro} onChange={(e)=>setDinheiro(parseFloat(e.target.value))}></input>
      <input name="gorjeta" type="number" className='inpu' value={gorjeta} onChange={(e)=>setGorjeta(parseFloat(e.target.value))}></input>
      {dinheiro > 0 && 
        <div>
          <p>Sub-total : <b>R$ {dinheiro}</b></p>
          <p>Gorjeta ({gorjeta > 0 ? gorjeta: ''}%): 
            <b>
              R$ { gorjeta > 0 ? (gorjeta/100)*dinheiro :'' }
            </b>
          </p>
          <p><b>Total R$ {dinheiro + ((gorjeta/100)*dinheiro)}</b></p>
        </div>
      }
    </div>
  )

}
export default App