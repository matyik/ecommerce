import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch'

const Navbar = () => {
  const search = (e) => {
    e.preventDefault()
    console.log('bruh')
  }

  return (
    <div className='navbar'>
      <h2>EasyShop</h2>
      <form onSubmit={(e) => search(e)}>
        <input type='text' placeholder='Search Products' />
        <button>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
      <div className='nav-links'>
        <Link href='/cart' passHref>
          <span>
            <FontAwesomeIcon icon={faUser} />
            My Account
          </span>
        </Link>
        <Link href='/cart' passHref>
          <span>
            <FontAwesomeIcon icon={faShoppingCart} />
            Cart
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
