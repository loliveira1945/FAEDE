import Text from '../../components/Text'
import Card from '../../components/Card'
import image01 from '../../images/company-facade.png'
import logoHeader from '../../images/logoFAEDE.png'


export default function AboutUs() {
    return <>
    
        <div className='flex flex-row justify-evenly m-16 sm:flex-wrap'>
            <div>
                <Text>
                    Welcome to Faede (Fast Efficient Delivery), your premier choice for reliable 
                    and speedy delivery services. Founded by Lucas Alves Oliveira in 1942 in London, 
                    amid the turmoil of World War II, Faede began its journey by aiding the British 
                    Army and the English population with essential deliveries during a time of great 
                    need. Our roots are deeply embedded in resilience and dedication, qualities that 
                    have driven our growth and success over the decades.
                </Text>
                <Text>
                    At Faede, we understand the critical importance of timely deliveries in both personal 
                    and business contexts. Whether it's a small parcel containing a cherished gift or a large 
                    shipment crucial to your business operations, our team of experienced professionals works 
                    tirelessly to meet your needs and exceed your expectations. We leverage advanced technology 
                    and a robust logistics network to provide top-notch delivery solutions tailored to your 
                    specific requirements.
                </Text>
                <Text>
                    Our mission is to offer unparalleled service that combines speed, reliability, and customer satisfaction. 
                    We are committed to continuous improvement and innovation, ensuring that our delivery processes are efficient 
                    and that our services remain at the forefront of the industry. We pride ourselves on our ability to deliver 
                    packages with precision and care, ensuring they arrive at their destination in perfect condition.
                </Text>
            </div>
            <Card 
                srcImage={image01} 
                altImage='Cachorro ao lado de caixas de encomenda' 
                className={`h-1/6 w-1/3 rounded-lg sm:w-full sm:ml-0`}/>

        </div>
        <div className='flex flex-row justify-evenly m-16 mt-6 sm:flex-wrap'>
            <Card 
                srcImage={logoHeader} 
                altImage='Cachorro ao lado de caixas de encomenda' 
                className={`h-1/6 w-1/3 mb-16 rounded-lg sm:w-full sm:ml-0`}/>
            <div className='flex flex-col justify-center'>
                <Text>
                    Our dedicated customer support team is always ready to assist you, providing real-time updates and addressing 
                    any concerns you may have. At Faede, customer satisfaction is not just a goal but a core value that drives 
                    everything we do. We believe that every delivery is an opportunity to demonstrate our commitment to excellence.
                </Text>
                <Text>
                    Thank you for choosing Faede. We look forward to serving you and making every delivery a success. 
                    Whether you're sending or receiving, you can trust Faede to get your packages where they need to be, 
                    quickly and efficiently.
                </Text>
            </div>
        </div>
    </>
  }