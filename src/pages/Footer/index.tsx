import { Instagram, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <div className='flex flex-wrap items-center justify-around w-full container mx-auto px-4 md:px-8 border-t border-slate-800'>        
        <div className='flex items-center'>
          <a className='p-6'  
            href='https://www.instagram.com/oliveira.vargass/' target='_blank' rel="noreferrer">
            <Instagram />
          </a>
          <a className='p-6'
            href='https://github.com/loliveira1945' target='_blank' rel="noreferrer">
            <Github />
          </a>
          <a className='p-6'
          href='https://www.linkedin.com/in/lucasalvesoliveira2042/' target='_blank' rel="noreferrer">
            <Linkedin />
          </a>
        </div>
        <p className='text-center overflow-x-auto'>Todos os direitos reservados © e desenvolvido por Lucas Alves Oliveira.</p>
    </div>
  )
}