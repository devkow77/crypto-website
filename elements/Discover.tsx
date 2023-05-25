import React from 'react';

function Discover() {
	return (
		<section className="flex flex-col items-center py-6 gap-8">
			<h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 md:mb-8 font-extrabold text-center relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-500">DISCOVER</h2>
			<div className="w-full flex items-center gap-8 overflow-x-scroll whitespace-nowrap">
				<button className="px-4 md:px-12 py-2 md:py-3 bg-green-500 rounded-2xl font-semibold cursor-pointer hover:bg-pink-700 duration-200">ALL</button>
				<button className="px-4 md:px-12 py-2 md:py-3 bg-yellow-500 rounded-2xl font-semibold cursor-pointer hover:bg-yellow-500 duration-200">TOP 10</button>
				<button className="px-4 md:px-12 py-2 md:py-3 bg-red-500 rounded-2xl font-semibold cursor-pointer hover:bg-pink-700 duration-200">MOST POPULAR</button>
				<button className="px-4 md:px-12 py-2 md:py-3 bg-gray-500 rounded-2xl font-semibold cursor-pointer hover:bg-pink-700 duration-200">OTHER</button>
			</div>
		</section>
	);
}

export default Discover;
