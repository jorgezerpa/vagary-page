import React from 'react'
import Image from 'next/image'

const ITEMS = [
  { path:'/', name:'home' },
  { path:'/aboutUs', name:'about us' },
  { path:'/facilities', name:'facilities' },
  { path:'/partnersAndSponsors', name:'partners' },
  { path:'/tourOptions', name:'tour' },
  { path:'/contact', name:'contact' },
]

export const Footer = () => {
  return (
    <div className='flex w-full flex-col lg:flex-row'>

        <div className='flex justify-center items-center min-h-screen w-full bg-center bg-no-repeat bg-cover' style={{ backgroundImage:'url(/images/footer-1.png)' }}>
          <div className='w-[80%] px-2'>
            <h2 className='text-4xl text-white font-bold mb-14'>Contact Us</h2>
            <p className='text-white text-xl font-medium max-w-[500px] mb-14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <form action="" className=''>
              <div className='flex flex-col mb-12'>
                <label htmlFor="" className='text-lg text-white font-bold '>Name</label>
                <input type="text" className={`text-xl w-full py-1 outline-none bg-transparent border-b-white border-b-2 text-white`} />
              </div>
              <div className='flex flex-col mb-12'>
                <label htmlFor="" className='text-lg text-white font-bold '>Email</label>
                <input type="text" className={`text-xl w-full py-1 outline-none bg-transparent border-b-white border-b-2 text-white`} />
              </div>
              <div className='flex flex-col mb-12'>
                <label htmlFor="" className='text-lg text-white font-bold'>Message</label>
                <textarea className={`text-xl w-full py-1 outline-none bg-transparent border-b-white border-b-2 text-white`} ></textarea>
              </div>
            </form>
            <div className='flex w-full justify-end'>
              <button className='px-14 py-1 rounded-lg border-white border-2 outline-none text-white font-bold text-xl'>Send</button>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center gap-7 text-white font-bold text-lg min-h-screen w-full bg-center bg-no-repeat bg-cover' style={{ backgroundImage:'url(/images/footer-2.png)' }}>
          <Image src={'/logos/logo.png'} alt="" width={150} height={150} />
          {ITEMS.map(item=>(
            <div key={item.path+'footer'}>
              { item.name }
            </div>
          ))}
        </div>

    </div>
  )
}