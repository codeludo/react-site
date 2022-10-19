import "../styles/header.css"
import iconInfo from "../assets/info-svgrepo-com.svg"
import reactLogo from "../assets/react.svg"

export default function Header() {
	return (
		<>
			<nav>
				<div className="nav-left">
					<img src={reactLogo} alt="react-logo" />
					<h1>ReactFacts</h1>
				</div>
                <div className="nav-right">
                    <h3>React Course - Project 1</h3>
					<img src={iconInfo} alt="info icon" />
                </div>
			</nav>
		</>
	)
}

