'use client'
import React from 'react'
import Image from 'next/image'
import mobile from './starter-kit/design/mobile-design.jpg'
import desktop from './starter-kit/design/desktop-design.jpg'
import omellete from './starter-kit/assets/images/image-omelette.jpeg'

function Page() {

  const [opacity, setOpacity] = React.useState(0.5)
  const [designOverlay, setDesignOverlay] = React.useState('none') // none | mobile | desktop

  function handleDesignOverlay(event) {

    if (event.target.name === 'desktop' && designOverlay === 'desktop') {
      setDesignOverlay('none')
      return
    }

    if (event.target.name === 'mobile' && designOverlay === 'mobile') {
      setDesignOverlay('none')
      return
    }

    if (event.target.name === 'desktop') {
      setDesignOverlay('desktop')
      return
    }

    if (event.target.name === 'mobile') {
      setDesignOverlay('mobile')
      return
    }

  }

  return (
    <div className='min-h-screen min-h-dvh grid grid-cols-1 grid-rows-[auto_1fr] place-items-center bg-recipe-page-rose-50 font-recipe-page-outfit md:bg-recipe-page-stone-100'>

      {/* header */}
      <header className='flex w-full gap-10 justify-center'>
        <button name='mobile' onClick={handleDesignOverlay}>Display Mobile</button>
        <button name='desktop' onClick={handleDesignOverlay}>Display Desktop</button>

        <div>
          <label htmlFor='opacity' className='mr-2'>Opacity</label>
          <input
            id='opacity'
            type='range'
            name='opacity'
            min={0}
            max={1}
            step={0.1}
            value={opacity}
            onChange={(event) => setOpacity(event.target.value)}
          />
        </div>
      </header>
      {/* end header */}

      <main
        className='col-start-1 -col-end-1  row-start-2 -row-end-2 w-[375px] md:w-full flex flex-col 
        items-center z-0 gap-[36px] md:bg-recipe-page-stone-100 md:py-32'
      // style={{ height: '1955px' }}
      >

        <div className='flex flex-col gap-[36px] bg-white max-w-[740px] md:p-10 md:rounded-3xl'
        // style={{ marginTop: '120px' }}
        >

          <div>
            <Image src={omellete} alt="Omellete" className='md:rounded-xl' />
          </div>

          <div className='grid grid-cols-[32px_1fr_32px] md:grid-cols-[2px_1fr_2px] w-full gap-y-[36px] '>
            <section className='flex flex-col gap-6 pt-[2px] col-start-2'>
              <h1 className='text-[37px] md:text-[41px] leading-[2.3rem] md:leading-[2.9rem] font-recipe-page-young text-recipe-page-stone-900 tracking-[-0.015em]'>
                Simple Omelette Recipe
              </h1>

              <p className='leading-[1.5rem] text-recipe-page-stone-600'>
                An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked
                to perfection, optionally filled with your choice of cheese, vegetables, or meats.
              </p>
            </section>

            {/* preparation time */}
            <section className='col-start-2'>

              <div className='flex flex-col justify-center bg-recipe-page-rose-50 px-6 py-4 gap-[13px] flex-1 w-full rounded-lg'>

                <h2 className='text-xl text-recipe-page-rose-800 font-semibold'>
                  Preparation time
                </h2>

                <ul className='flex flex-col ml-2 gap-2 text-[16px] pb-2'>
                  <li className="flex items-center gap-7">
                    <div className='h-1 w-1 bg-recipe-page-rose-800 rounded-full'></div>
                    <div className='text-recipe-page-stone-600'>
                      <span className="font-semibold" >Total</span>: Approximately 10 minutes
                    </div>
                  </li>
                  <li className="flex items-center gap-7">
                    <div className='h-1 w-1 bg-recipe-page-rose-800 rounded-full'></div>
                    <div className='text-recipe-page-stone-600'>
                      <span className="font-semibold">Preparation</span>: 5 minutes
                    </div>
                  </li>
                  <li className="flex items-center gap-7">
                    <div className='h-1 w-1 bg-recipe-page-rose-800 rounded-full'></div>
                    <div className='text-recipe-page-stone-600'>
                      <span className="font-semibold">Cooking</span>: 5 minutes
                    </div>
                  </li>
                </ul>

              </div>
            </section>
            {/* END preparation time */}

            {/* ingredients */}
            <section className='col-start-2'>

              <div className='flex flex-col justify-center gap-[28px] w-full pb-6 border-b border-b-recipe-page-stone-600/25'>

                <h2 className='text-[28px] leading-5 text-recipe-page-brown-800 font-recipe-page-young font-semibold'>
                  Ingredients
                </h2>

                <ul className='flex flex-col ml-2 gap-2 text-[16px] pb-2'>
                  <li className="flex items-center gap-7">
                    <div className='h-1 w-1 bg-recipe-page-brown-800 rounded-full'></div>
                    <div className='text-recipe-page-stone-600'>
                      <span>2-3 large eggs</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-7">
                    <div className='h-1 w-1 bg-recipe-page-brown-800 rounded-full'></div>
                    <div className='text-recipe-page-stone-600'>
                      <span>Salt, to taste</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-7">
                    <div className='h-1 w-1 bg-recipe-page-brown-800 rounded-full'></div>
                    <div className='text-recipe-page-stone-600'>
                      <span>Pepper, to taste</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-7">
                    <div className='h-1 w-1 bg-recipe-page-brown-800 rounded-full'></div>
                    <div className='text-recipe-page-stone-600'>
                      <span>1 tablespoon of butter or oil</span>
                    </div>
                  </li>
                  <li className="flex items-center flex-1 gap-7">
                    <div className='h-1 w-1 bg-recipe-page-brown-800 rounded-full shrink-0'></div>
                    <div className='text-recipe-page-stone-600'>
                      <span>Optional fillings: cheese, diced vegetables, cooked meats, herbs</span>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
            {/* END ingredients */}

            {/* Instructions */}
            <section className='col-start-2'>

              <div className='flex flex-col gap-[27px] w-full pb-[30px] border-b border-b-recipe-page-stone-600/25'>

                <h2 className='text-[28px] leading-5 text-recipe-page-brown-800 font-recipe-page-young font-semibold'>
                  Instructions
                </h2>

                <ul className='flex flex-col gap-2 text-[16px] ml-2 '>

                  <ol className="flex items-start justify-between md:justify-start gap-5">
                    <span className='text-recipe-page-brown-800 rounded-full font-bold'>1.</span>
                    <div className='text-recipe-page-stone-600'>
                      <span className="font-bold" >Beat the eggs</span>: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed.
                      You can add a tablespoon of water or milk for a fluffier texture.
                    </div>
                  </ol>

                  <ol className="flex items-start justify-between md:justify-start gap-[18px]">
                    <span className='text-recipe-page-brown-800 rounded-full font-bold'>2.</span>
                    <div className='text-recipe-page-stone-600'>
                      <span className="font-bold">Heat the pan</span>: Place a non-stick frying pan over medium heat and add butter or oil.
                    </div>
                  </ol>

                  <ol className="flex items-start justify-between md:justify-start gap-[18px]">
                    <span className='text-recipe-page-brown-800 rounded-full font-bold'>3.</span>
                    <div className='text-recipe-page-stone-600'>
                      <span className="font-bold">Cook the omelette</span>: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure
                      the eggs evenly coat the surface.
                    </div>
                  </ol>

                  <ol className="flex items-start justify-between md:justify-start gap-[18px]">
                    <span className='text-recipe-page-brown-800 rounded-full font-bold'>4.</span>
                    <div className='text-recipe-page-stone-600'>
                      <span className="font-bold">Add fillings (optional)</span>: When the eggs begin to set at the edges but are still slightly runny in the
                      middle, sprinkle your chosen fillings over one half of the omelette.
                    </div>
                  </ol>

                  <ol className="flex items-start justify-between md:justify-start gap-[18px]">
                    <span className='text-recipe-page-brown-800 rounded-full font-bold'>5.</span>
                    <div className='text-recipe-page-stone-600'>
                      <span className="font-bold">Fold and serve</span>: As the omelette continues to cook, carefully lift one edge and fold it over the
                      fillings. Let it cook for another minute, then slide it onto a plate.
                    </div>
                  </ol>

                  <ol className="flex items-start justify-between md:justify-start gap-[18px]">
                    <span className='text-recipe-page-brown-800 rounded-full font-bold'>5.</span>
                    <div className='text-recipe-page-stone-600'>
                      <span className="font-bold">Enjoy</span>: Serve hot, with additional salt and pepper if needed.
                    </div>
                  </ol>

                </ul>
              </div>
            </section>
            {/* END Instructions */}

            {/* Nutrition */}
            <section className='col-start-2 text-recipe-page-stone-600'>

              <div className='flex flex-col gap-[26px] w-full'>

                <h2 className='text-[28px] leading-5 text-recipe-page-brown-800 font-recipe-page-young font-semibold'>
                  Nutrition
                </h2>

                <p>
                  The table below shows nutritional values per serving without the additional fillings.
                </p>

                <div className='flex flex-col '>

                  <div className='flex border-b pb-3 border-b-recipe-page-stone-600/25'>
                    <div className='flex-1'>
                      <span className='pl-8'>Calories</span>
                    </div>
                    <div className='flex-1'>
                      <span className='pl-2 text-recipe-page-brown-800 font-semibold'>277kcal</span>
                    </div>
                  </div>

                  <div className='flex border-b py-[11px] border-b-recipe-page-stone-600/25'>
                    <div className='flex-1'>
                      <span className='pl-8'>Carbs</span>
                    </div>
                    <div className='flex-1'>
                      <span className='pl-2 text-recipe-page-brown-800 font-semibold'>0g</span>
                    </div>
                  </div>

                  <div className='flex border-b py-[11px] border-b-recipe-page-stone-600/25'>
                    <div className='flex-1'>
                      <span className='pl-8'>Protein</span>
                    </div>
                    <div className='flex-1'>
                      <span className='pl-2 text-recipe-page-brown-800 font-semibold'>20g</span>
                    </div>
                  </div>

                  <div className='flex border-b py-[11px] border-b-recipe-page-stone-600/25'>
                    <div className='flex-1'>
                      <span className='pl-8'>Fat</span>
                    </div>
                    <div className='flex-1'>
                      <span className='pl-2 text-recipe-page-brown-800 font-semibold'>22g</span>
                    </div>
                  </div>

                </div>

              </div>
            </section>
            {/* END Nutrition */}

          </div>

        </div>

      </main >

      {/* design overlays */}
      < section className='col-start-1 -col-end-1 row-start-2 -row-end-2 z-10' >
        {designOverlay === 'mobile' && <Image src={mobile} alt="Mobile" style={{ opacity }} />
        }
        {designOverlay === 'desktop' && <Image src={desktop} alt="desktop" style={{ opacity }} />}
      </section >
      {/* END design overlays */}

    </div >
  )
}

export default Page