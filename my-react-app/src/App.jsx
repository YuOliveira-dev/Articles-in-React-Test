import React from 'react'


import './styles/App.css'
import {Navbar} from './components/Navbar/Navbar'

import { Article } from "./components/Article/Article"

import ArticleImg1 from "./assets/images/Article-1.jpg"
import ArticleImg2 from "./assets/images/Article-2.jpg"
import ArticleImg3 from "./assets/images/Article-3.jpg"
import ArticleImg4 from "./assets/images/Article-4.jpg"
import { Counter } from './components/Counter/Counter'

// Componente em classe é uma classe que herda a classe Component do React,
// E retorna HTML dentro do metodo render.

class App extends React.Component  {

  // Metodo responsável por renderizar o conteudo HTML do nosso componente
  render () {
    
    return (
      <>
      <Navbar />
      {/* <Counter /> */}

      <section id="articles">

<Article title="Designing Dashboards" provider="NASA" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laudantium est blanditiis ipsa accusantium, repellat cum molestias inventore eum, iure minus fugit obcaecati adipisci odio at, nostrum unde autem ratione." image={ArticleImg1}/>

<Article title="Vibrant Portraits of 200" provider="SpaceNews" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laudantium est blanditiis ipsa accusantium, repellat cum molestias inventore eum, iure minus fugit obcaecati adipisci odio at, nostrum unde autem ratione." image={ArticleImg2}/>

<Article title="36 Days of malayam type" provider="SpaceFlight Now" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laudantium est blanditiis ipsa accusantium, repellat cum molestias inventore eum, iure minus fugit obcaecati adipisci odio at, nostrum unde autem ratione." image={ArticleImg3}/>

<Article title="Designing Dashboards" provider="NASA" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laudantium est blanditiis ipsa accusantium, repellat cum molestias inventore eum, iure minus fugit obcaecati adipisci odio at, nostrum unde autem ratione." image={ArticleImg4}/>

</section>

      </>

      
    )
  }
  }

export default App
