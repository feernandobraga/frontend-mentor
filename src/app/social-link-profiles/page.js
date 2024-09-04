'use client'
import React from 'react'
import Image from 'next/image'
import mobileDesign from './starter/design/mobile-design.jpg'
import avatarJessica from './starter/assets/images/avatar-jessica.jpeg'

function SocialLinkProfilesApp() {

  const [showOverlay, setShowOverlay] = React.useState(false)
  const [opacity, setOpacity] = React.useState(0.5)

  return (
    <main className='bg-social-link-profiles-grey-900 h-dvh grid grid-cols-1 grid-rows-[min-content_1fr]'>

      <div className='text-white text-center'>
        <button
          className='bg-social-link-profiles-grey-800 p-3 rounded-lg mx-2'
          onClick={() => setShowOverlay(!showOverlay)}
        >
          Show Overlay
        </button>
        <input
          className='mx-2'
          type='range'
          min='0.1'
          max='1'
          step='0.1'
          value={opacity}
          onChange={(event) => { setOpacity(event.target.value) }} />
      </div>

      {/* card */}
      <div className='text-white place-self-center relative'>

        <div className='max-w-[375px] sm:w-[384px] flex flex-col items-center p-6 gap-[30px] bg-social-link-profiles-grey-800 rounded-xl'
          style={showOverlay ? { position: 'absolute', top: '0' } : {}} // stack the elements if the overlay is shown
        >

          {/* avatar */}
          <Image src={avatarJessica} alt="Jessica" className='rounded-full block' height={100} />


          {/* card header */}
          <div className='flex flex-col gap-2 items-center '>

            <h1 className='text-3xl font-bold'>
              Jessica Randall
            </h1>

            <p className='text-base font-semibold text-social-link-profiles-green-500 tracking-wider'>
              London, United Kingdom
            </p>

          </div>
          {/* END card header */}

          <p className='tracking-[0.030rem]'>
            "Front-end developer and avid reader."
          </p>

          <div className='flex flex-col gap-4 w-full font-bold leading-[1.80]'>
            <button className='p-3 bg-social-link-profiles-grey-700 rounded-md hover:bg-social-link-profiles-green-500 hover:text-social-link-profiles-grey-900'>
              Github
            </button>
            <button className='p-3 bg-social-link-profiles-grey-700 rounded-md hover:bg-social-link-profiles-green-500 hover:text-social-link-profiles-grey-900'>
              Frontend
              Mentor</button>
            <button className='p-3 bg-social-link-profiles-grey-700 rounded-md hover:bg-social-link-profiles-green-500 hover:text-social-link-profiles-grey-900'>
              LinkedIn
            </button>
            <button className='p-3 bg-social-link-profiles-grey-700 rounded-md hover:bg-social-link-profiles-green-500 hover:text-social-link-profiles-grey-900'>
              Twitter
            </button>
            <button className='p-3 bg-social-link-profiles-grey-700 rounded-md hover:bg-social-link-profiles-green-500 hover:text-social-link-profiles-grey-900'>
              Instagram
            </button>
          </div>
        </div>

        {/* overlay */}
        {showOverlay && (
          <Image src={mobileDesign} alt="Social Link Profiles"
            className='scale-[1.15] h-[660px] object-cover'
            style={{ opacity }}
          />
        )}

      </div>



    </main>
  )
}

export default SocialLinkProfilesApp