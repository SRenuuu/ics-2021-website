import React, {Col, Container, Row} from 'react-bootstrap';
import Isotope from 'isotope-layout';

// import GLightbox from 'glightbox';
// import 'glightbox/dist/css/glightbox.css';
// import Swiper from 'swiper';
// import 'swiper/swiper-bundle.min.css';

import hack1_1 from '../assets/images/gallery/ihack1/ihack11.webp'
import hack1_2 from '../assets/images/gallery/ihack1/ihack12.webp'
import hack1_3 from '../assets/images/gallery/ihack1/ihack13.webp'
import hack2_1 from '../assets/images/gallery/ihack2/all.webp'
import hack2_2 from '../assets/images/gallery/ihack2/think.webp'
import hack2_3 from '../assets/images/gallery/ihack2/win.webp'
import hack3_1 from '../assets/images/gallery/ihack3/gettingAdvice.webp'
import hack3_2 from '../assets/images/gallery/ihack3/ihack33.webp'
import hack3_3 from '../assets/images/gallery/ihack3/kdu.webp'
import hack3_4 from '../assets/images/gallery/ihack3/speech.webp'
import hack4_1 from '../assets/images/gallery/ihack4/1.webp'
import hack4_2 from '../assets/images/gallery/ihack4/2.webp'
import hack4_3 from '../assets/images/gallery/ihack4/4.webp'
import hack5_1 from '../assets/images/gallery/ihack5/6.webp'
import hack5_2 from '../assets/images/gallery/ihack5/8.webp'
import hack5_3 from '../assets/images/gallery/ihack5/9.webp'
import hack5_4 from '../assets/images/gallery/ihack5/13.webp'
import hack151 from '../assets/images/gallery/ihack2015/6.webp'
import hack153 from '../assets/images/gallery/ihack2015/9.webp'


const Gallery = () => {

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }

    /**
     * Portfolio isotope and filter
     */
    window.addEventListener('load', () => {
        let portfolioContainer = select('.portfolio-container');
        if (portfolioContainer) {
            let portfolioIsotope = new Isotope(portfolioContainer, {
                itemSelector: '.portfolio-item'
            });

            let portfolioFilters = select('#portfolio-flters li', true);

            on('click', '#portfolio-flters li', function (e) {
                e.preventDefault();
                portfolioFilters.forEach(function (el) {
                    el.classList.remove('filter-active');
                });
                this.classList.add('filter-active');

                portfolioIsotope.arrange({
                    filter: this.getAttribute('data-filter')
                });
                portfolioIsotope.on('arrangeComplete', function () {
                    // AOS.refresh()
                });
            }, true);
        }
    });

    // /**
    //  * Initiate portfolio lightbox
    //  */
    //
    // const portfolioLightbox = GLightbox({
    //     selector: '.portfolio-lightbox'
    // });
    //
    // /**
    //  * Portfolio details slider
    //  */
    // new Swiper('.portfolio-details-slider', {
    //     speed: 400,
    //     loop: true,
    //     autoplay: {
    //         delay: 5000,
    //         disableOnInteraction: false
    //     },
    //     pagination: {
    //         el: '.swiper-pagination',
    //         type: 'bullets',
    //         clickable: true
    //     }
    // });

    return (
        <section id="gallery" className="ud-gallery pt-1 pt-lg-0 pb-4 my-5">
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="aw-gallery-title mx-auto text-center" data-aos="zoom-in">
                            <h2>Gallery</h2>
                        </div>
                    </Col>

                    <Col xs={12}>
                        <h4 className="text-center m-0 text-light" data-aos="zoom-in-up">
                            Take a look at past events!
                        </h4>
                    </Col>
                </Row>

                <Row className="mb-2 py-2 pb-3 pt-0 mt-0">
                    <Col xs={12}>
                        <section id="portfolio" className="portfolio">
                            <div className="container" data-aos="fade-up">

                                {/*<div className="section-title">*/}
                                {/*    <h2>Portfolio</h2>*/}
                                {/*</div>*/}

                                <div className="row" data-aos="fade-up" data-aos-delay="100">
                                    <div className="col-lg-12 d-flex justify-content-center mb-2">
                                        <ul id="portfolio-flters">
                                            <li data-filter="*" className="filter-active">All</li>
                                            <li data-filter=".filter-hack5">ihack 5.0</li>
                                            <li data-filter=".filter-hack4">ihack 4.0</li>
                                            <li data-filter=".filter-hack3">ihack 3.0</li>
                                            <li data-filter=".filter-hack2">ihack 2.0</li>
                                            <li data-filter=".filter-hack1">ihack 1.0</li>
                                            <li data-filter=".filter-hack2015">ihack 2015</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

                                    <div className="col-lg-4 col-md-6 portfolio-item filter-hack1">
                                        <div className="portfolio-wrap">
                                            <img src={hack1_1} className="img-fluid"
                                                 alt=""/>
                                            <div className="portfolio-info">
                                                <h4>App 1</h4>
                                                <p>App</p>
                                                {/*<div className="portfolio-links">*/}
                                                {/*    <a href="#"*/}
                                                {/*       data-gallery="portfolioGallery"*/}
                                                {/*       className="portfolio-lightbox" title="App 1"><i*/}
                                                {/*        className="bx bx-plus"/></a>*/}
                                                {/*    <a href="#" title="More Details"><i className="bx bx-link"/>+</a>*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 portfolio-item filter-hack1">
                                        <div className="portfolio-wrap">
                                            <img src={hack1_2} className="img-fluid"
                                                 alt=""/>
                                            <div className="portfolio-info">
                                                <h4>Web 3</h4>
                                                <p>Web</p>
                                                {/*<div className="portfolio-links">*/}
                                                {/*    <a href="./assets/img/portfolio/portfolio-2.jpg"*/}
                                                {/*       data-gallery="portfolioGallery"*/}
                                                {/*       className="portfolio-lightbox" title="Web 3"><i*/}
                                                {/*        className="bx bx-plus"/>+</a>*/}
                                                {/*    <a href="portfolio-details.html" title="More Details"><i*/}
                                                {/*        className="bx bx-link"/></a>*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 portfolio-item filter-hack1">
                                        <div className="portfolio-wrap">
                                            <img src={hack1_3} className="img-fluid"
                                                 alt=""/>
                                            <div className="portfolio-info">
                                                <h4>App 2</h4>
                                                <p>App</p>
                                                {/*<div className="portfolio-links">*/}
                                                {/*    <a href="./assets/img/portfolio/portfolio-3.jpg"*/}
                                                {/*       data-gallery="portfolioGallery"*/}
                                                {/*       className="portfolio-lightbox" title="App 2"><i*/}
                                                {/*        className="bx bx-plus"/>+</a>*/}
                                                {/*    <a href="portfolio-details.html" title="More Details"><i*/}
                                                {/*        className="bx bx-link"/></a>*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 portfolio-item filter-hack2">
                                        <div className="portfolio-wrap">
                                            <img src={hack2_1} className="img-fluid"
                                                 alt=""/>
                                            <div className="portfolio-info">
                                                <h4>Card 2</h4>
                                                <p>Card</p>
                                                {/*<div className="portfolio-links">*/}
                                                {/*    <a href="./assets/img/portfolio/portfolio-4.jpg"*/}
                                                {/*       data-gallery="portfolioGallery"*/}
                                                {/*       className="portfolio-lightbox" title="Card 2"><i*/}
                                                {/*        className="bx bx-plus"/>+</a>*/}
                                                {/*    <a href="portfolio-details.html" title="More Details"><i*/}
                                                {/*        className="bx bx-link"/></a>*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 portfolio-item filter-hack2">
                                        <div className="portfolio-wrap">
                                            <img src={hack2_2} className="img-fluid"
                                                 alt=""/>
                                            <div className="portfolio-info">
                                                <h4>Web 2</h4>
                                                <p>Web</p>
                                                {/*<div className="portfolio-links">*/}
                                                {/*    <a href="./assets/img/portfolio/portfolio-5.jpg"*/}
                                                {/*       data-gallery="portfolioGallery"*/}
                                                {/*       className="portfolio-lightbox" title="Web 2"><i*/}
                                                {/*        className="bx bx-plus"/>+</a>*/}
                                                {/*    /!*<a href="portfolio-details.html" title="More Details"><i*!/*/}
                                                {/*    /!*    className="bx bx-link"/></a>*!/*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 portfolio-item filter-hack2">
                                        <div className="portfolio-wrap">
                                            <img src={hack2_3} className="img-fluid"
                                                 alt=""/>
                                            <div className="portfolio-info">
                                                <h4>App 3</h4>
                                                <p>App</p>
                                                {/*<div className="portfolio-links">*/}
                                                {/*    <a href="./assets/img/portfolio/portfolio-6.jpg"*/}
                                                {/*       data-gallery="portfolioGallery"*/}
                                                {/*       className="portfolio-lightbox" title="App 3"><i*/}
                                                {/*        className="bx bx-plus"/>+</a>*/}
                                                {/*    /!*<a href="portfolio-details.html" title="More Details"><i*!/*/}
                                                {/*    /!*    className="bx bx-link"/></a>*!/*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 portfolio-item filter-hack3">
                                        <div className="portfolio-wrap">
                                            <img src={hack3_1} className="img-fluid"
                                                 alt=""/>
                                            <div className="portfolio-info">
                                                <h4>Card 1</h4>
                                                <p>Card</p>
                                                {/*<div className="portfolio-links">*/}
                                                {/*    <a href="./assets/img/portfolio/portfolio-7.jpg"*/}
                                                {/*       data-gallery="portfolioGallery"*/}
                                                {/*       className="portfolio-lightbox" title="Card 1"><i*/}
                                                {/*        className="bx bx-plus"/>+</a>*/}
                                                {/*    /!*<a href="portfolio-details.html" title="More Details"><i*!/*/}
                                                {/*    /!*    className="bx bx-link"/></a>*!/*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 portfolio-item filter-hack3">
                                        <div className="portfolio-wrap">
                                            <img src={hack3_2} className="img-fluid"
                                                 alt=""/>
                                            <div className="portfolio-info">
                                                <h4>Card 3</h4>
                                                <p>Card</p>
                                                {/*<div className="portfolio-links">*/}
                                                {/*    <a href="./assets/img/portfolio/portfolio-8.jpg"*/}
                                                {/*       data-gallery="portfolioGallery"*/}
                                                {/*       className="portfolio-lightbox" title="Card 3"><i                                                         className="bx bx-plus"/>+</a>*/}
                                                {/*    /!*<a href="portfolio-details.html" title="More Details"><i*!/*/}
                                                {/*    /!*    className="bx bx-link"/></a>*!/*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 portfolio-item filter-hack3">
                                        <div className="portfolio-wrap">
                                            <img src={hack3_3} className="img-fluid"
                                                 alt=""/>
                                            <div className="portfolio-info">
                                                <h4>Web 3</h4>
                                                <p>Web</p>
                                                {/*<div className="portfolio-links">*/}
                                                {/*    <a href=""*/}
                                                {/*       data-gallery="portfolioGallery"*/}
                                                {/*       className="portfolio-lightbox" title="Web 3"><i*/}
                                                {/*        className="bx bx-plus"/>+</a>*/}
                                                {/*    /!*<a href="portfolio-details.html" title="More Details"><i*!/*/}
                                                {/*    /!*    className="bx bx-link"/></a>*!/*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 portfolio-item filter-hack3">
                                        <div className="portfolio-wrap">
                                            <img src={hack3_4} className="img-fluid"
                                                 alt=""/>
                                            <div className="portfolio-info">
                                                <h4>Web 3</h4>
                                                <p>Web</p>
                                                {/*<div className="portfolio-links">*/}
                                                {/*    <a href=""*/}
                                                {/*       data-gallery="portfolioGallery"*/}
                                                {/*       className="portfolio-lightbox" title="Web 3"><i*/}
                                                {/*        className="bx bx-plus"/>+</a>*/}
                                                {/*    /!*<a href="portfolio-details.html" title="More Details"><i*!/*/}
                                                {/*    /!*    className="bx bx-link"/></a>*!/*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 portfolio-item filter-hack4">
                                        <div className="portfolio-wrap">
                                            <img src={hack4_1} className="img-fluid"
                                                 alt=""/>
                                            <div className="portfolio-info">
                                                <h4>Web 3</h4>
                                                <p>Web</p>
                                                {/*<div className="portfolio-links">*/}
                                                {/*    <a href=""*/}
                                                {/*       data-gallery="portfolioGallery"*/}
                                                {/*       className="portfolio-lightbox" title="Web 3"><i*/}
                                                {/*        className="bx bx-plus"/>+</a>*/}
                                                {/*    /!*<a href="portfolio-details.html" title="More Details"><i*!/*/}
                                                {/*    /!*    className="bx bx-link"/></a>*!/*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 portfolio-item filter-hack4">
                                        <div className="portfolio-wrap">
                                            <img src={hack4_2} className="img-fluid"
                                                 alt=""/>
                                            <div className="portfolio-info">
                                                <h4>Web 3</h4>
                                                <p>Web</p>
                                                {/*<div className="portfolio-links">*/}
                                                {/*    <a href=""*/}
                                                {/*       data-gallery="portfolioGallery"*/}
                                                {/*       className="portfolio-lightbox" title="Web 3"><i*/}
                                                {/*        className="bx bx-plus"/>+</a>*/}
                                                {/*    /!*<a href="portfolio-details.html" title="More Details"><i*!/*/}
                                                {/*    /!*    className="bx bx-link"/></a>*!/*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 portfolio-item filter-hack4">
                                        <div className="portfolio-wrap">
                                            <img src={hack4_3} className="img-fluid"
                                                 alt=""/>
                                            <div className="portfolio-info">
                                                <h4>Web 3</h4>
                                                <p>Web</p>
                                                {/*<div className="portfolio-links">*/}
                                                {/*    <a href=""*/}
                                                {/*       data-gallery="portfolioGallery"*/}
                                                {/*       className="portfolio-lightbox" title="Web 3"><i*/}
                                                {/*        className="bx bx-plus"/>+</a>*/}
                                                {/*    /!*<a href="portfolio-details.html" title="More Details"><i*!/*/}
                                                {/*    /!*    className="bx bx-link"/></a>*!/*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 portfolio-item filter-hack5">
                                        <div className="portfolio-wrap">
                                            <img src={hack5_1} className="img-fluid"
                                                 alt=""/>
                                            <div className="portfolio-info">
                                                <h4>Web 3</h4>
                                                <p>Web</p>
                                                {/*<div className="portfolio-links">*/}
                                                {/*    <a href=""*/}
                                                {/*       data-gallery="portfolioGallery"*/}
                                                {/*       className="portfolio-lightbox" title="Web 3"><i*/}
                                                {/*        className="bx bx-plus"/>+</a>*/}
                                                {/*    /!*<a href="portfolio-details.html" title="More Details"><i*!/*/}
                                                {/*    /!*    className="bx bx-link"/></a>*!/*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 portfolio-item filter-hack5">
                                        <div className="portfolio-wrap">
                                            <img src={hack5_2} className="img-fluid"
                                                 alt=""/>
                                            <div className="portfolio-info">
                                                <h4>Web 3</h4>
                                                <p>Web</p>
                                                {/*<div className="portfolio-links">*/}
                                                {/*    <a href=""*/}
                                                {/*       data-gallery="portfolioGallery"*/}
                                                {/*       className="portfolio-lightbox" title="Web 3"><i*/}
                                                {/*        className="bx bx-plus"/>+</a>*/}
                                                {/*    /!*<a href="portfolio-details.html" title="More Details"><i*!/*/}
                                                {/*    /!*    className="bx bx-link"/></a>*!/*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 portfolio-item filter-hack5">
                                        <div className="portfolio-wrap">
                                            <img src={hack5_3} className="img-fluid"
                                                 alt=""/>
                                            <div className="portfolio-info">
                                                <h4>Web 3</h4>
                                                <p>Web</p>
                                                {/*<div className="portfolio-links">*/}
                                                {/*    <a href=""*/}
                                                {/*       data-gallery="portfolioGallery"*/}
                                                {/*       className="portfolio-lightbox" title="Web 3"><i*/}
                                                {/*        className="bx bx-plus"/>+</a>*/}
                                                {/*    /!*<a href="portfolio-details.html" title="More Details"><i*!/*/}
                                                {/*    /!*    className="bx bx-link"/></a>*!/*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 portfolio-item filter-hack5">
                                        <div className="portfolio-wrap">
                                            <img src={hack5_4} className="img-fluid"
                                                 alt=""/>
                                            <div className="portfolio-info">
                                                <h4>Web 3</h4>
                                                <p>Web</p>
                                                {/*<div className="portfolio-links">*/}
                                                {/*    <a href=""*/}
                                                {/*       data-gallery="portfolioGallery"*/}
                                                {/*       className="portfolio-lightbox" title="Web 3"><i*/}
                                                {/*        className="bx bx-plus"/>+</a>*/}
                                                {/*    /!*<a href="portfolio-details.html" title="More Details"><i*!/*/}
                                                {/*    /!*    className="bx bx-link"/></a>*!/*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 portfolio-item filter-hack2015">
                                        <div className="portfolio-wrap">
                                            <img src={hack151} className="img-fluid"
                                                 alt=""/>
                                            <div className="portfolio-info">
                                                <h4>Web 3</h4>
                                                <p>Web</p>
                                                {/*<div className="portfolio-links">*/}
                                                {/*    <a href=""*/}
                                                {/*       data-gallery="portfolioGallery"*/}
                                                {/*       className="portfolio-lightbox" title="Web 3"><i*/}
                                                {/*        className="bx bx-plus"/>+</a>*/}
                                                {/*    /!*<a href="portfolio-details.html" title="More Details"><i*!/*/}
                                                {/*    /!*    className="bx bx-link"/></a>*!/*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 portfolio-item filter-hack2015">
                                        <div className="portfolio-wrap">
                                            <img src={hack153} className="img-fluid"
                                                 alt=""/>
                                            <div className="portfolio-info">
                                                <h4>Web 3</h4>
                                                <p>Web</p>
                                                {/*<div className="portfolio-links">*/}
                                                {/*    <a href=""*/}
                                                {/*       data-gallery="portfolioGallery"*/}
                                                {/*       className="portfolio-lightbox" title="Web 3"><i*/}
                                                {/*        className="bx bx-plus"/>+</a>*/}
                                                {/*    /!*<a href="portfolio-details.html" title="More Details"><i*!/*/}
                                                {/*    /!*    className="bx bx-link"/></a>*!/*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </section>
                    </Col>
                </Row>
            </Container>
        </section>

    );
}

export default Gallery
