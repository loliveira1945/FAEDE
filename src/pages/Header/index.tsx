import Navigation from '../../components/Navigation'
import logoHeader from '../../images/logoFAEDE.png'

export default function Header() {
    return (
      <div className='flex flex-wrap items-center justify-around w-full container mx-auto px-4 md:px-8 sm:m-0 sm:p-0 border-b border-slate-800'>
        <a href='/'>
          <img src={logoHeader} alt='Logo FAEDE' width="240px"/>
        </a>
        <Navigation />
      </div>
    )
  }