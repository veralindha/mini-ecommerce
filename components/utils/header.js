export default function Header() {
    return (
        <header className="masthead">
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6">
                        {/* Mashead text and app badges*/}
                        <div className="mb-5 mb-lg-0 text-center text-lg-start">
                            <h1 className="display-1 lh-1 mb-3">Aplikasi Penjualan HP No 1</h1>
                            <p className="lead fw-normal text-muted mb-5">Dengan Produk Lengkap Sesuai Kebutuhan Anda !</p>
                            <div className="d-flex flex-column flex-lg-row align-items-center">
                                <a className="me-lg-3 mb-4 mb-lg-0" href="#!"><button className="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0" data-bs-toggle="modal" data-bs-target="#feedbackModal">
                                    <span className="d-flex align-items-center">
                                        <i className="fa-solid fa-arrow-right" />
                                        <span className="small ms-1">Selengkapnya</span>
                                    </span>
                                </button></a>
                                <a href="#!"><button className="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0" data-bs-toggle="modal" data-bs-target="#feedbackModal">
                                    <span className="d-flex align-items-center">
                                        <i className="fa-solid fa-cart-shopping" />
                                        <span className="small ms-1">Produk</span>
                                    </span>
                                </button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        {/* Masthead device mockup feature*/}
                        <div className="masthead-device-mockup">
                            <svg className="circle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="circleGradient" gradientTransform="rotate(45)">
                                        <stop className="gradient-start-color" offset="0%" />
                                        <stop className="gradient-end-color" offset="100%" />
                                    </linearGradient>
                                </defs>
                                <circle cx={50} cy={50} r={50} /></svg><svg className="shape-1 d-none d-sm-block" viewBox="0 0 240.83 240.83" xmlns="http://www.w3.org/2000/svg">
                                <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03" transform="translate(120.42 -49.88) rotate(45)" />
                                <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03" transform="translate(-49.88 120.42) rotate(-45)" /></svg><svg className="shape-2 d-none d-sm-block" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx={50} cy={50} r={50} /></svg>
                            <div className="device-wrapper">
                                <div className="device" data-device="iPhoneX" data-orientation="portrait" data-color="black">
                                    <div className="screen bg-black">
                                        {/* PUT CONTENTS HERE:*/}
                                        {/* * * This can be a video, image, or just about anything else.*/}
                                        {/* * * Set the max width of your media to 100% and the height to*/}
                                        {/* * * 100% like the demo example below.*/}
                                        <video muted="muted" autoPlay loop style={{ maxWidth: '100%', height: '100%' }}><source src="/dist/img/demo-screen.mp4" type="video/mp4" /></video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}