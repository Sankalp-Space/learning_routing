import React from 'react'
import Link from 'next/link';

const NavbarPage = () => {
  return (
    <div>
       <nav className="container flex items-center justify-between mx-auto h-14">
        <Link href="/">Not the Home Page</Link>
        <div className="flex gap-2">
          <Link href="/performance">Performance</Link>
          <Link href="reliability">Reliability</Link>
        </div>
        </nav>
    </div>
  )
}

export default NavbarPage;
