import Card from '../../components/Card'
import Title from '../../components/Title'
import image01 from '../../images/image01.jpg'
import image02 from '../../images/image02.jpg'
import image03 from '../../images/image03.jpg'
import image04 from '../../images/image04.jpg'


export default function Content() {
    return (
      <div className='flex flex-col items-center justify-center flex-wrap h-auto p-6'>
        <Title>Come be part of our history!</Title>
        <div className="flex flex-row items-center h-auto justify-center sm:flex-col sm:w-full">
          <Card 
            srcImage={image01} 
            altImage='Cachorro ao lado de caixas de encomenda' 
            className={`h-1/6 w-1/4 mb-16 ml-[-3rem] rounded-lg sm:w-full sm:ml-0`}/>
          <Card 
            srcImage={image02} 
            altImage='Tela de um notebook fazendo compras online' 
            className={`h-1/6 w-1/4 mt-16 ml-[-3rem] rounded-lg sm:w-full sm:ml-0 sm:mt-0`} />
          <Card 
            srcImage={image03} 
            altImage='Entregador organizando caixas de encomendas no automóvel' 
            className={`h-1/6 w-1/4 mb-16 ml-[-3rem] rounded-lg sm:w-full sm:ml-0 sm:mt-16`}/>
          <Card 
            srcImage={image04} 
            altImage='Depósito com caixas de encomendas empilhadas' 
            className={`h-1/6 w-1/4 mt-16 ml-[-3rem] rounded-lg sm:w-full sm:ml-0 sm:mt-0`}/>
        </div>
      </div>
    )
  }