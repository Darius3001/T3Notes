import { useState } from "react";

export default function NavBar() {
	const [extended, setExtended] = useState(true)

	const switchExtended = () => { setExtended(it => !it) }

	return <>
		<nav className={`flex flex-col border border-gray-500 duration-200 h-5/6 z-10 max-w-xs w-auto transition-[width]`}>
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
								className="h-8 border self-end">
								close
							</button>
							{/* todo tooltip*/}
							<div className="truncate">
								somepage ajsdflkjas dlfjalsdjflsjfdkjfskldja sdfljasdkfasdf
							</div>
						</>
				}
			)()}


		</nav>
	</>
}