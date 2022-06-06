import {Link} from 'react-router-dom';
import ScrollContainer from 'react-indiana-drag-scroll';

const ROOT = process.env.REACT_APP_ROOT; 
const Dir = ROOT + '/images/banners';
const PLink = ROOT + '/products';


const Slides = () => { 

    return (
        <>
            <div id="prev-slide" className="arrow-slide"></div>

            <div id="slides" className="slider-container">

                <ScrollContainer className="scroll-container">

                <div className="col col-3 h-100">
                    <div className="box h-3 brd brd-right brd-bottom">
                        <img width="960" height="615" src={`${Dir}/s-32.png`} alt="" />
                        <Link className="link" to={PLink}> </Link>
                        <div className="text">
                            <span className="lbl red">Sport</span>
                            <h4 className="bold"><Link to={PLink}>Beautiful landscape</Link></h4>
                        </div>
                    </div>
                    <div className="box h-3 brd brd-right brd-top brd-bottom">
                        <img width="960" height="615" src={`${Dir}/s-18.jpeg`} alt="" />
                        <Link className="link" to={PLink}> </Link>
                        <div className="text">
                            <span className="lbl green">Sport</span>
                            <h4 className="bold"><Link to={PLink}>Beautiful landscape</Link></h4>
                        </div>
                    </div>
                    <div className="box h-3 brd brd-right brd-top">
                        <img width="960" height="615" src={`${Dir}/i9.jpg`} alt="" />
                        <Link className="link" to={PLink}> </Link>
                        <div className="text">
                            <span className="lbl green">Sport</span>
                            <h4 className="bold"><Link to={PLink}>Beautiful landscape</Link></h4>
                        </div>
                    </div>
                </div>

                <div className="col col-5 h-100">

                    <div className="box box-large h-7 brd brd-left brd-right brd-bottom">
                        <img width="960" height="615" src={`${Dir}/big-1.jpg`} alt="" />
                        <Link className="link" to={PLink}> </Link>
                        <div className="text">
                            <span className="lbl blue">Sport</span>
                            <h4 className="bold"><Link to={PLink}>Beautiful landscape</Link></h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, explicabo, laudantium illo eius sed, deleniti earum architecto reprehenderit</p>
                        </div>
                    </div>

                    <div className="col-group h-3">

                        <div className="col">
                            <div className="box brd brd-left brd-right brd-top">
                                <img width="960" height="615" src={`${Dir}/s-7.jpg`} alt="" />
                                <Link className="link" to={PLink}> </Link>
                                <div className="text">
                                    <span className="lbl purple">Sport</span>
                                    <h4 className="bold"><Link to={PLink}>Beautiful landscape</Link></h4>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="box brd brd-left brd-right brd-top">
                                <img width="960" height="615" src={`${Dir}/s-59.png`} alt="" />
                                <Link className="link" to={PLink}> </Link>
                                <div className="text">
                                    <span className="lbl red">Sport</span>
                                    <h4 className="bold"><Link to={PLink}>Beautiful landscape</Link></h4>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>


                <div className="col col-3 h-100">
                    <div className="box h-3 brd brd-left brd-right brd-bottom">
                        <img width="960" height="615" src={`${Dir}/s-30.jpg`} alt="" />
                        <Link className="link" to={PLink}> </Link>
                        <div className="text">
                            <span className="lbl sky">Sport</span>
                            <h4 className="bold"><Link to={PLink}>Beautiful landscape</Link></h4>
                        </div>
                    </div>
                    <div className="box h-3 brd brd-left brd-right brd-top brd-bottom">
                        <img width="960" height="615" src={`${Dir}/s-20.jpeg`} alt="" />
                        <Link className="link" to={PLink}> </Link>
                        <div className="text">
                            <span className="lbl green">Sport</span>
                            <h4 className="bold"><Link to={PLink}>Beautiful landscape</Link></h4>
                        </div>
                    </div>
                    <div className="box h-3 brd brd-left brd-right brd-top">
                        <img width="960" height="615" src={`${Dir}/s-9.jpg`} alt="" />
                        <Link className="link" to={PLink}> </Link>
                        <div className="text">
                            <span className="lbl sky">Sport</span>
                            <h4 className="bold"><Link to={PLink}>Beautiful landscape</Link></h4>
                        </div>
                    </div>
                </div>

                <div className="col col-4 h-100">
                    <div className="box h-5 brd brd-left brd-right brd-bottom">
                        <img width="960" height="615" src={`${Dir}/s-13.jpeg`} alt="" />
                        <Link className="link" to={PLink}> </Link>
                        <div className="text">
                            <span className="lbl blue">Sport</span>
                            <h4 className="bold"><Link to={PLink}>Beautiful landscape</Link></h4>
                        </div>
                    </div>

                    <div className="box h-5 brd brd-left brd-right brd-top">
                        <img width="960" height="615" src={`${Dir}/a-71.png`} alt="" />
                        <Link className="link" to={PLink}> </Link>
                        <div className="text">
                            <span className="lbl red">Sport</span>
                            <h4 className="bold"><Link to={PLink}>Beautiful landscape</Link></h4>
                        </div>
                    </div>
                </div>
                
                <div className="col col-6 h-100">

                    <div className="col-group h-3">

                        <div className="col">
                            <div className="box brd brd-left brd-right brd-bottom">
                                <img width="960" height="615" src={`${Dir}/s-26.jpg`} alt="" />
                                <Link className="link" to={PLink}> </Link>
                                <div className="text">
                                    <span className="lbl purple">Sport</span>
                                    <h4 className="bold"><Link to={PLink}>Beautiful landscape</Link></h4>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="box brd brd-left brd-right brd-bottom">
                                <img width="960" height="615" src={`${Dir}/s-46.jpg`} alt="" />
                                <Link className="link" to={PLink}> </Link>
                                <div className="text">
                                    <span className="lbl red">Sport</span>
                                    <h4 className="bold"><Link to={PLink}>Beautiful landscape</Link></h4>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="box box-large h-7 brd brd-left brd-right brd-top">
                        <img width="960" height="615" src={`${Dir}/big-3.jpg`} alt="" />
                        <Link className="link" to={PLink}> </Link>
                        <div className="text">
                            <span className="lbl blue">Sport</span>
                            <h4 className="bold"><Link to={PLink}>Beautiful landscape</Link></h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, explicabo, laudantium illo eius sed, deleniti earum architecto reprehenderit</p>
                        </div>
                    </div>

                </div>

                <div className="col col-4 h-100">
                    <div className="box h-5 brd brd-left brd-right brd-bottom">
                        <img width="960" height="615" src={`${Dir}/s-45.jpg`} alt="" />
                        <Link className="link" to={PLink}> </Link>
                        <div className="text">
                            <span className="lbl green">Sport</span>
                            <h4 className="bold"><Link to={PLink}>Beautiful landscape</Link></h4>
                        </div>
                    </div>

                    <div className="box h-5 brd brd-left brd-right brd-top">
                        <img width="960" height="615" src={`${Dir}/s-2.jpg`} alt="" />
                        <Link className="link" to={PLink}> </Link>
                        <div className="text">
                            <span className="lbl sky">Sport</span>
                            <h4 className="bold"><Link to={PLink}>Beautiful landscape</Link></h4>
                        </div>
                    </div>
                </div>

                
                <div className="col col-4 h-100">
                    <div className="box h-5 brd brd-left brd-bottom">
                        <img width="960" height="615" src={`${Dir}/s-64.jpg`} alt="" />
                        <Link className="link" to={PLink}> </Link>
                        <div className="text">
                            <span className="lbl pink">Sport</span>
                            <h4 className="bold"><Link to={PLink}>Beautiful landscape</Link></h4>
                        </div>
                    </div>

                    <div className="box h-5 brd brd-left brd-top">
                        <img width="960" height="615" src={`${Dir}/s-60.jpg`} alt="" />
                        <Link className="link" to={PLink}> </Link>
                        <div className="text">
                            <span className="lbl red">Sport</span>
                            <h4 className="bold"><Link to={PLink}>Beautiful landscape</Link></h4>
                        </div>
                    </div>
                </div>

                </ScrollContainer>
                
            </div>

            <div id="next-slide" className="arrow-slide"></div>
        </>
    )
}

export default Slides
