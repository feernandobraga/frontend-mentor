import React from 'react'
import imageQrCode from './assets/image-qr-code.png'
import Image from 'next/image';

function QRCodeApp() {

  console.log(imageQrCode);


  return (
    <main className='bg-slate-300 h-dvh grid grid-rows-1'>

      {/* card */}
      <div className='place-self-center p-4 bg-white rounded-2xl max-w-xs flex flex-col gap-5 drop-shadow'>

        {/* <Image src={imageQrCode} alt="QR Code" /> */}
        <img src='/image-qr-code.png' alt="QR Code" className='rounded-2xl' />

        <p className='font-bold text-center px-8 text-slate-900 leading-5'>
          Improve your front-end skills by building projects
        </p>

        <p className='text-[15px] font-normal font-sans text-slate-500 px-6 text-center mb-4' >
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>

      </div>
      {/* END card */}

      {/* footer */}
      <div className="text-center font-sans">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Fernando</a>.
      </div>
      {/* END footer */}


    </main>
  )
}

export default QRCodeApp