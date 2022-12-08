import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'

export default function Home() {
  const [Part1, setPart1] = useState(0)
  const [Part2, setPart2] = useState(0)
  const [Win, setWin] = useState(null)
  const [Result, setResult] = useState(null)

  let stop = false
  const resultChange = event =>{
    const result = event.target.value.replace(/\D/g, '')

    setResult(result)
  }
  useEffect(()=>{
        function getRandomNumber(max){
          return Math.floor(Math.random()* max) +1;
        }
        function setGame(){
          if(stop == false){
            setPart1(getRandomNumber(100))
            setPart2(getRandomNumber(100))
            stop = true
          }
        }
        function verifyGame(){
          const Response = (Part1+Part2)
          const victory = document.getElementById("victory")
          if(Result == Response){
            setWin("Você acertou")
            victory.style.color = "darkgreen"
          }
          else{
            setWin("Você errou")
            victory.style.color = "red"
          }
        }
        function startGame(){
          const start = document.getElementById("start") 
          const verify = document.getElementById("verify")

          verify.addEventListener('click', function verifyClick(){
              verifyGame()
          })
          start.addEventListener('click', function handleClick()  {
              setGame()   
          })
          
        }
        startGame()
    
  })
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.title}>
            <h1>O jogo da adição(fase de testes)</h1>
        </div>
        <div className={styles.operation}>
          <div className={styles.border}>
            <h1>{Part1}</h1>
            <h1>{Part2}</h1> 
            <form className={styles.form}>
              <input id="result" type="number" placeholder='Coloque o resultado' value={Result} onChange={resultChange}></input>
            </form>
            <div className={styles.victory}>
              <a id="victory">{Win}</a>
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <a id="start">Começar</a>
          <a id="verify">Verificar</a>
        </div>
      </div>
    </div>
  )
}
