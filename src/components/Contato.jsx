import React from 'react'
import styles from './Contato.module.css'
import foto from '../img/contato.jpg'
import Head from './Head'

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Aislan | Contato" description="Entre em contato"/>
      <img src={foto} alt="Máquina de Escrever" />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>aislandnjunior@gmail.com</li>
          <li>+81 98789-1768</li>
          <li>Recife</li>
        </ul>
      </div>
        
    </section>
  )
}

export default Contato