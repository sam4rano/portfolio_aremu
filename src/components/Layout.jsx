import Experience from "./Experience"
import Footer from "./Footer"
import Herosection from "./Herosection"
import NavBar from "./NavBar"
import Publication from "./Publication"

const Layout = () => {
  return (
	<div>
		<NavBar />
		<Herosection />
		<Experience />
		<Publication />
		<Footer />
	</div>
  )
}

export default Layout