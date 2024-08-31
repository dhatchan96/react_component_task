import propSection from '../config/propSection.json'

const PropSection = () => {
    return (
        <section className="features-icons bg-light text-center">
            <div className="container">
                <div className="row">
                    {
                        propSection.map((item) => (
                            <div className="col-lg-4" key={item.Title}>
                                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                    <div className="features-icons-icon d-flex"><i className={`${item.Image} m-auto text-primary`}></i></div>
                                    <h3>{item.Title}</h3>
                                    <p className="lead mb-0">{item.Description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default PropSection;