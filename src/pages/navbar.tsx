import { useState } from "react";

export default function NavBar() {
	const [extended, setExtended] = useState(true)

	const switchExtended = () => { setExtended(it => !it) }

	return <>
		<nav className={`border border-gray-500 transition-all duration-200 h-5/6 max-w-xs z-10`}>
			{(
				() => {
					if (extended)
						return <>
							<div
								onClick={switchExtended}
								className="flex flex-col items-end justify-center h-full w-8">
								<div>
									ext
								</div>
							</div>
						</>
					else
						return <>
							<button
								onClick={switchExtended}
								className="h-8 border">
								close
							</button>
							<div className="overflow-hidden text-ellipsis hover:text-clip line-clamp-1 hover:line-clamp-none">
								somepage
							</div>
						</>
				}
			)()}


		</nav>
	</>
}