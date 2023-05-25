import React, { useState } from 'react';
import { FaBuilding, FaThumbsUp, FaTools, FaTrophy, FaRegClock, FaFileCsv } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useCountUp } from 'react-countup';
import { UserData } from '@/assets/Data';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarController, BarElement } from 'chart.js';

Chart.register(CategoryScale, LinearScale, [BarController, BarElement]);

const AboutUs = () => {
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
	useCountUp({ ref: 'counter1', start: 0, end: 137.4, decimals: 1, duration: 3, prefix: '$', enableScrollSpy: true, scrollSpyDelay: 500 });
	useCountUp({ ref: 'counter2', start: 0, end: 79.8, decimals: 1, duration: 4, suffix: 'K', enableScrollSpy: true, scrollSpyDelay: 500 });
	useCountUp({ ref: 'counter3', start: 0, end: 200, duration: 6, prefix: '+', suffix: 'K', enableScrollSpy: true, scrollSpyDelay: 500 });
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
		<section id="aboutus" className="flex flex-col items-center py-6 mb-20 md:mb-60">
			<motion.h2
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 2 }}
				className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 md:mb-8 font-extrabold text-center relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-500"
			>
				ABOUT US
				<div className="absolute -top-6 -right-10 md:-right-14 w-8 md:w-10 h-8 md:h-10 text-base md:text-lg bg-gradient-to-b from-blue-500 to-teal-400 rounded-full  flex items-center justify-center text-white">1</div>
			</motion.h2>
			<motion.p initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-sm mb-10 md:mb-20 md:text-lg leading-9 md:leading-10 text-center max-w-5xl mx-auto opacity-90">
				CryptoMarket is one of the best companies that has been on the market for 20 years. We deal with broadly understood topic of cryptocurrencies which is becoming more and more popular in nowadays. We have qualificated IT specialists who will
				help you with any problem. Check the offers we offer and choose your best one or consult our support who will advise you.
			</motion.p>
			<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="flex flex-row justify-center flex-wrap w-full max-w-4xl items-center gap-8 md:gap-20">
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
					>
						<span className="text-5xl lg:text-6xl">{card.icon}</span>
						<h3 className="text-lg lg:text-xl font-semibold text-center">{card.title}</h3>
						<p className="text-sm lg:text-base text-center opacity-80">{card.text}</p>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default AboutUs;
