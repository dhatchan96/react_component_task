import imageShowClass from '../config/imageShowClass'

const ImageShowClass = () => {
    return (
        <section className="showcase">
            <div className="container-fluid p-0">

                {
                    imageShowClass.map((image) => (
                        <div className='row g-0' key={imageShowClass.Title}>
                            <div className={`col-lg-6 ${image.Index % 2 == 0? 'order-lg-2':'' } text-white showcase-img`} style={{ backgroundImage: `url(${image.Image})`}}></div>
                            <div className="${image.Index % 2 == 0} ? col-lg-6 order-lg-1 my-auto showcase-text : col-lg-6 my-auto showcase-text">
                            <h2>{image.Title}</h2>
                            <p className="lead mb-0">{image.Description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default ImageShowClass;