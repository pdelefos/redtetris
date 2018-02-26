import React from "react"
import "./style.css"

let Home = () => {
  return (
		<div>
			<input type="text" id="username" />
			<button
				className="button"
				onClick={
					() => {
						pushUser(document.getElementById("username").value)
					}
				}>
				Send user!
			</button>
		</div>
  )
}

export default Home
