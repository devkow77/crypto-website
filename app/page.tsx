'use client';

import React, { useState } from 'react';
import { Montserrat } from 'next/font/google';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { FaMoon, FaFacebook, FaInstagram, FaTwitter, FaBuilding, FaThumbsUp, FaTools, FaTrophy, FaRegClock, FaFileCsv } from 'react-icons/fa';
import { navAnimation, headerAnimation, socialsAnimation } from '../assets/Animations';
import { AboutUs } from '@/elements';
import { useCountUp } from 'react-countup';
import { UserData } from '@/assets/Data';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarController, BarElement } from 'chart.js';

const montserrat = Montserrat({ subsets: ['latin'] });

Chart.register(CategoryScale, LinearScale, [BarController, BarElement]);

export default function Home() {
	// HEADER
	const [isMenuActive, setIsMenuActive] = useState(false);
	const { theme, setTheme } = useTheme();
	// ABOUT US
	const [userData, setUserData] = useState({
		labels: UserData.map((data) => data.year),
		datasets: [
			{
				label: 'Users Gained',
				data: UserData.map((data) => data.userGain),
				backgroundColor: ['rgba(255,255,255,0.05)'],
			},
		],
	});
	useCountUp({ ref: 'counter1', start: 0, end: 137.4, decimals: 1, duration: 3, prefix: '$', enableScrollSpy: true, scrollSpyDelay: 500, scrollSpyOnce: true });
	useCountUp({ ref: 'counter2', start: 0, end: 79.8, decimals: 1, duration: 4, suffix: 'K', enableScrollSpy: true, scrollSpyDelay: 500, scrollSpyOnce: true });
	useCountUp({ ref: 'counter3', start: 0, end: 200, duration: 6, prefix: '+', suffix: 'K', enableScrollSpy: true, scrollSpyDelay: 500, scrollSpyOnce: true });
	const cards = [
		{
			icon: <FaBuilding />,
			title: 'One of the best companies',
			text: 'Top places in the rankings of cryptocurrency companies in area',
		},
		{
			icon: <FaThumbsUp />,
			title: 'Satisfied customers',
			text: 'Satisfied customers after our consultations and advice',
		},
		{
			icon: <FaTools />,
			title: 'Quick bug fix',
			text: 'Constant and Quick fix of emerging errors',
		},
		{
			icon: <FaTrophy />,
			title: 'Poll wins',
			text: 'Won in various polls organized by independent organizations',
		},
		{
			icon: <FaRegClock />,
			title: 'Activity 24/7',
			text: 'The company is active 24/7 at your disposal',
		},
		{
			icon: <FaFileCsv />,
			title: 'Qualified workers',
			text: 'Highly qualified employees in the field of cryptocurrencies and the IT market',
		},
	];
	return (
		<main className={`${montserrat.className}`}>
			<div className="container max-w-7xl mx-auto">
				{/* HEADER */}
				<header className="relative min-h-[100vh] text-white">
					<motion.nav variants={navAnimation} initial="hidden" animate="visible" className="flex items-center justify-between py-8">
						<span className="font-extrabold text-lg sm:text-2xl">CRYPTO</span>
						<motion.ul className="lg:flex items-center hidden gap-12 font-semibold">
							<a href="#home">
								<li>Home</li>
							</a>
							<a href="#aboutus">
								<li>About us</li>
							</a>
							<a href="#discover">
								<li>Discover</li>
							</a>
							<a href="#plans">
								<li>Plans</li>
							</a>
							<a href="#blog">
								<li>Blog</li>
							</a>
							<a href="#contact">
								<li>Contact</li>
							</a>
						</motion.ul>
						<div className="flex items-center gap-6">
							<div onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')} className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center cursor-pointer">
								<FaMoon />
							</div>
							<div className={`menu_btn lg:hidden z-20 ${isMenuActive ? 'open' : ''}`} onClick={() => setIsMenuActive((prev) => !prev)}>
								<div></div>
							</div>
						</div>
						<div
							className={`fixed top-0 right-0 translate-x-[100%] w-full h-full flex flex-col items-center justify-center bg-[#121111] z-10 duration-500 opacity-0 ${
								isMenuActive ? '-translate-x-[100%] opacity-100' : 'translate-x-[100%] opacity-0'
							}`}
						>
							<ul className={`flex flex-col items-center justify-center gap-10 text-xl opacity-0 delay-500 duration-1000 ${isMenuActive ? 'opacity-100' : 'opacity-0'}`}>
								<a href="#home">
									<li>Home</li>
								</a>
								<a href="#aboutus">
									<li>About us</li>
								</a>
								<a href="#discover">
									<li>Discover</li>
								</a>
								<a href="#plans">
									<li>Plans</li>
								</a>
								<a href="#blog">
									<li>Blog</li>
								</a>
								<a href="#contact">
									<li>Contact</li>
								</a>
							</ul>
						</div>
					</motion.nav>
					<div className="w-full flex flex-col gap-6 md:flex-row md:items-center md:gap-0 justify-between absolute top-1/2 -translate-y-1/2">
						<motion.h1 variants={headerAnimation} initial="hidden" animate="visible" className="text-6xl sm:text-8xl lg:text-9xl font-extrabold">
							CRYPTO <br /> <span className="md:ml-20">MARKET</span>
						</motion.h1>
						<motion.div variants={socialsAnimation} initial="hidden" animate="visible" className="flex flex-row md:flex-col items-center gap-6 text-2xl lg:text-3xl lg:gap-8 cursor-pointer">
							<a href="https://www.facebook.com/" target="_blank">
								<FaFacebook />
							</a>
							<a href="https://www.instagram.com/" target="_blank">
								<FaInstagram />
							</a>
							<a href="https://twitter.com/" target="_blank">
								<FaTwitter />
							</a>
						</motion.div>
					</div>
				</header>
				{/* ABOUT US */}
				<section id="aboutus" className="flex flex-col items-center py-6 mb-20 md:mb-60">
					<motion.h2
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 2 }}
						className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 md:mb-8 font-extrabold text-center relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-500"
						viewport={{ once: true }}
					>
						ABOUT US
						<div className="absolute -top-6 -right-10 md:-right-14 w-8 md:w-10 h-8 md:h-10 text-base md:text-lg bg-gradient-to-b from-blue-500 to-teal-400 rounded-full  flex items-center justify-center text-white">1</div>
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: -30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						viewport={{ once: true }}
						className="text-sm mb-10 md:mb-20 md:text-lg leading-9 md:leading-10 text-center max-w-5xl mx-auto opacity-90"
					>
						CryptoMarket is one of the best companies that has been on the market for 20 years. We deal with broadly understood topic of cryptocurrencies which is becoming more and more popular in nowadays. We have qualificated IT specialists
						who will help you with any problem. Check the offers we offer and choose your best one or consult our support who will advise you.
					</motion.p>
					<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} className="flex flex-row justify-center flex-wrap w-full max-w-4xl items-center gap-8 md:gap-20">
						<span>
							<h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-2" id="counter1" />
							<p className="text-sm lg:text-base opacity-80 text-center">Total 24h Volume</p>
						</span>
						<span>
							<h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-2" id="counter2" />
							<p className="text-sm lg:text-base opacity-80 text-center">Total Markets</p>
						</span>
						<span>
							<h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-2" id="counter3" />
							<p className="text-sm lg:text-base opacity-80 text-center">Total Exchanges</p>
						</span>
					</motion.div>
					<Bar data={userData} className="my-10 lg:my-20 cursor-pointer" />
					<div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 md:mt-20">
						{cards.map((card, index) => (
							<motion.div
								key={index}
								className="flex flex-col justify-center items-center gap-4 bg-white bg-opacity-10 rounded-xl px-4 py-8 hover:bg-blue-900 duration-200 cursor-pointer"
								initial={{ opacity: 0, translateY: -50 }}
								whileInView={{ opacity: 1, translateY: 0 }}
								transition={{ duration: 0.3, delay: 0.1 * index }}
								viewport={{ once: true }}
							>
								<span className="text-5xl lg:text-6xl">{card.icon}</span>
								<h3 className="text-lg lg:text-xl font-semibold text-center">{card.title}</h3>
								<p className="text-sm lg:text-base text-center opacity-80">{card.text}</p>
							</motion.div>
						))}
					</div>
				</section>
				{/* DISCOVER */}
				<section className="flex flex-col items-center py-6 gap-8">
					<h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 md:mb-8 font-extrabold text-center relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-500">DISCOVER</h2>
					<div className="w-full flex items-center gap-8 overflow-x-scroll whitespace-nowrap">
						<button className="px-4 md:px-12 py-2 md:py-3 bg-green-500 rounded-2xl font-semibold cursor-pointer hover:bg-pink-700 duration-200">ALL</button>
						<button className="px-4 md:px-12 py-2 md:py-3 bg-yellow-500 rounded-2xl font-semibold cursor-pointer hover:bg-yellow-500 duration-200">TOP 10</button>
						<button className="px-4 md:px-12 py-2 md:py-3 bg-red-500 rounded-2xl font-semibold cursor-pointer hover:bg-pink-700 duration-200">MOST POPULAR</button>
						<button className="px-4 md:px-12 py-2 md:py-3 bg-gray-500 rounded-2xl font-semibold cursor-pointer hover:bg-pink-700 duration-200">OTHER</button>
					</div>
				</section>
			</div>
		</main>
	);
}
