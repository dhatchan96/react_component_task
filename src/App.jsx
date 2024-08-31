import Nav from "./components/Nav"
import Header from "./components/Header"
import PropSection from "./components/PropSection"
import ImageShowClass from "./components/ImageShowClass"
import Testimonials from "./components/Testimonials"
import CallToAction from "./components/CallToAction"
import Footer from "./components/Footer"
function App() {

  return (
    <>
        <Nav/>
        <Header/>
        <PropSection/>        
        {/* <!-- Image Showcases--> */}
        <ImageShowClass/>
        {/* <!-- Testimonials--> */}
        <Testimonials/>
        {/* <!-- Call to Action--> */}
        <CallToAction/>
        {/* <!-- Footer--> */}
        <Footer/>
        {/* <!-- Bootstrap core JS--> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        {/* <!-- Core theme JS--> */}
        <script src="js/scripts.js"></script>
        {/* <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->
        <!-- * *                               SB Forms JS                               * *-->
        <!-- * * Activate your form at https://startbootstrap.com/solution/contact-forms * *-->
        <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *--> */}
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
    </>
  )
}

export default App
