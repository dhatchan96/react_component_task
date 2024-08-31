import testimonials from '../config/testimonials.json'

const Testimonials = () => {
    return (
        <section className="testimonials text-center bg-light">
            <div className="container">
                <h2 className="mb-5">What people are saying...</h2>
                <div className="row">
                    {
                        testimonials.map((testimonial) => (
                            <div className="col-lg-4" key={testimonial.title}>
                            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src={testimonial.Image} alt="..." />
                            <h5>{testimonial.title}</h5>
                            <p className="font-weight-light mb-0">"{testimonial.description}"</p>
                            </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
        
    )
}

export default Testimonials;