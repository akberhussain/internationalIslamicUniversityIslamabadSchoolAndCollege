import React, { Component } from 'react';
import classnames from 'classnames';
import $ from 'jquery'

class Citizenship extends Component{
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
						<h4>Courses/Citizenship</h4>
					 </div>
				</div> 
			  </div>
			  	<div className ="container">
        <div className = "row">
            <div className ="col-md-12">
                <div className= "thumbnail">
                    <img className= "img-responsive" src = "myimages/courses/citizenship.png" />
                    <div className = "caption-full" >
                        
                        <h4 className = "forPadding"><strong>Created By: IIUIS, Latifabad</strong></h4>
                        <h4 className = "forPadding"><a>Citizenship</a></h4>
                        <h4 className = "forPadding">Description: </h4>
                        <p className = "forPadding">This is a a course at IIUIS. Latifabad</p>
                        <form>
	                        <div className = "text-right form-group">
	                            <input  className = "btn btn-success" type= "submit" value = "Take This Course" />
	                        </div>
                    	</form>
                        {
                          /*  <a className="btn btn-xs btn-warning specify" href = "<%= url %>/<%= places._id %>/edit">Edit!!</a>
                            <form className = "dform" action = "<%= url %>/<%= places._id %>?_method=delete" method = "post" >
                                <button className="btn btn-xs btn-danger specify">Delete!!</button>
                            </form>	*/ 
                        }   
                    </div>
                </div>
            
                <div className= "well">
                    <div class="col-md-12">

                            <div class="panel panel-flat">
                                <div class="panel-heading">
                                    <h1 class="panel-title">Our Resources</h1>
                                    <div class="heading-elements">
                                        <span><i class="icon-bell2"></i></span>
                                    </div>
                                </div>

                                <br/>
                                <br/>

                                <div className="container-fluid">
                                    <div className="row">
                                        

                                        <div className="col-lg-12">
                                            <table className = "table table-striped table-bordered table-hover table-responsive box-shadow-table">

                                                <thead className = "thead-inverse">
                                                    <tr><th><h5>Grade 1</h5></th><td><strong><a href= "#">Link to the Resource</a></strong></td></tr>
                                                    <tr><th><h5>Grade 2</h5></th><td><strong><a href= "#">Link to the Resource</a></strong></td></tr>
                                                    <tr><th><h5>Grade 3</h5></th><td><strong><a href= "#">Link to the Resource</a></strong></td></tr>
                                                    <tr><th><h5>Grade 4</h5></th><td><strong><a href= "#">Link to the Resource</a></strong></td></tr>
                                                    <tr><th><h5>Grade 5</h5></th><td><strong><a href= "#">Link to the Resource</a></strong></td></tr>
                                                    <tr><th><h5>Grade 6</h5></th><td><strong><a href= "#">Link to the Resource</a></strong></td></tr>
                                                    <tr><th><h5>Grade 7</h5></th><td><strong><a href= "#">Link to the Resource</a></strong></td></tr>
                                                    <tr><th><h5>Grade 8</h5></th><td><strong><a href= "#">Link to the Resource</a></strong></td></tr>


                                                </thead>
                                                <tbody>
                                                    <tr></tr>
                                                </tbody>    
                                            </table>        

                                        </div>

                                    </div>
                                </div>

                                <div class="position-relative" id=""></div>
                            </div>
                    
                        </div>

                    <hr/>                   
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

export default Citizenship;			