 const navbar = () =>{
    return ` 
    <div id="man">
    <div id="navbar">
            <div id="ttm">
              <div id="sho">
                <a href="#" class="menu-bars" id="show-menu">
                  <i class="fas fa-bars"></i>
                </a>
              </div>
      
              <div class="img">
                <a href="#"></a>
                <img
                src="https://i.ibb.co/DVLwgqg/I2J.jpg" alt="I2J"
                />
              </div>
            </div>
      
            <div id="ltm">
              <div id="cartt">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              </div>
              <div>
                <button id="btnn">SIGN IN</button>
              </div>
            </div>
          </div>
      
          <nav id="nav-menu">
            <ul class="nav-menu-items">
              <div id="navbar-toggle">
                <a href="#" class="menu-bars" id="hide-menu">
                  <i class="fas fa-bars nav-icon"></i>
                </a>
                <div class="img">
                  <a href="#">
                    <img
                    src="https://i.ibb.co/DVLwgqg/I2J.jpg" alt="I2J"
                  /></a>
                </div>
              </div>
      
              <div class="nav-section">
                <li id="home" class="nav-text">
                  <a href="#"><i class="fas fa-home nav-icon"></i>Home</a>
                </li>
                <li id="internships" class="nav-text">
                  <a href="#"><i class="fa fa-list nav-icon"></i>Internships</a>
                </li>
                <li id="jobs" class="nav-text">
                  <a href="#"><i class="fa-solid fa-briefcase nav-icon"></i>Jobs</a>
                </li>
                <li class="nav-text">
                  <a href="#"
                    ><i class="fa fa-id-card-o nav-icon"></i>Post Internship</a
                  >
                </li>
      
                <li id="online_courses" class="nav-text">
                  <a href="#"><i class="fa fa-book nav-icon"></i>Online Courses</a>
                </li>
                <li id="classroom_trianing" class="nav-text">
                  <a href="#"><i class="fa fa-id-card-o nav-icon"></i>Trainings</a>
                </li>
      
                <li id="contact" class="nav-text">
                  <a href="#"><i class="fa fa-phone nav-icon"></i>Contact Us</a>
                </li>
              </div>
      
              <div class="nav-section">
                <hr />
                <li id="register" class="nav-text">
                  <a href="#"><i class="fa fa-sign-in nav-icon"></i>Register</a>
                </li>
                <li id="login" class="nav-text">
                  <a href="#"><i class="fa fa-user-circle-o nav-icon"></i>Login</a>
                </li>
              </div>
            </ul>
          </nav>
          </div>
  `
 }




 export { navbar }