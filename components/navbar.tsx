import Image from "next/image"
import NavItems from "./navItems"

const Navbar = () => {
  return (
    <nav>
      <link href="/">
        <div className="flex items-center gap-2.5 cursor pointer"> 
          <Image src="/images/logo.png" alt="Converso Logo" width={46} height={44} />
        </div>
      </link>

      <div className="flex items-center gap-8">
        <NavItems />
        <p>Sign In</p>
      </div>
    </nav>
  )
}

export default Navbar