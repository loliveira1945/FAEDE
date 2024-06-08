import Card from '../../components/Card'
import Title from '../../components/Title'
import image01 from '../../images/image01.jpg'
import image02 from '../../images/image02.jpg'
import image03 from '../../images/image03.jpg'
import image04 from '../../images/image04.jpg'


export default function Content() {
    return (
      <div className='flex flex-col items-center justify-center flex-wrap h-auto p-6'>
        <Title>Venha fazer parte da nossa história!</Title>
        <div className="flex flex-row flex-wrap items-center h-auto justify-center">
          <Card 
            srcImage={image01} 
            altImage='Caixas de produtos dentro de um caminhão' 
            className={`h-1/6 w-1/4 mb-16 ml-[-3rem] rounded-lg`}/>
          <Card 
            srcImage={image02} 
            altImage='Entregador de moto levando encomenda' 
            className={`h-1/6 w-1/4 mt-16 ml-[-3rem] rounded-lg`} />
          <Card 
            srcImage={image03} 
            altImage='Van na rodovia' 
            className={`h-1/6 w-1/4 mb-16 ml-[-3rem] rounded-lg`}/>
          <Card 
            srcImage={image04} 
            altImage='Van na rodovia' 
            className={`h-1/6 w-1/4 mt-16 ml-[-3rem] rounded-lg`}/>
        </div>
      </div>
    )
  }