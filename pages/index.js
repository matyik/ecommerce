import Head from 'next/head'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'

export default function Home() {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setSlide(slide == 2 ? 0 : slide + 1)
    }, 10000)
  }, [slide])
  return (
    <>
      <Head>
        <title>EasyShop</title>
      </Head>
      <Navbar />
      <div className='slideshow'>
        <div
          className='slides'
          style={{ transform: `translateX(-${slide * 100}vw)` }}
        >
          <div className='slide slide-1'>
            <div className='slide-content'>
              <h2>Shop Tech</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
                qui quo quas rem natus deleniti repellat nobis odio fugiat
                nesciunt exercitationem, consequuntur possimus sed iusto at
                corrupti totam nam quam!
              </p>
              <button>Shop Tech</button>
            </div>
          </div>
          <div className='slide slide-2'>
            <div className='slide-content'>
              <h2>Shop Tech</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
                qui quo quas rem natus deleniti repellat nobis odio fugiat
                nesciunt exercitationem, consequuntur possimus sed iusto at
                corrupti totam nam quam!
              </p>
              <button>Shop Tech</button>
            </div>
          </div>
          <div className='slide slide-3'>
            <div className='slide-content'>
              <h2>Shop Tech</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
                qui quo quas rem natus deleniti repellat nobis odio fugiat
                nesciunt exercitationem, consequuntur possimus sed iusto at
                corrupti totam nam quam!
              </p>
              <button>Shop Tech</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
