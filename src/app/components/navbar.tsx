/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { useState } from 'react';
import Image from "next/image";
import styles from './CustomText.module.css';
import Link from 'next/link';

const NavLink = ({to, children}: {to: string, children: React.ReactNode}) => {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({open, setOpen}: {open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
    const [best, setBest] = useState(false);
    const [review, setReview] = useState(false);
    // const hei = windows.screen.height/100;
    
    // // const wei = screen.width/100;
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
                <a className=" ml-1 text-left items-start w-full flex" href="/">
                    <Image src='/img/logo_mark_black.png' 
                        alt="Logo" 
                        width={100} 
                        height={50}
                        className="w-[200px]"
                    />
                </a>
            </div>
            <div className={`${styles.rubikFont} flex flex-col sm:flex-row ml-4 overflow-y-auto`}>
                <div className="w-[100%] sm:w-[50%]" onMouseEnter={()=> setReview(false)}>
                    <a className="text-xl font-medium my-4" href="/bestMattress" onClick={() => {setTimeout(() => setOpen(!open), 100);}}
                        onMouseEnter={()=>setBest(true)}
                    >
                        Best Mattress
                    </a>
                    <div onMouseLeave={()=>setBest(false)}>
                        <a className={`text-md font-normal ml-4 ${best ? 'block' : 'hidden'}`} href="/bestMattress" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                            Best Mattress
                        </a>
                        <a className={`text-md font-normal ml-4 ${best ? 'block' : 'hidden'}`} href="/bestMattress/bestCheapMattress" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                            Best Cheap Mattress
                        </a>
                        <a className={`text-md font-normal ml-4 ${best ? 'block' : 'hidden'}`} href="/bestMattress/bestCoolingMattress" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                            Best Cooling Mattress for Hot Sleepers
                        </a>
                        <a className={`text-md font-normal ml-4 ${best ? 'block' : 'hidden'}`} href="/bestCheapMattress" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                            Best Cheap Mattress
                        </a>
                        <a className={`text-md font-normal ml-4 ${best ? 'block' : 'hidden'}`} href="/bestMattress/bestHybridMattress" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                            Best Hybrid Mattress
                        </a>
                        <a className={`text-md font-normal ml-4 ${best ? 'block' : 'hidden'}`} href="/bestCheapMattress" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                            Best Cheap Mattress
                        </a>
                        <a className={`text-md font-normal ml-4 ${best ? 'block' : 'hidden'}`} href="/bestCheapMattress" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                            Best Cheap Mattress
                        </a>
                        <a className={`text-md font-normal ml-4 ${best ? 'block' : 'hidden'}`} href="/bestCheapMattress" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                            Best Cheap Mattress
                        </a>
                        <a className={`text-md font-normal ml-4 ${best ? 'block' : 'hidden'}`} href="/bestCheapMattress" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                            Best Cheap Mattress
                        </a>
                    </div>   
                </div>
                <div>
                    <a className="text-xl font-normal my-4" href="/reviews" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}
                            onMouseEnter={()=>setReview(true)}>
                        Reviews
                    </a>
                    <div onMouseLeave={()=>setReview(false)}>
                        <a className={`text-md font-normal ml-4 ${review ? 'block' : 'hidden'}`} href="/CheapMattress/Review" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                            Cheap Mattress Review
                        </a>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default function Navbar() {
    
    const [open, setOpen] = useState(false);
    const [bestVisible, setBestVisible] = useState(false);
    const [reviewVisible, setReviewVisible] = useState(false);
    return (
        <nav className={`flex filter drop-shadow-md bg-[#F1F1F1] px-4 py-4 h-20 items-center  justify-between ${open? 'relative': ''}`}>
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="flex items-center text-[#69747F]" onMouseEnter={()=>{setBestVisible(false); setReviewVisible(false)}}>
                <a className="text-3xl font-semibold text-pink-500 ml-1 lg:ml-24 text-center" href="/">
                    <img src='/img/logo_mark_black.png' alt="Logo" className='w-[100px] lg:w-[200px]'/>
                </a>
            </div>
            <div className="flex items-center text-[#69747F]">

                <div className={`z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden ${open ? "absolute right-[-45vw]" : ""}`} onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className={`${styles.rubikFont} hidden md:flex`}>
                    <NavLink to="/bestMattress">
                        <span className="hover:text-[#1A1D20]" onMouseEnter={()=>{setBestVisible(true); setReviewVisible(false)}}>Best Mattress</span>
                    </NavLink>
                    {/* <NavLink to="/bestCheapMattress">
                        <span className="hover:text-[#1A1D20]">Meilleur Matelas Pas Cher</span>
                    </NavLink> */}
                    <NavLink to ="/reviews">
                        <span className="hover:text-[#1A1D20]" onMouseEnter={()=>{setReviewVisible(true); setBestVisible(false)}}>Review</span>
                    </NavLink>
                </div>
            </div>
            <div className={`${styles.rubikFont} md:flex rounded-[50px] border border-[#69747F] py-2 px-4 text-[#69747F] text-[12px] md:text-[16px] hover:text-[#1A1D20] hover:border-[#1A1D20]`} onMouseEnter={()=>{setBestVisible(false); setReviewVisible(false)}}>
                <NavLink to="/bestMattress">
                    Learn More
                </NavLink>
            </div>
            
            <div className={`${styles.rubikFont} absolute top-[100%] h-[40vh] bg-[#f4efe6] left-0 right-0 py-2 px-4 text-[#69747F] text-[12px] md:text-[16px] hover:text-[#1A1D20] hover:border-[#1A1D20] ${bestVisible ? 'flex' : "hidden"}`} onMouseEnter={()=>{setBestVisible(true)}} onMouseLeave={()=>{setBestVisible(false)}}>
                <div className="block w-[50%] ">
                    <div>
                        <NavLink to="/bestMattress/bestCheapMattress">
                            Best Cheap Mattress
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/bestMattress/bestCoolingMattress">
                            Best Cooling Mattress for Hot Sleepers
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/bestMattress/bestHybridMattress">
                            Best Hybrid Mattress
                        </NavLink>
                    </div>
                </div>
                <div className="block w-[50%]">
                    <div>
                        <NavLink to="/bestCheapMattress">
                            Best Mattress for Side Sleepers
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/bestCheapMattress">
                            Best Mattress for back Sleepers
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/bestCheapMattress">
                            Best Mattress for stomach Sleepers
                        </NavLink>
                    </div>
                </div>
                {/* <div>
                    <NavLink to="/bestCheapMattress">
                        Best Cheap Mattress
                    </NavLink>
                    <NavLink to="/bestCheapMattress">
                        Best Cooling Mattress
                    </NavLink>
                    <NavLink to="/bestCheapMattress">
                        Best Hybrid Mattress
                    </NavLink>
                </div> */}
            </div>

            <div className={`${styles.rubikFont} absolute top-[100%] h-[40vh] bg-[#f4efe6] left-0 right-0 py-2 px-4 text-[#69747F] text-[12px] md:text-[16px] hover:text-[#1A1D20] hover:border-[#1A1D20] ${reviewVisible ? 'flex' : "hidden"}`} onMouseEnter={()=>{setReviewVisible(true)}} onMouseLeave={()=>{setReviewVisible(false)}}>
                <div className="block w-[50%]">
                    <div>
                        <NavLink to="/bestCheapMattress">
                            Best Cheap Mattress Review
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/bestCheapMattress">
                            Best Cooling Mattress Review
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/bestCheapMattress">
                            Best Hybrid Mattress Review
                        </NavLink>
                    </div>
                </div>
                <div className="block w-[50%]">
                    <div>
                        <NavLink to="/bestCheapMattress">
                            Best Mattress for side Sleepers Review
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/bestCheapMattress">
                            Best Mattress for Back Sleepers Review
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/bestCheapMattress">
                            Best Mattress for stomach Sleepers Review
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}


