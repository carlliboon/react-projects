import { useState } from "react";


const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return <div>
    <Step />
    <StepMessage step={1}>
      <p>Pass in content</p>
      <p>🤷‍♂️</p>
    </StepMessage>
  </div>
 }

 function Step() {
  const [step, setStep] = useState(1);
 const [isOpen, setIsOpen] = useState(true);

  function movePrevious() { 
    if(step > 1){
      setStep((s) => s-1);
    }
  }
  
  function moveNext() {
    if(step < 3){
      setStep((s) => s+1);
    }
  }
  return (
  <>
    <button className="close" onClick={()=>{setIsOpen((is)=> !isOpen)}}>&times;</button>
    {isOpen && (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ''}>1</div>
        <div className={step >= 2 ? "active" : ''}>2</div>
        <div className={step >= 3 ? "active" : ''}>3</div>
      </div>

      {/* <p className="message">
        <h3>Step {step} </h3>{messages[step - 1]}
      </p> */}
        <StepMessage step={step}>{messages[step - 1]}
        <div className="buttons">
        <Button textColor='#fff' bgColor='#7950f2' onClick={()=>alert('Sample')}>
         Learn how
        </Button>
        </div>
        </StepMessage>

      <div className="buttons">

      <Button textColor='#fff' bgColor='#7950f2' onClick={movePrevious}><span>👈</span>Previous</Button>
      <Button textColor='#fff' bgColor='#7950f2' onClick={moveNext}>Next<span>👉</span></Button>
      </div>
    </div>
    )}
  </>
)}

function StepMessage({step, children}) {
  return <div className="message">
  <h3>Step {step} </h3>
  {children}
</div>
}

function Button({textColor, bgColor, onClick, children}) {
  return <button style={{backgroundColor: bgColor, color: textColor}} 
  onClick={onClick}>
  {children}
  </button>
}