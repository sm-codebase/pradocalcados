import React from 'react';
import Iframe from 'react-iframe'

const Present = () => {
  return (
    <div id='projects' className='w-full pt-20'>
      <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Quem é a Prado?</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                Um pouco sobre a história de uma grande empresa de calçados de segurança, 
                que chega para revolucionar o mercado, com agilidade e preço garantidos.
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
