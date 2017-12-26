import React, { Component } from 'react';
import classnames from 'classnames';
import $ from 'jquery'

class Courses extends Component{
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
								<li><a className="active" href="/courses" data-hover="Courses">Courses</a></li>
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
						<h3>Our Courses</h3>
					 </div>
				</div> 
			  </div>
<div className = "container">
{ /*style= "display: flex; flex-wrap: wrap " */}
    <div className ="row text-center" >


        <div className ="col-md-3 col-sm-6">
            <div className = "thumbnail spthumbnail">
                <img src = "myimages/courses/citizenship.png	" />
                    <div className="caption">
                        <h4>Citizenship</h4>
                    </div>
                <a href = "/citizenship" className = "btn btn-success">View Details</a>
            </div>
        </div>
        
        
        <div className ="col-md-3 col-sm-6">
            <div className = "thumbnail spthumbnail">
                <img src = "myimages/courses/Arabic.png" />
                    <div className="caption">
                        <h4>Arabic</h4>
                    </div>
                <a href = "/campgrounds" className = "btn btn-success">View Details</a>
            </div>
        </div>
        
        
        <div className ="col-md-3 col-sm-6">
            <div className = "thumbnail spthumbnail">
                <img src = "myimages/courses/ict.jpg" />
                    <div className="caption">
                        <h4>ICT</h4>
                    </div>
                <a href = "/historicalPlaces" className = "btn btn-success">View Details</a>
            </div>
        </div>
        
        
        <div className ="col-md-3 col-sm-6">
            <div className = "thumbnail spthumbnail">
                <img src = "myimages/courses/Urdu.png" />
                    <div className="caption">
                        <h4>Urdu</h4>
                    </div>
                <a href = "/institutes" className = "btn btn-success">View Details</a>
            </div>
        </div>
        
        
        <div className ="col-md-3 col-sm-6">
            <div className = "thumbnail spthumbnail">
                <img src = "myimages/courses/General-Science.jpg" />
                    <div className="caption">
                        <h4>General Science</h4>
                    </div>
                <a href = "/hospitals" className = "btn btn-success">View Details</a>
            </div>
        </div>
        
        
        <div className ="col-md-3 col-sm-6">
            <div className = "thumbnail spthumbnail">
                <img src = "myimages/courses/QC.jpg" />
                    <div className="caption">
                        <h4>Quranic Curriculum</h4>
                    </div>
                <a href = "/shoppingMalls" className = "btn btn-success">View Details</a>
            </div>
        </div>
        
        
        <div className ="col-md-3 col-sm-6">
            <div className = "thumbnail spthumbnail">
                <img src = "myimages/courses/maths.jpg" />
                    <div className="caption">
                        <h4>Mathematics</h4>
                    </div>
                <a href = "/mathematics" className = "btn btn-success">View Details</a>
            </div>
        </div>
        
        
        <div className ="col-md-3 col-sm-6">
            <div className = "thumbnail spthumbnail">
                <img src = "myimages/courses/HG.jpg" alt = "Doesn't Exist" />
                    <div className="caption">
                        <h4>History And Geography</h4>
                    </div>
                <a href = "/historyandgeography" className = "btn btn-success">View Details</a>
            </div>
        </div>
        
                
        <div className ="col-md-3 col-sm-6">
            <div className = "thumbnail spthumbnail">
                <img src = "myimages/courses/ABC.jpg" />
                    <div className="caption">
                        <h4>Academic Booster Club</h4>
                    </div>
                <a href = "/batas" className = "btn btn-success">View Details</a>
            </div>
        </div>
                
                
        <div className ="col-md-3 col-sm-6">
            <div className = "thumbnail spthumbnail">
                <img src = "myimages/courses/PE.jpg" />
                    <div className="caption">
                        <h4>Physical Education</h4>
                    </div>
                <a href = "/servises" className = "btn btn-success">View Details</a>
            </div>
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

export default Courses;			