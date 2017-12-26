import React, { Component } from 'react';
import classnames from 'classnames';
import $ from 'jquery'

//import 'responsiveslides.min.js'

class Home extends Component{
	render(){
	  // const { classNameName, ...props } = this.props;
		return (
			<div>
				<div id="home" className="header">
					<div className="top-header">
						<div className="container">
						<div className="logo">
							<a href="/home"><h1>IIUIS, <span>Latifabad Campus</span></h1></a>
						</div>
					<div className="top-menu" >
							<span className="menu"> </span>
								<ul className="cl-effect-16">
								<li><a className="active" href="/" data-hover="Home">Home</a></li>
								<li><a  href="/about" data-hover="About">About</a></li>
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
	  			
			    <div  id="top" className="callbacks_container">
			      <ul className="rslides" id="slider4">
			        <li>
			          <div className="slider-top">
			          		<h2>Knowledge is Power</h2>
							<p>Knowledge is power. You can't begin a career, for that matter even a relationship, unless you know everything there is to know about it  You can't begin a career, for that matter even a relationship, unless you know everything there is to know about it..</p>
							<h6>Welcoming for every Child</h6>
			          </div>
			        </li>
			        <li>
			        <div className="slider-top">
			          		<h2>Perfect Education</h2>
							<p>Knowledge is power. You can't begin a career, for that matter even a relationship, unless you know everything there is to know about it  You can't begin a career, for that matter even a relationship, unless you know everything there is to know about it..</p>
							<h6>Welcoming for every Child</h6>
			          </div>
			        </li>
			        <li>
			           <div className="slider-top">
			          		<h2>School Education</h2>
							<p>Knowledge is power. You can't begin a career, for that matter even a relationship, unless you know everything there is to know about it  You can't begin a career, for that matter even a relationship, unless you know everything there is to know about it..</p>
							<h6>Welcoming for every Child</h6>
			          </div>
			        </li>
					<li>
			           <div className="slider-top">
			          	    <h2>Perfect Education</h2>
							<p>Knowledge is power. You can't begin a career, for that matter even a relationship, unless you know everything there is to know about it  You can't begin a career, for that matter even a relationship, unless you know everything there is to know about it..</p>
							<h6>Welcoming for every Child</h6>
			          </div>
			        </li>
			      </ul>
			    </div>
			    <div className="clearfix"> </div>
			</div>
			<div className="slide-bottom">
			<div className="slide-bottom-grids">
				 <div className="container">
					 <div className="col-md-6 slide-bottom-grid">
							<h3>Welcome!</h3>
							<p>Ruelloribus eget elemetum vel curleif end elit. for that matter even a relationship, for that matter even a relationship, Aean auctoetnliir pis terios. ante ipsummis fauulet utrice posere cubtsed leo pharetu nec augue. dui bibendum ornare elementum. In vel mi pellentesque.</p>
					 </div>
					 <div className="col-md-6 slide-bottom-grid">
					       <h3>Our Mission</h3>
						   <p>Ruelloribus eget elemetum vel curleif end elit. for that matter even a relationship, for that matter even a relationship, Aean auctoetnliir pis terios. ante ipsummis fauulet utrice posere cubtsed leo pharetu nec augue. dui bibendum ornare elementum. In vel mi pellentesque.</p>
					 </div>
					   <div className="clearfix"></div>
				 </div>
			 </div>
		</div>
	<div className="mid-bg">
		<div className="container">
			<div className="mid-section">
				
			</div>
		</div>
	</div>
	<br />


			<div className="service-section">
				<div className="col-md-7 service-section-grids">
						<div className="container">
						  <div className="serve-head">
							  <h3>Our Activities</h3>
							  <h6>Our Bestservices for your Kids</h6>
						  </div>
					 </div>
						<div className="service-grid">
							<div className="service-section-grid">
								<div className="icon">
									<i className="book"> </i>
								</div>
								<div className="icon-text">
									<h4>BOOKS STATIONARY</h4>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
								</div>
								<div className="clearfix"> </div>
							</div>
							<div className="service-section-grid">
								<div className="icon">
									<i className="pencil"> </i>
								</div>
								<div className="icon-text">
									<h4>BOOKS STATIONARY</h4>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
								</div>
								<div className="clearfix"> </div>
							</div>
							<div className="service-section-grid">
								<div className="icon">
									<i className="award"> </i>
								</div>
								<div className="icon-text">
									<h4>Lorem Ipsum dolor</h4>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
								</div>
								<div className="clearfix"> </div>
							</div>
							<div className="clearfix"> </div>
						</div>
						</div>
					<div className="col-md-5 service-text">
						  <p></p>
					</div>
				 <div className="clearfix"> </div>
			</div>
			<div className="news-section">
		<div className="container">
					<div className="news-head">
		               <h3>Current News</h3>
					   <p>Follow our Most Important News</p>
					</div>
			<div className="news">
				<div className="col-md-4 test-right01 test1">
					<img src="images/n1.jpg" className="img-responsive" alt="" />
						<div className="textbox textbox1">
							<h4 className="col-md-4 date">14<br/> <span>Jun</span><br/><lable>0 <img src="images/comment.png" className="img-responsive" alt="" /></lable></h4>
							<p className="col-md-8 news">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit...</p>
								<div className="clearfix"> </div>
						</div>
				</div>
				<div className="col-md-4 test-right01 test1">
					<img src="images/n2.jpg" className="img-responsive" alt="" />
						<div className="textbox textbox1">
							<h4 className="col-md-4 date">15<br/> <span>July</span><br/><lable>0 <img src="images/comment.png" className="img-responsive" alt="" /></lable></h4>
							<p className="col-md-8 news">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit...</p>
								<div className="clearfix"> </div>
						</div>
				</div>
				<div className="col-md-4 test-right01 test1">
					<img src="images/n3.jpg" className="img-responsive" alt="" />
						<div className="textbox textbox1">
						<h4 className="col-md-4 date">30<br /> <span>Agu</span><br/><lable>0 <img src="images/comment.png" className="img-responsive" alt="" /></lable></h4>
							<p className="col-md-8 news">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit...</p>
								<div className="clearfix"> </div>
						</div>
				</div>
			<div className="clearfix"> </div>
		</div>
	</div>
</div>
        <div className="culture-section">
		<div className="container">
				<div className="culture-head">
					<h3>Our Events</h3>
					<p>Don'T Miss our Events</p>
				</div>
				 <div className="culture">
					        <div className="col-md-6 culture-grids">
                              <a href="single.html"> <img src="images/event1.jpg" className="img-responsive" alt="" /></a>
								<div className="e_date">
                                     <h4>15<br /> <span>July</span></h4>
                                </div>
								  <a href="single.html"><h5>ART SESSION</h5></a>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
							</div>
							<div className="col-md-6 culture-grids">
								 <a href="single.html"> <img src="images/event2.jpg" className="img-responsive" alt="" /></a>
								<div className="e_date">
                                    <h4>15<br /> <span>July</span></h4>
                                </div>
								  <a href="single.html"><h5>ART SESSION</h5></a>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

							</div>
							<div className="col-md-6 culture-grids">
								  <a href="single.html"> <img src="images/event3.jpg" className="img-responsive" alt="" /></a>
								<div className="e_date">
                                    <h4>15<br /> <span>July</span></h4>
                                </div>
								  <a href="single.html"><h5>ART SESSION</h5></a>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
							</div>
							<div className="col-md-6 culture-grids">
								   <a href="single.html"> <img src="images/event4.jpg" className="img-responsive" alt="" /></a>
								<div className="e_date">
                                   <h4>15<br /> <span>July</span></h4>
                                </div>
								  <a href="single.html"><h5>ART SESSION</h5></a>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
							</div>
							<div className="clearfix"> </div>
					   </div>
				 </div>
			</div>
			<div id="contact" className="address">
		<div className="col-md-7 address-left">
			 <div className="products">
				 <h3>Classes</h3>
				 <ul>
					 <li><a href="/">Sports</a></li>
					 <li><a href="/">Music</a></li>
					 <li><a href="/">Dance</a></li>
				 </ul>
			 </div>
			 <div className="company-adout">
				 <h3>Learn</h3>
				 <ul>
					 <li><a href="/about">About</a></li>
					 <li><a href="/courses">Courses</a></li>
					 <li><a href="/contact">Contact</a></li>
				 </ul>
			 </div>
			 <div className="clearfix"></div>
			 <p>Creativity itself doesn't care at all about results - the only thing it craves is the process. 
				Learn to love the process and let whatever happens next happen,<span>
				without fussing too much about it</span></p>
		</div>
		<div className="col-md-5 address-right">
			<h3>OUR SCHOOL</h3>
			<p>Bungalow # A-27, Near LalQila, Autobhan Rd. Latifabad Hyderabad, Sindh</p>
			<ul className="bottom">
				 <li>+92 (322) 3300115</li>
			</ul>
			<ul>
				 <li><a className="mail" href="mailto:info@example.com">info@iiuis-hyd.edu.pk</a></li>
			</ul>
		</div>
		 <div className="clearfix"></div>
	</div>	
			<script type="text/javascript">
				jQuery(document).ready(function($) {
					$(".scroll").click(function(event){		
						event.preventDefault();
						$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
					})
				});
			</script>    
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

export default Home;