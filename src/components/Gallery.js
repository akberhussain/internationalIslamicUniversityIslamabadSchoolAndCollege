import React, { Component } from 'react';
import clasnames from 'classnames';
import $ from 'jquery';
class Gallery extends Component{
	render(){
	  // const { classNameNameName, ...props } = this.props;
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
								<li><a  href="/about" data-hover="About">About</a></li>
								<li><a href="/courses" data-hover="Courses">Courses</a></li>
								<li><a className="active" href="/gallery" data-hover="Gallery">Gallery</a></li>
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
	<div className="gallery services">
		<div className="container">
				   <div className="gallery-head">
							<h3>Gallery</h3>
							<p>Our Schools Gallery</p>
					 </div>
			<div className="portfolio-bottom">
				<div className="gallery-one two">
					<div className="col-md-4 gallery-left two">
						<a href="myimages/DSC03945.jpg" className=" mask b-link-stripe b-animate-go   swipebox"  title="Image Title">
								<img src="myimages/DSC03945.jpg" alt="" className="img-responsive zoom-img"/>
						</a>
					</div>
					<div className="col-md-4 gallery-left two">
						<a href="myimages/DSC03948.jpg" className=" mask b-link-stripe b-animate-go   swipebox"  title="Image Title">
								<img src="myimages/DSC03948.jpg" alt="" className="img-responsive zoom-img"/>
						</a>
					</div>
					<div className="col-md-4 gallery-left two">
						<a href="myimages/DSC03942.jpg" className=" mask b-link-stripe b-animate-go   swipebox"  title="Image Title">
								<img src="myimages/DSC03942.jpg" alt="" className="img-responsive zoom-img"/>
						</a>
					</div>
					<div className="col-md-4 gallery-left two">
						<a href="myimages/DSC04067.jpg" className=" mask b-link-stripe b-animate-go   swipebox"  title="Image Title">
								<img src="myimages/DSC04067.jpg" alt="" className="img-responsive zoom-img"/>
						</a>
					</div>
					<div className="col-md-4 gallery-left two">
						<a href="myimages/CE16-9.jpg" className=" mask b-link-stripe b-animate-go   swipebox"  title="Image Title">
								<img src="myimages/CE16-9.jpg" alt="" className="img-responsive zoom-img"/>
						</a>
					</div>
					<div className="col-md-4 gallery-left two">
						<a href="myimages/DSC04469.jpg" className=" mask b-link-stripe b-animate-go   swipebox"  title="Image Title">
								<img src="myimages/DSC04469.jpg" alt="" className="img-responsive zoom-img"/>
						</a>
					</div>
					<div className="col-md-4 gallery-left two">
						<a href="myimages/DSC04560.jpg" className=" mask b-link-stripe b-animate-go   swipebox"  title="Image Title">
								<img src="myimages/DSC04560.jpg" alt="" className="img-responsive zoom-img"/>
						</a>
					</div>
					<div className="col-md-4 gallery-left two">
						<a href="myimages/DSC04557.jpg" className=" mask b-link-stripe b-animate-go   swipebox"  title="Image Title">
								<img src="myimages/DSC04557.jpg" alt="" className="img-responsive zoom-img"/>
						</a>
					</div>
					<div className="col-md-4 gallery-left two">
						<a href="myimages/DSC04745.jpg" className=" mask b-link-stripe b-animate-go   swipebox"  title="Image Title">
								<img src="myimages/DSC04745.jpg" alt="" className="img-responsive zoom-img"/>
						</a>
					</div>
					<div className="col-md-4 gallery-left two">
						<a href="myimages/DSC04766.jpg" className=" mask b-link-stripe b-animate-go   swipebox"  title="Image Title">
								<img src="myimages/DSC04766.jpg" alt="" className="img-responsive zoom-img"/>
						</a>
					</div>
					<div className="col-md-4 gallery-left two">
						<a href="myimages/DSC04769.jpg" className=" mask b-link-stripe b-animate-go   swipebox"  title="Image Title">
								<img src="myimages/DSC04769.jpg" alt="" className="img-responsive zoom-img"/>
						</a>
					</div>
					<div className="col-md-4 gallery-left two">
						<a href="myimages/DSC04773.jpg" className=" mask b-link-stripe b-animate-go   swipebox"  title="Image Title">
								<img src="myimages/DSC04773.jpg" alt="" className="img-responsive zoom-img"/>
						</a>
					</div>
					<div className="col-md-4 gallery-left two">
						<a href="myimages/DSC04777.jpg" className=" mask b-link-stripe b-animate-go   swipebox"  title="Image Title">
								<img src="myimages/DSC04777.jpg" alt="" className="img-responsive zoom-img"/>
						</a>
					</div>
					<div className="col-md-4 gallery-left two">
						<a href="myimages/DSC04611.jpg" className=" mask b-link-stripe b-animate-go   swipebox"  title="Image Title">
								<img src="myimages/DSC04611.jpg" alt="" className="img-responsive zoom-img"/>
						</a>
					</div>
					<div className="col-md-4 gallery-left two">
						<a href="myimages/DSC04520.jpg" className=" mask b-link-stripe b-animate-go   swipebox"  title="Image Title">
								<img src="myimages/DSC04520.jpg" alt="" className="img-responsive zoom-img"/>
						</a>
					</div>
					<div className="col-md-4 gallery-left two">
						<a href="myimages/DSC04503.jpg" className=" mask b-link-stripe b-animate-go   swipebox"  title="Image Title">
								<img src="myimages/DSC04503.jpg" alt="" className="img-responsive zoom-img"/>
						</a>
					</div>
				</div>
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

export default Gallery;