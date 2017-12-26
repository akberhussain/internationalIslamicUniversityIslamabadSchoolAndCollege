import React, { Component } from 'react';
import classnames from 'classnames';
import $ from 'jquery'

class About extends Component{
	render(){
	  // const { classNameName, ...props } = this.props;
		return (
			<div>
				<div id="home" className="header two">
					<div className="top-header two">	
						<div className="container">
						<div className="logo">
							<a href="/"><h1>IIUIS, <span>Latifabad Campus</span></h1></a>
						</div>
					<div className="top-menu">
							<span className="menu"> </span>
								<ul className="cl-effect-16">
								 <li><a href="/" data-hover="Home">Home</a></li>
								<li><a className="active" href="/about" data-hover="About">About</a></li>
								<li><a href="/courses" data-hover="Courses">Courses</a></li>
								<li><a href="/gallery" data-hover="Gallery">Gallery</a></li>
								<li><a href="/404" data-hover="blog">Blog</a></li>
								<li><a href="/contact" data-hover="Contact">Contact</a></li>
								  <div className="clearfix"></div>
								</ul>
							</div>
								<script>
									$("span.menu").click(function(){
										$(".top-menu ul").slideToggle("slow" , function(){
										})
									});
								</script>
							<div className="clearfix"> </div>
					</div>
				</div>
			    <div className="clearfix"> </div>
		</div>
			<div className="about-section">
				 <div className="container">
				     <div className="about-head">
							<h3>About Us</h3>
							<p>A Few words about us</p>
					 </div>
				      	<div className="col-md-12 slide-about">
									<div className="side">
										 <div  id="top" className="callbacks_container">
												<ul className="rslides" id="slider4">
														<li>
															<img src="myimages/DSC03948.jpg" className="img-responsive" alt="" />
														</li>
														
													 	<li>
															<img src="myimages/DSC03945.jpg" className="img-responsive" alt="" />
														</li>
														<li>
															<img src="myimages/DSC04503.jpg" className="img-responsive" alt="" />
														</li>
														<li>
															<img src="myimages/DSC04773.jpg" className="img-responsive" alt="" />
														</li> 
													 </ul>
												</div>
											</div>

							{/*	<script src="js/responsiveslides.min.js"></script>
							 <script>

								$(function () {
								  // Slideshow 4
								  $("#slider4").responsiveSlides({
									auto: true,
									pager:false,
									nav: true,
									speed: 500,
									namespace: "callbacks",
									before: function () {
									  $('.events').append("<li>before event fired.</li>");
									},
									after: function () {
									  $('.events').append("<li>after event fired.</li>");
									}
								  })
							
								});
							  </script> */}
						<div className="clearfix"> </div>
					</div>
					<div className="col-md-12 about-text">
					   <p>Our philosophy is learning through play and practice as we offer a practical environment for children.</p>

						   <p>We envision a school that prepares students for the 21st Century so that they may be powerful members of a society who are emblems of good practices, high character traits and superior in their skills and values. IIUI Schools will be Centers of learning where:</p>
						  <ul className = "about-text">
						  	<li><p>Modern methods are used as daily practice to transform education.</p></li>
						  	<li><p>Core Islamic values and cultural norms are used to help in developing model human beings who excel in all aspects of curriculum and global themes.</p></li>
						  	<li><p>The environment promotes equal respect, confidence and commitment to learning and self-development.</p></li>
						  	<li><p>The faculty and management is dedicated to student cantered learning and focus on process of learning and strategic outcomes.</p></li>
						  	<li><p>School systems and policies are facilitative in nature and staff and student motivation remains the key to success of the school.</p></li>
						  	<li><p>Self-evaluation is a norm followed by all levels of staff and students.</p></li>
						  </ul>    
					</div>
					<div className="clearfix"></div>
				 </div>
			</div>

		{/*	<div className="slide-bottom">
			  <div className="slide-bottom-grids">
				 <div className="container">
					 <div className="col-md-6 slide-bottom-grid">
							<h3>Welcome!</h3>
							<p>Ruelloribus eget elemetum vel curleif end elit. for that matter even a relationship, for that matter even a relationship, Aean auctoetnliir pis terios. ante ipsummis fauulet utrice posere cubtsed leo pharetu nec augue. dui bibendum ornare elementum. In vel mi pellentesque.</p>
					 </div>
					 <div className="col-md-6 about-text">
					 	<div className = " slide-bottom-grid">
					       <h3>Our Mission</h3>
					    </div>   
						   <p>Our philosophy is learning through play and practice as we offer a practical environment for children.</p>

						   <p>We envision a school that prepares students for the 21st Century so that they may be powerful members of a society who are emblems of good practices, high character traits and superior in their skills and values. IIUI Schools will be Centers of learning where:</p>
						  <ul className = "about-text">
						  	<li><p>Modern methods are used as daily practice to transform education.</p></li>
						  	<li><p>Core Islamic values and cultural norms are used to help in developing model human beings who excel in all aspects of curriculum and global themes.</p></li>
						  	<li><p>The environment promotes equal respect, confidence and commitment to learning and self-development.</p></li>
						  	<li><p>The faculty and management is dedicated to student cantered learning and focus on process of learning and strategic outcomes.</p></li>
						  	<li><p>School systems and policies are facilitative in nature and staff and student motivation remains the key to success of the school.</p></li>
						  	<li><p>Self-evaluation is a norm followed by all levels of staff and students.</p></li>
						  </ul> 
					 </div>
					   <div className="clearfix"></div>
				 </div>
			 </div>
		</div> */}
		<div className="slide-bottom">
			  <div className="slide-bottom-grids">
				 <div className="container">
					 <div className="col-md-6 slide-bottom-grid">
							<h3>Our President</h3>
							<p>In the name of Allah, the most beneficent the most merciful
							It is the matter of great pleasure and pride for me to witness establishment of “A School of the Future” by International Islamic University Islamabad for society of Pakistan that aims at educating the upcoming generations as per Islamic teaching.
							These schools provide futuristic vision through the development of general education in all fields of science and technology; thereby providing education to Pakistani youth in a manner that serves their futuristic ambitious and aspirations and engenders prosperity for all.
							As the curriculum of these schools is being supervised by a special department of the University, it is rightfully compatible to the syllabus of the university. Therefore we look forward to offer our focused appreciation, total assistance and fruitful efforts in producing developed and well-versed generation in every part of Pakistan.
							May Almighty Allah make these schools to be ranked at the top standard of quality, efficiency and output in providing an educational curriculum according to Islamic teachings.
							I am thankful to all who are associated with this successful program and who are not sparing single moment in their efforts for the service of Pakistani nation through establishment and supervision on these schools.<br/>

							<strong>Wa alssalam-o-alaikum wa rahmatullah wa barakatuh.</strong>

							<h4>Pro. Dr. Ahmed Yousef Draiweesh</h4>
							<strong>President International Islamic University Islamic </strong></p>
					 </div>
					 <div className="col-md-6 about-text">
					 	<div className = " slide-bottom-grid">
					       <h3>Our Rector</h3>
					       <p>It is my pleasure to witness the steady growth and development of International Islamic University Islamabad Colleges across Pakistan. In line with the vision of International Islamic University, the IIUI colleges will act as trendsetters in the field of education maintained by International milestones and standards. One of the most ratifying outcomes would be competent, aware and skilled citizens whose behavior is exemplary and in line with teachings of Islamic; the foundation on which the University is based. These colleges will assist in creating high achievers with advanced analytical skills pruned by competent staff.
							This initiative will surely act as a model for other universities to follow to benefit the growing population of Pakistan.
							We are confident that the key staff of Institute of Professional Development, IIU that has established, monitored and created systems and curriculum of IIUI colleges will continue their competent and dedicated efforts to make this network of IIUI colleges a most prominent and successful institution of Pakistan.
							<h4>Pro. Dr. Masoom Yasinzai</h4>
							<strong>Rector International Islamic University Islamabad</strong></p>
					    </div>   
					 </div>
					   <div className="clearfix"></div>
				 </div>
			 </div>
		</div>

	<div className="slide-bottom">
			  <div className="slide-bottom-grids">
				 <div className="container">
					 <div className="col-md-6 about-text">
					 	<div className = " slide-bottom-grid">
					       <h3>Our Director</h3>
					       <p>“Read in the name of your Lord who created, created man from a clinging form. Read! Your Lord is the Most Generous, who taught by means of the pen; taught man what he did not know.” (96:1-5)
							This above verse has always been my motivation for establishing a community that exhibits the proven teaching & learning methods without the boundaries of race, religion and ethnicity. On 14th August 2015, the dream came true as International Islamic University Islamabad Schools established its Latifabad Hyderabad Campus in Hyderabad.
							Now, with strong believe in Allahﷻ and support that we received from parents and friends, we are looking forward for developing next generation capable to solve their communal problems and face challenges in the modern world in the light of Principles bestowed by Allahﷻ, upon humanity by the last Prophet Muhammadﷺ.
							No-more HEAVY bags! No-more USELESS homework! No-tolerance to Punishment! At campus, we call it a CAMPAIGN not merely a school. Today, IIUISL has served an alternate educational culture through this campaign for the people of Hyderabad.
							<br/>
							<strong>Director, IIUISL Latifabad</strong></p>
						    </div>   
					 </div>
					   <div className="clearfix"></div>
				 </div>
			 </div>
		</div>
		<div className="footer">
				<div className="container">
					<div className="copy">
		              <p>&copy; 2018 All Rights Reserved Design by <a href="http://iiuis-hyd.edu.pk/">IIUIS, Latifabad</a> </p>
		            </div>
					
				</div>
			</div>
	</div>
			
		);
	}
}

export default About;