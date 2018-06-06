import React, {Component} from 'react'

class Footer extends Component {
  render(){
    return(
      <div>
        <footer className="footer-basic-centered">

			<p className="footer-company-motto">Making Fitness Fun!</p>

			<p className="footer-links">
				<a href="/login">Login</a>
				·
				<a href="/register">Register</a>
				·
				<a href="/groupworkouts">Group Workout</a>
				·
				<a href="/aboutus">About Us</a>
				·
			</p>

			<p className="footer-company-name">Fitology &copy; 2018</p>

		</footer>
  </div>

    )
  }
}

export default Footer
