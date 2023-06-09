import React, { useContext, useState } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Nav, Tab } from 'react-bootstrap';
import FsLightbox from 'fslightbox-react';
import Select from 'react-select';
import { TbCloudDownload, TbPlayerPlay } from 'react-icons/tb';
// img
import logo from '../../../assets/images/logo.png';
import icon from '../../../assets/video/trailer.mp4';


// favorite img
import fav1 from '../../../assets/images/favorite/01.jpg';
import fav2 from '../../../assets/images/favorite/02.jpg';
import fav3 from '../../../assets/images/favorite/03.jpg';
import fav4 from '../../../assets/images/favorite/04.png';
import fav5 from '../../../assets/images/favorite/05.jpg';

// upcoming img
import upcoming1 from '../../../assets/images/upcoming/01.jpg';
import upcoming2 from '../../../assets/images/upcoming/02.jpg';
import upcoming3 from '../../../assets/images/upcoming/03.jpg';
import upcoming4 from '../../../assets/images/upcoming/04.jpg';
import upcoming5 from '../../../assets/images/upcoming/05.jpg';

// suggested
import suggested1 from '../../../assets/images/suggested/01.jpg';
import suggested2 from '../../../assets/images/suggested/02.jpg';
import suggested3 from '../../../assets/images/suggested/03.jpg';
import suggested4 from '../../../assets/images/suggested/04.jpg';
import suggested5 from '../../../assets/images/suggested/05.jpg';

// parallax
import parallax3 from '../../../assets/images/parallax/p1.jpg';
import parallax4 from '../../../assets/images/parallax/parallax-logo.png';

// trending
import trending1 from '../../../assets/images/trending/01.jpg';
import trending2 from '../../../assets/images/trending/02.jpg';
import trending3 from '../../../assets/images/trending/03.jpg';
import trending4 from '../../../assets/images/trending/04.jpg';
import trending5 from '../../../assets/images/trending/05.jpg';
import trending6 from '../../../assets/images/trending/06.jpg';
import trendinglabel from '../../../assets/images/trending/trending-label.png';

// episodes
import episodes1 from '../../../assets/images/episodes/01.jpg';
import episodes2 from '../../../assets/images/episodes/02.jpg';
import episodes3 from '../../../assets/images/episodes/03.jpg';
import episodes4 from '../../../assets/images/episodes/04.jpg';
import episodes5 from '../../../assets/images/episodes/05.jpg';

// tvthrillers
import tvthrillers1 from '../../../assets/images/tvthrillers/01.jpg';
import tvthrillers2 from '../../../assets/images/tvthrillers/02.jpg';
import tvthrillers3 from '../../../assets/images/tvthrillers/03.jpg';
import tvthrillers4 from '../../../assets/images/tvthrillers/04.jpg';
import tvthrillers5 from '../../../assets/images/tvthrillers/05.jpg';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Navigation, Thumbs, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import { sanityDataContext } from '../../../context/dataContext';
SwiperCore.use([EffectFade, Navigation, Thumbs, Pagination]);

const gsapAnimate = {
	getData: (elem) => {
		const option = {
			opacity: 0,
			scale: 1,
			position: {
				x: 0,
				y: 0,
			},
			ease: '',
			duration: 1,
			delay: 0.4,
			rotate: 0,
		};
		if (elem !== undefined) {
			option.position.x = gsapAnimate.validValue(elem.dataset.iqPositionX, 0);

			option.position.y = gsapAnimate.validValue(elem.dataset.iqPositionY, 0);

			option.rotate = gsapAnimate.validValue(elem.dataset.iqRotate, 0);

			option.scale = gsapAnimate.validValue(elem.dataset.iqScale, 1);

			option.opacity = gsapAnimate.validValue(elem.dataset.iqOpacity, 0);

			option.delay = gsapAnimate.validValue(elem.dataset.iqDelay, 0.4);

			option.duration = gsapAnimate.validValue(elem.dataset.iqDuration, 1.5);

			option.ease = gsapAnimate.validValue(elem.dataset.iqEase, '');

			const setOption = {
				opacity: option.opacity,
				scale: option.scale,
				x: option.position.x,
				y: option.position.y,
				ease: option.ease,
				rotate: option.rotate,
				duration: option.duration,
				delay: option.delay,
			};

			return setOption;
		} else {
			return { opacity: 0 };
		}
	},
	onStart: (elem) => {
		const setOption = gsapAnimate.getData(elem);

		gsap.from(elem, setOption);
	},

	onEnd: (elem) => {
		const setOption = gsapAnimate.getData(elem);

		gsap.to(elem, setOption);
	},

	onStartEnd: (elem) => {
		const setOption = gsapAnimate.getData(elem);

		const setEndOption = gsapAnimate.getData(elem);

		setEndOption.opacity = 1;

		setEndOption.x = 0;

		setEndOption.y = 0;

		setEndOption.rotate = 0;

		setEndOption.scale = 1;

		gsap.fromTo(elem, setOption, setEndOption);
	},
	validValue: (attr, defaultVal) => {
		if (attr !== undefined && attr !== null) {
			return Number(attr);
		}
		return Number(defaultVal);
	},
};

const Homepage = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const [toggler1, setToggler1] = useState(false);
	const [toggler2, setToggler2] = useState(false);
	const [toggler3, setToggler3] = useState(false);
    const {allNewsData} = useContext(sanityDataContext);

	const animationInit = () => {
		if (document.querySelector('.swiper-container .swiper-slide-active') !== null) {
			const gsapElem = document
				.querySelector('.swiper-container .swiper-slide-active')
				.querySelectorAll('[data-iq-gsap="onStart"]');

			Array.from(gsapElem, (elem) => {
				return gsapAnimate.onStartEnd(elem);
			});
		}
	};

	const options1 = [
		{ value: 'season 1', label: 'Season 1' },
		{ value: 'season 2', label: 'Season 2' },
		{ value: 'season 3', label: 'Season 3' },
	];

	const options2 = [
		{ value: 'season 1', label: 'Season 1' },
		{ value: 'season 2', label: 'Season 2' },
	];

	return (
		<>
			<FsLightbox
				toggler={toggler1}
				sources={[
					<iframe
						src={icon}
						title=" "
						width="600px"
						height="600px"
						frameBorder="0"
						allow="autoplay; fullscreen"
						allowFullScreen
					/>,
				]}
			/>
			<FsLightbox
				toggler={toggler2}
				sources={[
					<iframe
						src={icon}
						title=" "
						width="600px"
						height="600px"
						frameBorder="0"
						allow="autoplay; fullscreen"
						allowFullScreen
					/>,
				]}
			/>
			<FsLightbox
				toggler={toggler3}
				sources={[
					<iframe
						src={icon}
						title=" "
						width="600px"
						height="600px"
						frameBorder="0"
						allow="autoplay; fullscreen"
						allowFullScreen
					/>,
				]}
			/>
			<section id="home" className="iq-main-slider p-0 iq-rtl-direction">
				<div id="prev5" className="swiper-button swiper-button-prev">
					<i className="fa fa-chevron-left"></i>
				</div>
				<div id="next5" className="swiper-button swiper-button-next">
					<i className="fa fa-chevron-right"></i>
				</div>
				<Swiper
					navigation={{
						prevEl: '#prev5',
						nextEl: '#next5',
					}}
					pagination={{
						clickable: true,
					}}
					onInit={() => {
						animationInit();
					}}
					onSlideChangeTransitionStart={() => animationInit()}
					loop={true}
					id="home-slider"
					className="slider m-0 p-0"
				>
					
					{allNewsData.length>0 && allNewsData?.map((newsData,i)=>{
						return <SwiperSlide style={{
							backgroundImage:
								'url(' +
								 newsData.poster +
								')',
						}} key={i} className="slide slick-bg s-bg-1">
						<Container fluid className="position-relative h-100">
							<div className="slider-inner h-100">
								<Row className="align-items-center  iq-ltr-direction h-100 ">
									<Col xl="6" lg="12" md="12" className="sliderInfo">
										<Link to="#">
											<div className="channel-logo" data-iq-delay="0.5">
												<img
													src="https://i.ibb.co/7ytKzdb/Untitled-155-50-px.gif"
													className="c-logo"
													alt="streamit"
												/>
											</div>
										</Link>
										<h1
											className="slider-text big-title title text-uppercase"
											data-iq-gsap="onStart"
											data-iq-position-x="-200"
										>
											{newsData.newsTitle}
										</h1>
										<div className="d-flex flex-wrap align-items-center">
											<p data-iq-gsap="onStart" data-iq-position-y="80" data-iq-delay="0.5">
												{newsData.newsShortDescription}
											</p>
										</div>
										<div
										   style={{position:"relative",bottom:"24px"}}
											className="trending-list"
											data-iq-gsap="onStart"
											data-iq-position-y="80"
											data-iq-delay="1"
										>
											<div className="text-primary title starring">
												Catagory:{' '}
												<span className="text-body">
													<a href="/sp" className="catagory">
														Sharad Pawar
													</a>
													<a href="/pm" className="catagory">
														PM Modi
													</a>
													<a href="/KE" className="catagory">
														Karnataka Electiions
													</a>
												</span>
											</div>
											<div className="text-primary title genres">
												Location: <span className="text-body">Mumbai, Maharashtra</span>
											</div>
											<div className="text-primary title tag">
												Date:{' '}
												<span className="text-body">
													{new Date().toLocaleDateString('en-In', {
														year: 'numeric',
														month: 'long',
														day: 'numeric',
													})}
													<span className="timeSlider">
														{
															// get current time //
															new Date().toLocaleTimeString('en-US', {
																hour: 'numeric',
																minute: 'numeric',
																hour12: true,
															})
														}
													</span>
												</span>
											</div>
										</div>
										<div
											className="d-flex align-items-center r-mb-23 slider-action-btn"
											data-iq-gsap="onStart"
											data-iq-position-y="80"
											data-iq-delay="0.8"
										>
											<Link to="/show-details" className="video-open playbtn mr-3">
												<TbPlayerPlay className="heroIcon" />
												<span className="w-trailor">Watch</span>
											</Link>
											<Link to="/show-details" className="btn btn-hover iq-button sliderBtn">
												<TbCloudDownload className="heroIcon" />
												Download Now
											</Link>
										</div>
									</Col>
								</Row>
							</div>
						</Container>
					</SwiperSlide>
					})}

				</Swiper>
			</section>
			<div className="main-content">
				<section id="iq-favorites">
					<Container fluid>
						<Row>
							<Col sm="12" className="overflow-hidden">
								<div className="d-flex align-items-center justify-content-between">
									<h4 className="main-title">Latest Movies</h4>
									<Link className="iq-view-all" to="/movie-category">
										View All
									</Link>
								</div>
								<div id="favorites-contens">
									<div id="prev" className="swiper-button swiper-button-prev">
										<i className="fa fa-chevron-left"></i>
									</div>
									<div id="next" className="swiper-button swiper-button-next">
										<i className="fa fa-chevron-right"></i>
									</div>
									<Swiper
										navigation={{
											prevEl: '#prev',
											nextEl: '#next',
										}}
										breakpoints={{
											320: { slidesPerView: 1 },
											550: { slidesPerView: 1 },
											991: { slidesPerView: 2 },
											1400: { slidesPerView: 3 },
										}}
										loop={true}
										slidesPerView={4}
										spaceBetween={20}
										as="ul"
										className="favorites-slider list-inline  row p-0 m-0 iq-rtl-direction"
									>
										<SwiperSlide as="li">
											<div className=" block-images position-relative">
												<div className="img-box">
													<img
														src="https://cdn.thewire.in/wp-content/uploads/2023/05/08195808/FvdSxSbXgAAAAzv-1200x600.jpeg"
														className="img-fluid"
														alt=""
													/>
												</div>
												<div className="block-description">
													<h6 className="iq-title">
														<Link to="/show-details" className="smallVideoTitle">
															Govt bailout of Go First unlikely unless engine issue is
															resolved: Minister
														</Link>
													</h6>
													<div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
														<div className="badge badge-secondary p-1 mr-2">Government</div>
														<span className="text-white">May 09, 2023, 12:15 PM</span>
													</div>
													<div className="hover-buttons">
														<Link
															to="/show-details"
															role="button"
															className="btn btn-hover iq-button sliderSmallBtn"
														>
															<i className="fa fa-play mr-1" aria-hidden="true"></i>
															Play Now
														</Link>
													</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide as="li">
											<div className=" block-images position-relative">
												<div className="img-box">
													<img
														src="https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/05/the-kerala-story-high-court-rejects-plea-for-stay-on-adah-sharma-starrer-read-on-001.jpg"
														className="img-fluid"
														alt=""
													/>
												</div>
												<div className="block-description">
													<h6 className="iq-title">
														<Link to="/show-details" className="smallVideoTitle">
															After Madhya Pradesh, UP declares ‘The Kerala Story’
															tax-free
														</Link>
													</h6>
													<div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
														<div className="badge badge-secondary p-1 mr-2">Movies</div>
														<span className="text-white">May 09, 2023, 12:15 PM</span>
													</div>
													<div className="hover-buttons">
														<Link
															to="/show-details"
															role="button"
															className="btn btn-hover iq-button sliderSmallBtn"
														>
															<i className="fa fa-play mr-1" aria-hidden="true"></i>
															Play Now
														</Link>
													</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide as="li">
											<div className=" block-images position-relative">
												<div className="img-box">
													<img
														src="https://ichef.bbci.co.uk/news/976/cpsprodpb/BB46/production/_129624974_gettyimages-1252657458.jpg"
														className="img-fluid"
														alt=""
													/>
												</div>
												<div className="block-description">
													<h6 className="iq-title">
														<Link to="/show-details" className="smallVideoTitle">
															Manipur Violence News Updates: Internet ban extended till
															May 13
														</Link>
													</h6>
													<div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
														<div className="badge badge-secondary p-1 mr-2">Violence</div>
														<span className="text-white">May 09, 2023, 12:57 AM</span>
													</div>
													<div className="hover-buttons">
														<Link
															to="/show-details"
															role="button"
															className="btn btn-hover iq-button sliderSmallBtn"
														>
															<i className="fa fa-play mr-1" aria-hidden="true"></i>
															Play Now
														</Link>
													</div>
												</div>
											</div>
										</SwiperSlide>
									</Swiper>
								</div>
							</Col>
						</Row>
					</Container>
				</section>

				<section id="parallex" className="parallax-window">
					<Container fluid className="h-100">
						<Row className="align-items-center justify-content-center h-100 parallaxt-details">
							<Col lg="4" className="r-mb-23">
								<div className="text-left">
									<Link to="#">
										<img
											src="https://i.ibb.co/8bgFCvG/Live-streaming-1.png"
											className="img-fluid"
											width={220}
											alt="bailey"
										/>
									</Link>

									<h1 className="marathi">
										राष्ट्रवादीचा एक गट भाजपाबरोबर जाण्यासाठी बॅगा भरून…”, राऊतांच्या ‘त्या’ टीकेला
										अजित पवारांचं प्रत्युत्तर!
									</h1>
									<p className="marathiSmall">
										ठाकरे गटाचे खासदार संजय राऊत यांनी ‘सामना’ वृत्तपत्रातील अग्रलेखातून राष्ट्रवादी
										काँग्रेसचे अध्यक्ष शरद पवार यांच्या राजीनाम्यावर भाष्य केलं आहे. ईडी, सीबीआयसह
										इतर तपास यंत्रणांच्या भीतीपोटी राष्ट्रवादी काँग्रेसमधील एक गट भाजपाबरोबर
										जाण्याच्या तयारीत होता. पण शरद पवारांनी राजीनामा देत बंडखोरीची योजना हाणून
										पाडली, अशा आशयाची टीका संजय राऊतांनी केली.
									</p>
									<div className="parallax-buttons">
										<Link to="/movie-details" className="btn btn-hover iq-button sliderBtn">
											Play Now
										</Link>
									</div>
								</div>
							</Col>
							<Col lg="8">
								<div className="parallax-img">
									<Link to="/movie-details">
										<img
											src="https://www.loksatta.com/wp-content/uploads/2023/05/Raut-and-Ajit.jpg"
											className="img-fluid w-100"
											alt="bailey"
										/>
									</Link>
								</div>
							</Col>
						</Row>
					</Container>
				</section>
			</div>
		</>
	);
};

export default Homepage;
