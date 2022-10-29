import React from 'react';
import Iframe from 'react-iframe'

const Present = () => {
  return (
    <div id='projects' className='w-full pt-20'>
      <section className="pt-20 pb-48 bg-gradient-to-r from-[#770000] to-[#BD0000]">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <p className='text-white font-thin'>Parceiros selecionados</p>
                <h2 className="text-white text-4xl font-bold">Como comprar?</h2>
                <p className="text-white font-thin leading-relaxed m-4 text-blueGray-500">
                Desenvolvemos parceiria com as melhores empresas da região de Campinas
                </p>
                <div className='justify-center w-full h-full'>
              <Iframe 
                    url="https://www.youtube.com/embed/HWJ7FI6ieCA"
                    width='100%'
                    height='100%'
                    
                    />
                    
              </div>
              </div>
            </div>
            
          </div>
        </section>
        
    </div>
  );
};

export default Present;
