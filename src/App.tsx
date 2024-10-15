import {useState } from 'react'
import './App.css'

function App() {
  const [firstNum, setFirstNum] = useState<string>('')
  const [operator, setOperator] = useState('')
  const [secondNum, setSecondNum] = useState<string>('')
  const [result, setResult] = useState<number | null>(null)


  const visorResult = (num: string) => {
    if (result != null) {
      setFirstNum(String(result))
      setResult(null)
    }
      if (isNaN(Number(num))) {
        setOperator(num)
      } else {
        if (operator === '') {
          setFirstNum(firstNum + num)
        } else {
          setSecondNum(secondNum + num)
        }
      }
    }

  const visorEqual = () => {
    switch (operator) {
      case '÷':
        setResult(Number(firstNum) / Number(secondNum))
        setFirstNum('')
        setSecondNum('')
        setOperator('')
        break
      case 'x':
        setResult(Number(firstNum) * Number(secondNum))
        setFirstNum('')
        setSecondNum('')
        setOperator('')
        break
      case '-':
        setResult(Number(firstNum) - Number(secondNum))
        setFirstNum('')
        setSecondNum('')
        setOperator('')
        break
      case '+':
        setResult(Number(firstNum) + Number(secondNum))
        setFirstNum('')
        setSecondNum('')
        setOperator('')
        break
    }
  }

  const cleanAll = () => {
    setFirstNum('')
    setOperator('')
    setSecondNum('')
    setResult(null)
  }

  return (
    <main>
      <section className='visor' >
        <h1>Calculadora</h1>
        <span>
          {result != null 
          ? result 
          : `${firstNum === '' ? 0 : firstNum} ${operator} ${secondNum}`}
        </span>
        
      </section>
      <section>
        <div>
          <button onClick={() => visorResult('7')}>7</button>
          <button onClick={() => visorResult('8')}>8</button>
          <button onClick={() => visorResult('9')}>9</button>
          <button onClick={() => visorResult('÷')}>÷</button>
        </div>
        <div>
          <button onClick={() => visorResult('4')}>4</button>
          <button onClick={() => visorResult('5')}>5</button>
          <button onClick={() => visorResult('6')}>6</button>
          <button onClick={() => visorResult('x')}>x</button>
        </div>
        <div>
          <button onClick={() => visorResult('1')}>1</button>
          <button onClick={() => visorResult('2')}>2</button>
          <button onClick={() => visorResult('3')}>3</button>
          <button onClick={() => visorResult('-')}>-</button>
        </div>
        <div>
        <button className='clean' onClick={cleanAll}>C</button>
        <button onClick={() => visorResult('0')}>0</button>
        <button className='equal' onClick={visorEqual}>=</button>
        <button onClick={() => visorResult('+')}>+</button>
        </div>
      </section>
    </main>
  )
}

export default App
