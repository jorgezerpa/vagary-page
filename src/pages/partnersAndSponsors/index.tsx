import React from 'react'
import Image from 'next/image'
import { CTA1 } from '@/components/CTAs/partnership/CTA1'

const PartnersAndSponsors = () => {
  return (
    <>
      <div className='relative w-full bg-center bg-cover bg-no-repeat bg-fixed' style={{ backgroundImage:'url(/images/partners-card.png)' }}>
        <div className='rotate-0 bg-black py-20 md:py-56 bg-opacity-70 top-0 left-0 right-0 bottom-0 flex flex-col md:flex-row justify-center items-center  gap-5'>
          <div className='w-[150px] md:w-[200px] relative min-h-[300px] opacity-0 animate-[fadeIn_.5s_ease_forwards_.5s]'>
            <Image alt="" src="/logos/logo-vert.png" fill style={{ objectFit:'contain' }}/>
          </div>
          <div className='w-[1px] h-[300px] bg-white hidden md:block animate-[scaleY_.5s_ease_forwards] origin-center'></div>
          <div className='animate-[scaleY_.5s_ease_forwards_.5s] opacity-0 origin-top'>
            <h2 className='text-white text-3xl font-bold text-center md:text-left mb-3'>Partners and Sponsors</h2>
            <p className='tracking-wide max-w-[500px] text-white text-justify px-3'>Vagary Sports Management also has partnerships with the Real Madrid Foundation and Levante UD, which allows teams to access additional top-quality facilities such as the National Team Spanish Federation fields in Las Rozas and the Real Madrid Sports City.</p>
          </div>
        </div>
      </div>


      <div className='bg-[#121618] bg-gradient-to-b from-[#3d4246] to-[#0c0f11] px-5 md:px-20 py-5 md:py-32'>
        <p className='text-white text-xl md:text-2xl italic text-justify'>In addition, the Ebora Formacion Sports City is the headquarters of the Campus Experience and the Social Sports Schools of the Real Madrid Foundation. The company is also in the process of building a new multipurpose building, a space with stands to accommodate the public attending competitions, and a new leisure space to complement the current cafeteria service.</p>
      </div>

      <div className=' bg-center bg-fixed bg-no-repeat bg-cover' style={{ backgroundImage:'url(/images/footer-1.png)' }}>
          <div className='bg-black bg-opacity-70 py-20 lg:py-56  w-full h-full flex flex-col md:flex-row justify-center items-center'>
            <div className='flex-1 '>
              <div className='w-full relative min-h-[300px] min-w-[300px] md:min-h-[300px]'>
                <Image alt="" src="/images/real-levante.png" fill style={{ objectFit:'contain' }}/>
              </div>
            </div>
            <div className='flex-1 p-5 md:p-10 md:px-10 '>
              <p className='text-white text-xl md:text-2xl italic text-justify'>The partnership between Levante UD and Ebora Formacion, which was signed in 2021, aims to facilitate the transfer of the training and methodological identity of the Levante UD brand to Castilla - La Mancha, and specifically to the town of Cazalegas where the Sports City is located. Both entities will work together to promote the development of young footballers and coaches through opportunities, experiences, and training within Levante UD.</p>
            </div>        
          </div>
      </div>


      <div className='w-full flex justify-center'>
        <div className='flex flex-col md:flex-row-reverse justify-center items-center shadow-sm shadow-gray-400 my-20 overflow-hidden rounded-3xl  w-[90%]'>
            <div className='flex-1 w-full relative rounded-r-3xl overflow-hidden bg-center' >
              <div className='w-full bg-orange-50 relative min-h-[300px] min-w-[300px] md:min-h-[500px] bg-center bg-cover bg-no-repeat' style={{ backgroundImage:'url(/images/construyendo-futbol.png)' }}></div>
              <div className=' bg-gradient-to-r hidden md:block from-white via-[rgba(255,255,255,0)] to-[rgba(255,255,255,0)] absolute top-0 left-0 right-0 bottom-0 '></div>
              <div className=' bg-gradient-to-t md:hidden block from-white via-[rgba(255,255,255,0)] to-[rgba(255,255,255,0)] absolute top-0 left-0 right-0 bottom-0 '></div>
            </div>
            <div className='flex-1 p-5 md:p-10 md:px-10 '>
              <h2 className='text-center md:text-justify text-2xl text-gray-900 font-bold mb-10'>Coaching Training and <br /> Development</h2>
              <p className='text-lg md:text-xl italic text-justify'>Our partnership with construyendo futbol allows our clients to have access to private coaching courses, physical preparation and analysis of tactical formations by coaches working in the best clubs in Spain such as Real madrid, Levante, etc… </p>
              <div className='w-full flex justify-center mt-20 px-3 md:px-10 '>
                <button className='border border-gray-700 w-full py-2 text-xl text-gray-700 rounded-2xl'>See page</button>
              </div>
            </div>        
        </div>
      </div>


      <div className=' bg-center  bg-fixed bg-no-repeat bg-cover' style={{ backgroundImage:'url(/images/footer-2.png)' }}>
          <div className='py-20 lg:py-56 w-full h-full bg-black bg-opacity-70 flex flex-col md:flex-row-reverse justify-center items-center'>
            <div className='flex-1 '>
              <div className='w-full relative min-h-[300px] min-w-[300px] md:min-h-[300px]'>
                <Image alt="" src="/images/cazalegas.png" fill style={{ objectFit:'contain' }}/>
              </div>
            </div>
            <div className='flex-1 p-5 md:p-10 md:px-10 '>
              <p className='text-white text-xl md:text-2xl italic text-justify'>In addition to its partnerships with major soccer organizations, Vagary Sports Management has also formed an alliance with the Club Deportivo Cazalegas and Ebora Formacion. This partnership, announced in 2020, is committed to building a professional and enthusiastic project that aims to be different from the rest. All parties involved in the partnership emphasized the importance of taking this project seriously and working towards goals. </p>
            </div>        
          </div>
      </div>

      <div className='py-20'>
        <CTA1 />
      </div>

    </>
  )
}

export default PartnersAndSponsors