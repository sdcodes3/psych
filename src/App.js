import Ques from "./Questions";

function App() {
	return (
		<div className="App h-100 d-flex flex-column">
			
			<nav className="navbar navbar-expand bg-warning">
				<div className="container-fluid">
					<ul className="navbar-nav mx-auto gap-3">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">Play</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">Contact us</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">About us</a>
						</li>
					</ul>
				</div>
			</nav>
			<main className="flex-grow-1 d-flex align-items-m-center">
				<Ques />
			</main>
		</div>
	);
}

export default App;