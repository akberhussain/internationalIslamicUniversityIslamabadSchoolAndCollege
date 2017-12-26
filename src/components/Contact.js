import React, { Component } from 'react';
import classnames from 'classnames';
import $ from 'jquery';
class Contact extends Component{
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
								<li><a href="/about" data-hover="About">About</a></li>
								<li><a href="/courses" data-hover="Courses">Courses</a></li>
								<li><a href="/gallery" data-hover="Gallery">Gallery</a></li>
								<li><a href="/404" data-hover="blog">Blog</a></li>
								<li><a className="active" href="/contact" data-hover="Contact">Contact</a></li>
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
	 <div className="contact">
	 <div className = "container">
		 <div className="contact-head">
			<h3>Contact Us</h3>
			<p>Keep in touch with us</p>
		 </div>
	</div>	 
	<div className="map">
	 	<iframe src="https://www.google.com/maps/embed/v1/place?q=iiuis%20latifabad%20hyderabad%20pakistan&key=AIzaSyAMqOkHwfWj1wtXnOakUxoXBpC1pUaLe84"> </iframe>
	</div>
	 	<div className="container">
					
		<div className="contact-top">
		     <div className="col-md-4 contact-text">
				<div className="cont-grid">
					<div className="con-icon">
						<i className="loca"> </i>
					</div>
					<div className="con-text">
						<h4>IIUIS, Latifabad Campus</h4>
						<p>Bungalow # A-27, Near LalQila, Autobhan Rd. Latifabad Hyderabad, Sindh</p>
						
					</div>
					<div className="clearfix"> </div>
				</div>
				<div className="cont-grid">
					<div className="con-icon">
						<i className="net"> </i>
					</div>
					<div className="con-text">
						<h4>Contact US</h4>
						<p>+92 (322) 3300115</p>
					</div>
					<div className="clearfix"> </div>
				</div>
				<div className="cont-grid">
					<div className="con-icon">
						<i className="mail"> </i>
					</div>
					<div className="con-text">
						<h4>M@IL US</h4>
						<p><a className="mail" href="mailto:info@example.com">info@iiuis-hyd.edu.pk</a></p>
					</div>
					<div className="clearfix"> </div>
				</div>
			     
			 </div>
			 <div className="col-md-8 contact-form">
						<form>
						<input type="text" className="textbox" value="Name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Name';}" />
							<input type="text" className="textbox" value="Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}" />
							<textarea value="Message:" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Message';}">Message</textarea>
							<input type="submit" value="Send Now" />
						</form>
				</div>
			  <div className="clearfix"></div>
		</div>
	</div>
	 {/* AIzaSyAMqOkHwfWj1wtXnOakUxoXBpC1pUaLe84 */}
		

</div>
	<div id="contact" className="address">
		<div className="col-md-7 address-left">
			 <div className="products">
				 <h3>Classes</h3>
				 <ul>
					 <li><a href="blog.html">Sports</a></li>
					 <li><a href="blog.html">Music</a></li>
					 <li><a href="blog.html">Dance</a></li>
				 </ul>
			 </div>
			 <div className="company-adout">
				 <h3>Learn</h3>
				 <ul>
					 <li><a href="about.html">About</a></li>
					 <li><a href="/courses">Courses</a></li>
					 <li><a href="contact.html">Contact</a></li>
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
			
		{	/*			<script type="text/javascript">
									$(document).ready(function() {
										
										// var defaults = {
								  // 			containerID: 'toTop', // fading element id
										// 	containerHoverID: 'toTopHover', // fading element hover id
										// 	scrollSpeed: 1200,
										// 	easingType: 'linear' 
								 	// 	};
										
										
										$().UItoTop({ easingType: 'easeOutQuart' })
										
									});
										<a href="#home" id="toTop" className="scroll" style="display: block;"> <span id="toTopHover" style="opacity: 1;"> </span></a>
								</script> */} 
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

export default Contact;