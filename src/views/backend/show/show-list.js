import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

//img
import episode1 from '../../../assets/images/episodes/01.jpg';
import episode2 from '../../../assets/images/episodes/02.jpg';
import episode3 from '../../../assets/images/episodes/03.jpg';
import episode4 from '../../../assets/images/episodes/04.jpg';
import episode5 from '../../../assets/images/episodes/05.jpg';
import episode6 from '../../../assets/images/episodes/06.jpg';
import episode7 from '../../../assets/images/episodes/07.jpg';
import episode8 from '../../../assets/images/episodes/08.jpg';
import episode9 from '../../../assets/images/episodes/09.jpg';
import episode10 from '../../../assets/images/episodes/10.jpg';

import ReactHlsPlayer from 'react-hls-player';
import VideoPlayer from 'react-video-js-player';
import MuxPlayer from '@mux/mux-player-react';

const ShowList = () => {
	return (
		<>
			<div className="video-container iq-main-slider">
				<iframe
					width="853"
					height="480"
					src={`https://www.youtube.com/embed/oIOnCCljFdw`}
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
					title="Embedded youtube"
				/>
			</div>
			<div className="main-content">
				<section className="movie-detail container-fluid">
					<Row>
						<Col lg="12">
							<Link to="#">
								<img
									src="https://i.ibb.co/8bgFCvG/Live-streaming-1.png"
									className="img-fluid"
									width={320}
									alt="bailey"
								/>
							</Link>
							<div className="trending-info season-info g-border">
								<div className="d-flex align-items-center text-white text-detail episode-name mb-0">
									<span className="marathi">
										“राष्ट्रवादीचा एक गट भाजपाबरोबर जाण्यासाठी बॅगा भरून…”, राऊतांच्या ‘त्या’ टीकेला
										अजित पवारांचं प्रत्युत्तर!
									</span>
								</div>
								<p className="trending-dec w-100 mb-0 marathiSmall">
									ठाकरे गटाचे खासदार संजय राऊत यांनी ‘सामना’ वृत्तपत्रातील अग्रलेखातून राष्ट्रवादी
									काँग्रेसचे अध्यक्ष शरद पवार यांच्या राजीनाम्यावर भाष्य केलं आहे. ईडी, सीबीआयसह इतर
									तपास यंत्रणांच्या भीतीपोटी राष्ट्रवादी काँग्रेसमधील एक गट भाजपाबरोबर जाण्याच्या
									तयारीत होता. पण शरद पवारांनी राजीनामा देत बंडखोरीची योजना हाणून पाडली, अशा आशयाची
									टीका संजय राऊतांनी केली.
								</p>
							</div>
						</Col>
					</Row>
				</section>
				<section id="iq-favorites">
					<Container fluid>
						<div className="block-space">
							<Row>
								<Col sm="12" className="overflow-hidden">
									<div className="iq-main-header d-flex align-items-center justify-content-between">
										<h4 className="main-title">Latest News</h4>
										<Link to="#" className="text-primary">
											View all
										</Link>
									</div>
								</Col>
							</Row>
							<Row>
								<Col md="6" className="col-1-5 iq-mb-30">
									<div className="epi-box">
										<div className="epi-img position-relative">
											<img
												src="https://ichef.bbci.co.uk/news/800/cpsprodpb/9f84/live/204a6350-ee4a-11ed-9574-6f923d766722.jpg"
												className="img-fluid img-zoom"
												alt=""
											/>
											<div className="episode-play-info">
												<div className="episode-play">
													<Link to="#">
														<i className="ri-play-fill"></i>
													</Link>
												</div>
											</div>
										</div>
										<div className="epi-desc p-3">
											<div className="d-flex align-items-center justify-content-between">
												<span className="text-white">11 Aug 20</span>
												<span className="text-primary">30m</span>
											</div>
											<Link to="#">
												<h6 className="epi-name text-white mb-0">
													Lorem Ipsum is simply dummy text
												</h6>
											</Link>
										</div>
									</div>
								</Col>
								<Col md="6" className="col-1-5 iq-mb-30">
									<div className="epi-box">
										<div className="epi-img position-relative">
											<img
												src="https://ichef.bbci.co.uk/news/800/cpsprodpb/b7f2/live/44756030-eca7-11ed-a142-ab0e42bfd9c3.jpg"
												className="img-fluid img-zoom"
												alt=""
											/>
											<div className="episode-play-info">
												<div className="episode-play">
													<Link to="#">
														<i className="ri-play-fill"></i>
													</Link>
												</div>
											</div>
										</div>
										<div className="epi-desc p-3">
											<div className="d-flex align-items-center justify-content-between">
												<span className="text-white">11 Aug 20</span>
												<span className="text-primary">30m</span>
											</div>
											<Link to="#">
												<h6 className="epi-name text-white mb-0">
													Lorem Ipsum is simply dummy text
												</h6>
											</Link>
										</div>
									</div>
								</Col>
								<Col md="6" className="col-1-5 iq-mb-30">
									<div className="epi-box">
										<div className="epi-img position-relative">
											<img
												src="https://ichef.bbci.co.uk/news/800/cpsprodpb/58cc/live/c76347f0-ec98-11ed-a142-ab0e42bfd9c3.jpg"
												className="img-fluid img-zoom"
												alt=""
											/>
											<div className="episode-play-info">
												<div className="episode-play">
													<Link to="#">
														<i className="ri-play-fill"></i>
													</Link>
												</div>
											</div>
										</div>
										<div className="epi-desc p-3">
											<div className="d-flex align-items-center justify-content-between">
												<span className="text-white">11 Aug 20</span>
												<span className="text-primary">30m</span>
											</div>
											<Link to="#">
												<h6 className="epi-name text-white mb-0">
													Lorem Ipsum is simply dummy text
												</h6>
											</Link>
										</div>
									</div>
								</Col>
								<Col md="6" className="col-1-5 iq-mb-30">
									<div className="epi-box">
										<div className="epi-img position-relative">
											<img
												src="https://ichef.bbci.co.uk/news/800/cpsprodpb/1f55/live/c3dcf2d0-ea94-11ed-a142-ab0e42bfd9c3.jpg"
												className="img-fluid img-zoom"
												alt=""
											/>
											<div className="episode-play-info">
												<div className="episode-play">
													<Link to="#">
														<i className="ri-play-fill"></i>
													</Link>
												</div>
											</div>
										</div>
										<div className="epi-desc p-3">
											<div className="d-flex align-items-center justify-content-between">
												<span className="text-white">11 Aug 20</span>
												<span className="text-primary">30m</span>
											</div>
											<Link to="#">
												<h6 className="epi-name text-white mb-0">
													Lorem Ipsum is simply dummy text
												</h6>
											</Link>
										</div>
									</div>
								</Col>
								<Col md="6" className="col-1-5 iq-mb-30">
									<div className="epi-box">
										<div className="epi-img position-relative">
											<img
												src="https://ichef.bbci.co.uk/news/800/cpsprodpb/0FB9/production/_106852040_20190117_171734.jpg"
												className="img-fluid img-zoom"
												alt=""
											/>
											<div className="episode-play-info">
												<div className="episode-play">
													<Link to="#">
														<i className="ri-play-fill"></i>
													</Link>
												</div>
											</div>
										</div>
										<div className="epi-desc p-3">
											<div className="d-flex align-items-center justify-content-between">
												<span className="text-white">11 Aug 20</span>
												<span className="text-primary">30m</span>
											</div>
											<Link to="#">
												<h6 className="epi-name text-white mb-0">
													Lorem Ipsum is simply dummy text
												</h6>
											</Link>
										</div>
									</div>
								</Col>
								<Col md="6" className="col-1-5 iq-mb-30">
									<div className="epi-box">
										<div className="epi-img position-relative">
											<img
												src="https://ichef.bbci.co.uk/news/800/cpsprodpb/11c9/live/c15e5170-edb9-11ed-9c08-49fa6e7bd8a7.jpg"
												className="img-fluid img-zoom"
												alt=""
											/>
											<div className="episode-play-info">
												<div className="episode-play">
													<Link to="#">
														<i className="ri-play-fill"></i>
													</Link>
												</div>
											</div>
										</div>
										<div className="epi-desc p-3">
											<div className="d-flex align-items-center justify-content-between">
												<span className="text-white">11 Aug 20</span>
												<span className="text-primary">30m</span>
											</div>
											<Link to="#">
												<h6 className="epi-name text-white mb-0">
													Lorem Ipsum is simply dummy text
												</h6>
											</Link>
										</div>
									</div>
								</Col>
								<Col md="6" className="col-1-5 iq-mb-30">
									<div className="epi-box">
										<div className="epi-img position-relative">
											<img
												src="https://ichef.bbci.co.uk/news/800/cpsprodpb/83e2/live/85e621a0-ee1c-11ed-a142-ab0e42bfd9c3.jpg"
												className="img-fluid img-zoom"
												alt=""
											/>
											<div className="episode-play-info">
												<div className="episode-play">
													<Link to="#">
														<i className="ri-play-fill"></i>
													</Link>
												</div>
											</div>
										</div>
										<div className="epi-desc p-3">
											<div className="d-flex align-items-center justify-content-between">
												<span className="text-white">11 Aug 20</span>
												<span className="text-primary">30m</span>
											</div>
											<Link to="#">
												<h6 className="epi-name text-white mb-0">
													Lorem Ipsum is simply dummy text
												</h6>
											</Link>
										</div>
									</div>
								</Col>
								<Col md="6" className="col-1-5 iq-mb-30">
									<div className="epi-box">
										<div className="epi-img position-relative">
											<img
												src="https://ichef.bbci.co.uk/news/800/cpsprodpb/2F8C/production/_109827121_soniaduhan2.jpg"
												className="img-fluid img-zoom"
												alt=""
											/>
											<div className="episode-play-info">
												<div className="episode-play">
													<Link to="#">
														<i className="ri-play-fill"></i>
													</Link>
												</div>
											</div>
										</div>
										<div className="epi-desc p-3">
											<div className="d-flex align-items-center justify-content-between">
												<span className="text-white">11 Aug 20</span>
												<span className="text-primary">30m</span>
											</div>
											<Link to="#">
												<h6 className="epi-name text-white mb-0">
													Lorem Ipsum is simply dummy text
												</h6>
											</Link>
										</div>
									</div>
								</Col>
								<Col md="6" className="col-1-5 iq-mb-30">
									<div className="epi-box">
										<div className="epi-img position-relative">
											<img
												src="https://ichef.bbci.co.uk/news/800/cpsprodpb/7DAC/production/_109827123_soniaduhan3.jpg"
												className="img-fluid img-zoom"
												alt=""
											/>
											<div className="episode-play-info">
												<div className="episode-play">
													<Link to="#">
														<i className="ri-play-fill"></i>
													</Link>
												</div>
											</div>
										</div>
										<div className="epi-desc p-3">
											<div className="d-flex align-items-center justify-content-between">
												<span className="text-white">11 Aug 20</span>
												<span className="text-primary">30m</span>
											</div>
											<Link to="#">
												<h6 className="epi-name text-white mb-0">
													Lorem Ipsum is simply dummy text
												</h6>
											</Link>
										</div>
									</div>
								</Col>
							</Row>
						</div>
					</Container>
				</section>
			</div>
		</>
	);
};
export default ShowList;
