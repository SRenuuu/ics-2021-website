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
import hack3_1 from '../assets/images/gallery/ihack3/getting_advice.webp'
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
import {useEffect} from "react";


const Gallery = () => {

    useEffect(() => {

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
            let galleryContainer = select('.gallery-container');
            if (galleryContainer) {
                let galleryIsotope = new Isotope(galleryContainer, {
                    itemSelector: '.gallery-item'
                });

                let galleryFilters = select('#gallery-flters li', true);

                on('click', '#gallery-flters li', function (e) {
                    e.preventDefault();
                    galleryFilters.forEach(function (el) {
                        el.classList.remove('filter-active');
                    });
                    this.classList.add('filter-active');

                    galleryIsotope.arrange({
                        filter: this.getAttribute('data-filter')
                    });
                    galleryIsotope.on('arrangeComplete', function () {
                        // AOS.refresh()
                    });
                }, true);
            }
        });

        // /**
        //  * Initiate gallery lightbox
        //  */
        //
        // const galleryLightbox = GLightbox({
        //     selector: '.gallery-lightbox'
        // });
        //
        // /**
        //  * Portfolio details slider
        //  */
        // new Swiper('.gallery-details-slider', {
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
    }, [])

    return (
        <section id="gallery" className="ud-gallery pt-2 pb-3 pt-lg-3 pb-lg-4 my-0">
            <Container fluid className="px-3">
                <Row>
                    <Col xs={12}>
                        <div className="aw-gallery-title mx-auto text-center neonSt" data-aos="zoom-in">
                            <h2 className="pt-4">Gallery</h2>
                        </div>
                    </Col>

                    <Col xs={12}>
                        <h4 className="text-center m-0 mb-2 pb-2 text-light" data-aos="zoom-in-up">
                            Take a look at past events organized by us!
                        </h4>
                    </Col>
                </Row>

                <Row className="mb-2 pb-1 pt-3">
                    <Col xs={12}>
                        <article id="gallery-photos" className="gallery">
                            <div className="container-fluid" data-aos="fade-up">

                                <div className="row" data-aos="fade-up" data-aos-delay="50">
                                    <div className="col-lg-12 d-flex justify-content-center mb-2">
                                        <ul id="gallery-flters">
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

                                <div className="row gallery-container" data-aos="fade-up" data-aos-delay="100">

                                    <div className="col-lg-4 col-md-6 gallery-item filter-hack1">
                                        <div className="gallery-wrap">
                                            <img src={hack1_1} className="img-fluid"
                                                 alt="iHack 1.0 photo"/>
                                            <div className="gallery-info">
                                                <h4>iHack 1.0</h4>
                                                {/*<p>App</p>*/}
                                                {/*<div className="gallery-links">*/}
                                                {/*    <a href="#"*/}
                                                {/*       data-gallery="galleryGallery"*/}
                                                {/*       className="gallery-lightbox" title="App 1"><i*/}
                                                {/*        className="bx bx-plus"/></a>*/}
                                                {/*    <a href="#" title="More Details"><i className="bx bx-link"/>+</a>*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 gallery-item filter-hack1">
                                        <div className="gallery-wrap">
                                            <img src={hack1_2} className="img-fluid"
                                                 alt="iHack 1.0 photo"/>
                                            <div className="gallery-info">
                                                <h4>iHack 1.0</h4>
                                                {/*<p>Web</p>*/}
                                                {/*<div className="gallery-links">*/}
                                                {/*    <a href="./assets/img/gallery/gallery-2.jpg"*/}
                                                {/*       data-gallery="galleryGallery"*/}
                                                {/*       className="gallery-lightbox" title="Web 3"><i*/}
                                                {/*        className="bx bx-plus"/>+</a>*/}
                                                {/*    <a href="gallery-details.html" title="More Details"><i*/}
                                                {/*        className="bx bx-link"/></a>*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 gallery-item filter-hack1">
                                        <div className="gallery-wrap">
                                            <img src={hack1_3} className="img-fluid"
                                                 alt="iHack 1.0 photo"/>
                                            <div className="gallery-info">
                                                <h4>iHack 1.0</h4>
                                                {/*<p>App</p>*/}
                                                {/*<div className="gallery-links">*/}
                                                {/*    <a href="./assets/img/gallery/gallery-3.jpg"*/}
                                                {/*       data-gallery="galleryGallery"*/}
                                                {/*       className="gallery-lightbox" title="App 2"><i*/}
                                                {/*        className="bx bx-plus"/>+</a>*/}
                                                {/*    <a href="gallery-details.html" title="More Details"><i*/}
                                                {/*        className="bx bx-link"/></a>*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 gallery-item filter-hack2">
                                        <div className="gallery-wrap">
                                            <img src={hack2_1} className="img-fluid"
                                                 alt="iHack 2.0 photo"/>
                                            <div className="gallery-info">
                                                <h4>iHack 2.0</h4>
                                                {/*<p>Card</p>*/}
                                                {/*<div className="gallery-links">*/}
                                                {/*    <a href="./assets/img/gallery/gallery-4.jpg"*/}
                                                {/*       data-gallery="galleryGallery"*/}
                                                {/*       className="gallery-lightbox" title="Card 2"><i*/}
                                                {/*        className="bx bx-plus"/>+</a>*/}
                                                {/*    <a href="gallery-details.html" title="More Details"><i*/}
                                                {/*        className="bx bx-link"/></a>*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 gallery-item filter-hack2">
                                        <div className="gallery-wrap">
                                            <img src={hack2_2} className="img-fluid"
                                                 alt="iHack 2.0 photo"/>
                                            <div className="gallery-info">
                                                <h4>iHack 2.0</h4>
                                                {/*<p>Web</p>*/}
                                                {/*<div className="gallery-links">*/}
                                                {/*    <a href="./assets/img/gallery/gallery-5.jpg"*/}
                                                {/*       data-gallery="galleryGallery"*/}
                                                {/*       className="gallery-lightbox" title="Web 2"><i*/}
                                                {/*        className="bx bx-plus"/>+</a>*/}
                                                {/*    /!*<a href="gallery-details.html" title="More Details"><i*!/*/}
                                                {/*    /!*    className="bx bx-link"/></a>*!/*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 gallery-item filter-hack2">
                                        <div className="gallery-wrap">
                                            <img src={hack2_3} className="img-fluid"
                                                 alt="iHack 2.0 photo"/>
                                            <div className="gallery-info">
                                                <h4>iHack 2.0</h4>
                                                {/*<p>App</p>*/}
                                                {/*<div className="gallery-links">*/}
                                                {/*    <a href="./assets/img/gallery/gallery-6.jpg"*/}
                                                {/*       data-gallery="galleryGallery"*/}
                                                {/*       className="gallery-lightbox" title="App 3"><i*/}
                                                {/*        className="bx bx-plus"/>+</a>*/}
                                                {/*    /!*<a href="gallery-details.html" title="More Details"><i*!/*/}
                                                {/*    /!*    className="bx bx-link"/></a>*!/*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 gallery-item filter-hack3">
                                        <div className="gallery-wrap">
                                            <img src={hack3_1} className="img-fluid"
                                                 alt="iHack 3.0 photo"/>
                                            <div className="gallery-info">
                                                <h4>iHack 3.0</h4>
                                                {/*<p>Card</p>*/}
                                                {/*<div className="gallery-links">*/}
                                                {/*    <a href="./assets/img/gallery/gallery-7.jpg"*/}
                                                {/*       data-gallery="galleryGallery"*/}
                                                {/*       className="gallery-lightbox" title="Card 1"><i*/}
                                                {/*        className="bx bx-plus"/>+</a>*/}
                                                {/*    /!*<a href="gallery-details.html" title="More Details"><i*!/*/}
                                                {/*    /!*    className="bx bx-link"/></a>*!/*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 gallery-item filter-hack3">
                                        <div className="gallery-wrap">
                                            <img src={hack3_2} className="img-fluid"
                                                 alt="iHack 3.0 photo"/>
                                            <div className="gallery-info">
                                                <h4>iHack 3.0</h4>
                                                {/*<p>Card</p>*/}
                                                {/*<div className="gallery-links">*/}
                                                {/*    <a href="./assets/img/gallery/gallery-8.jpg"*/}
                                                {/*       data-gallery="galleryGallery"*/}
                                                {/*       className="gallery-lightbox" title="Card 3"><i className="bx bx-plus"/>+</a>*/}
                                                {/*    /!*<a href="gallery-details.html" title="More Details"><i*!/*/}
                                                {/*    /!*    className="bx bx-link"/></a>*!/*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 gallery-item filter-hack3">
                                        <div className="gallery-wrap">
                                            <img src={hack3_3} className="img-fluid"
                                                 alt="iHack 3.0 photo"/>
                                            <div className="gallery-info">
                                                <h4>iHack 3.0</h4>
                                                {/*<p>Web</p>*/}
                                                {/*<div className="gallery-links">*/}
                                                {/*    <a href=""*/}
                                                {/*       data-gallery="galleryGallery"*/}
                                                {/*       className="gallery-lightbox" title="Web 3"><i*/}
                                                {/*        className="bx bx-plus"/>+</a>*/}
                                                {/*    /!*<a href="gallery-details.html" title="More Details"><i*!/*/}
                                                {/*    /!*    className="bx bx-link"/></a>*!/*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 gallery-item filter-hack3">
                                        <div className="gallery-wrap">
                                            <img src={hack3_4} className="img-fluid"
                                                 alt="iHack 3.0 photo"/>
                                            <div className="gallery-info">
                                                <h4>iHack 3.0</h4>
                                                {/*<p>Web</p>*/}
                                                {/*<div className="gallery-links">*/}
                                                {/*    <a href=""*/}
                                                {/*       data-gallery="galleryGallery"*/}
                                                {/*       className="gallery-lightbox" title="Web 3"><i*/}
                                                {/*        className="bx bx-plus"/>+</a>*/}
                                                {/*    /!*<a href="gallery-details.html" title="More Details"><i*!/*/}
                                                {/*    /!*    className="bx bx-link"/></a>*!/*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 gallery-item filter-hack4">
                                        <div className="gallery-wrap">
                                            <img src={hack4_1} className="img-fluid"
                                                 alt="iHack 4.0 photo"/>
                                            <div className="gallery-info">
                                                <h4>iHack 4.0</h4>
                                                {/*<p>Web</p>*/}
                                                {/*<div className="gallery-links">*/}
                                                {/*    <a href=""*/}
                                                {/*       data-gallery="galleryGallery"*/}
                                                {/*       className="gallery-lightbox" title="Web 3"><i*/}
                                                {/*        className="bx bx-plus"/>+</a>*/}
                                                {/*    /!*<a href="gallery-details.html" title="More Details"><i*!/*/}
                                                {/*    /!*    className="bx bx-link"/></a>*!/*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 gallery-item filter-hack4">
                                        <div className="gallery-wrap">
                                            <img src={hack4_2} className="img-fluid"
                                                 alt="iHack 4.0 photo"/>
                                            <div className="gallery-info">
                                                <h4>iHack 4.0</h4>
                                                {/*<p>Web</p>*/}
                                                {/*<div className="gallery-links">*/}
                                                {/*    <a href=""*/}
                                                {/*       data-gallery="galleryGallery"*/}
                                                {/*       className="gallery-lightbox" title="Web 3"><i*/}
                                                {/*        className="bx bx-plus"/>+</a>*/}
                                                {/*    /!*<a href="gallery-details.html" title="More Details"><i*!/*/}
                                                {/*    /!*    className="bx bx-link"/></a>*!/*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 gallery-item filter-hack4">
                                        <div className="gallery-wrap">
                                            <img src={hack4_3} className="img-fluid"
                                                 alt="iHack 4.0 photo"/>
                                            <div className="gallery-info">
                                                <h4>iHack 4.0</h4>
                                                {/*<p>Web</p>*/}
                                                {/*<div className="gallery-links">*/}
                                                {/*    <a href=""*/}
                                                {/*       data-gallery="galleryGallery"*/}
                                                {/*       className="gallery-lightbox" title="Web 3"><i*/}
                                                {/*        className="bx bx-plus"/>+</a>*/}
                                                {/*    /!*<a href="gallery-details.html" title="More Details"><i*!/*/}
                                                {/*    /!*    className="bx bx-link"/></a>*!/*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 gallery-item filter-hack5">
                                        <div className="gallery-wrap">
                                            <img src={hack5_1} className="img-fluid"
                                                 alt="iHack 5.0 photo"/>
                                            <div className="gallery-info">
                                                <h4>iHack 5.0</h4>
                                                {/*<p>Web</p>*/}
                                                {/*<div className="gallery-links">*/}
                                                {/*    <a href=""*/}
                                                {/*       data-gallery="galleryGallery"*/}
                                                {/*       className="gallery-lightbox" title="Web 3"><i*/}
                                                {/*        className="bx bx-plus"/>+</a>*/}
                                                {/*    /!*<a href="gallery-details.html" title="More Details"><i*!/*/}
                                                {/*    /!*    className="bx bx-link"/></a>*!/*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 gallery-item filter-hack5">
                                        <div className="gallery-wrap">
                                            <img src={hack5_2} className="img-fluid"
                                                 alt="iHack 5.0 photo"/>
                                            <div className="gallery-info">
                                                <h4>iHack 5.0</h4>
                                                {/*<p>Web</p>*/}
                                                {/*<div className="gallery-links">*/}
                                                {/*    <a href=""*/}
                                                {/*       data-gallery="galleryGallery"*/}
                                                {/*       className="gallery-lightbox" title="Web 3"><i*/}
                                                {/*        className="bx bx-plus"/>+</a>*/}
                                                {/*    /!*<a href="gallery-details.html" title="More Details"><i*!/*/}
                                                {/*    /!*    className="bx bx-link"/></a>*!/*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 gallery-item filter-hack5">
                                        <div className="gallery-wrap">
                                            <img src={hack5_3} className="img-fluid"
                                                 alt="iHack 5.0 photo"/>
                                            <div className="gallery-info">
                                                <h4>iHack 5.0</h4>
                                                {/*<p>Web</p>*/}
                                                {/*<div className="gallery-links">*/}
                                                {/*    <a href=""*/}
                                                {/*       data-gallery="galleryGallery"*/}
                                                {/*       className="gallery-lightbox" title="Web 3"><i*/}
                                                {/*        className="bx bx-plus"/>+</a>*/}
                                                {/*    /!*<a href="gallery-details.html" title="More Details"><i*!/*/}
                                                {/*    /!*    className="bx bx-link"/></a>*!/*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 gallery-item filter-hack5">
                                        <div className="gallery-wrap">
                                            <img src={hack5_4} className="img-fluid"
                                                 alt="iHack 5.0 photo"/>
                                            <div className="gallery-info">
                                                <h4>iHack 5.0</h4>
                                                {/*<p>Web</p>*/}
                                                {/*<div className="gallery-links">*/}
                                                {/*    <a href=""*/}
                                                {/*       data-gallery="galleryGallery"*/}
                                                {/*       className="gallery-lightbox" title="Web 3"><i*/}
                                                {/*        className="bx bx-plus"/>+</a>*/}
                                                {/*    /!*<a href="gallery-details.html" title="More Details"><i*!/*/}
                                                {/*    /!*    className="bx bx-link"/></a>*!/*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 gallery-item filter-hack2015">
                                        <div className="gallery-wrap">
                                            <img src={hack151} className="img-fluid"
                                                 alt="iHack 2015 photo"/>
                                            <div className="gallery-info">
                                                <h4>iHack 2015</h4>
                                                {/*<p>Web</p>*/}
                                                {/*<div className="gallery-links">*/}
                                                {/*    <a href=""*/}
                                                {/*       data-gallery="galleryGallery"*/}
                                                {/*       className="gallery-lightbox" title="Web 3"><i*/}
                                                {/*        className="bx bx-plus"/>+</a>*/}
                                                {/*    /!*<a href="gallery-details.html" title="More Details"><i*!/*/}
                                                {/*    /!*    className="bx bx-link"/></a>*!/*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 gallery-item filter-hack2015">
                                        <div className="gallery-wrap">
                                            <img src={hack153} className="img-fluid"
                                                 alt="iHack 2015 photo"/>
                                            <div className="gallery-info">
                                                <h4>iHack 2015</h4>
                                                {/*<p>Web</p>*/}
                                                {/*<div className="gallery-links">*/}
                                                {/*    <a href=""*/}
                                                {/*       data-gallery="galleryGallery"*/}
                                                {/*       className="gallery-lightbox" title="Web 3"><i*/}
                                                {/*        className="bx bx-plus"/>+</a>*/}
                                                {/*    /!*<a href="gallery-details.html" title="More Details"><i*!/*/}
                                                {/*    /!*    className="bx bx-link"/></a>*!/*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </article>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Gallery
