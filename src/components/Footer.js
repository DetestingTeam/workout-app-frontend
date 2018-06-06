import React, {Component} from 'react'



class Footer extends Component {
  render(){
    return(
      <div>
        <footer class="footer-basic-centered">

			<p class="footer-company-motto">Making Fitness Fun!</p>

			<p class="footer-links">
				<a href="#">Login</a>
				·
				<a href="#">Register</a>
				·
				<a href="#">Group Workout</a>
				·
				<a href="#">About Us</a>
				·
				<a href="#">Stats</a>
				·
			</p>

			<p class="footer-company-name">Fitology &copy; 2018</p>

		</footer>
  </div>

    )
  }
}

export default Footer
