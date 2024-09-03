import React from 'react'
import blogImage from './assets/images/illustration-article.svg'
import avatar from './assets/images/image-avatar.webp'
import Image from 'next/image'

function BlogPreviewApp() {
  return (
    <main className='bg-blog-preview-card-yellow grid grid-cols-1 h-dvh font-blog-preview-card text-gray-950'>

      <section className='bg-white max-w-[327px] sm:max-w-[384px] place-self-center border-solid border-[1px] rounded-[20px] border-gray-950 p-6 drop-shadow-[8px_8px_0px_rgba(3,7,18,1)]'>

        <div className='flex flex-col gap-6'>

          <Image
            className='rounded-[10px]'
            src={blogImage}
            alt='Illustration of a blog article'
          />

          <div className='flex flex-col gap-3'>
            <span className='px-3 py-1 bg-blog-preview-card-yellow self-start rounded leading-6 font-extrabold text-[12px] sm:text-[14px]'>
              Learning
            </span>

            <p className='font-medium sm:text-[14px]'>
              Published 21 Dec 2023
            </p>

            <h1 className='font-extrabold text-[20px] sm:text-2xl'>
              HTML & CSS foundations
            </h1>

            <p className='text-gray-500 font-medium text-[14px] sm:text-[16px]'>
              These languages are the backbone of every website, defining structure, content, and presentation.
            </p>
          </div>

          <div className='flex gap-3 items-center'>
            <Image
              className='rounded-full'
              src={avatar}
              alt='Avatar of the author'
              width={32}
              height={32}

            />
            <span className='font-extrabold'>Greg Hooper</span>
          </div>
        </div>

      </section>

    </main>
  )
}

export default BlogPreviewApp