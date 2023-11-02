/* eslint-disable */
import { useState } from 'react'
import Scene from './threejs/Scene'
import Phase from './Phase';
import InputNames from './InputNames';
import './App.css';

export default function App() {
  const [phase, setPhase] = useState<Phase>(Phase.INPUTTING_DATA);
  const [names, setNames] = useState<String[]>([]);

  const inputNames = (names : String[]) => {
    console.log("Initialized with names: "+JSON.stringify(names));
    setNames(names);
    setPhase(Phase.INITIATING_MACHINE);
  };


  return (
    <>
      <div className='threejs-root'>
        <Scene phase={phase} />
      </div>
      <div className='gui-root'>
        {phase == Phase.INPUTTING_DATA && <InputNames inputNames={inputNames} />}
      </div>
    </>
  )
}
