'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { FaMoon, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { navAnimation, headerAnimation, socialsAnimation } from '../assets/Animations';

const Header = () => {
	const [isMenuActive, setIsMenuActive] = useState(false);
	const { theme, setTheme } = useTheme();
	return (
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
				<div className={`fixed top-0 right-0 translate-x-[100%] w-full h-full flex flex-col items-center justify-center bg-[#121111] z-10 duration-500 opacity-0 ${isMenuActive ? '-translate-x-[100%] opacity-100' : 'translate-x-[100%] opacity-0'}`}>
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
	);
};

export default Header;
