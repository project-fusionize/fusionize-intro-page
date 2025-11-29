import * as React from 'react';
import {useRef} from 'react';
import Aurora from "./Aurora";
import {motion} from 'motion/react';
import Navbar from "@/components/Navigation";
import {ArrowRight, BookOpen, Brain, Calendar, Github, Search, Shield, Sparkles, TrendingUp} from 'lucide-react';
import {HoverBorderGradient} from "@/components/ui/hover-border-gradient.tsx";

export function LandingPage() {
    const containerRef = useRef(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    return (
        <section ref={scrollContainerRef} className={"relative min-h-screen max-h-screen overflow-y-auto"}
                 style={{scrollbarWidth: "thin", scrollbarColor: "var(--primary) var(--background)"}}>
            <div className={"bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950"} style={{
                width: '100%', height: '90vh', position: 'absolute', zIndex: -99, top: 0, opacity: 0.24,
            }}>
            </div>
            <div style={{
                width: '100%', height: '100vh', position: 'absolute', zIndex: -100, top: 0, opacity: 0.88
            }}>
                {/*<DarkVeil backgroundColor="#000" backgroundMix={0.1} hueShift={0}></DarkVeil>*/}
                <Aurora
                    colorStops={["#8366A3", "#00b8db", "#ad46ff"]}
                    blend={0.5}
                    amplitude={1.0}
                    speed={0.25}
                />
            </div>
            <Navbar
                cta={
                    <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="dark:bg-purple-950 bg-white text-black dark:text-white flex items-center space-x-2"
                    >
                        <Github className="w-5 h-5" />
                        <span>View on GitHub</span>
                    </HoverBorderGradient>
                }
            />

            <section className={"min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"}>
                <div className="py-20 lg:py-32">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <motion.div
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.6, delay: 0.2}}
                                className="inline-flex items-center space-x-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full mb-6 border border-purple-500/30"
                            >
                                <Sparkles className="w-4 h-4"/>
                                <span className="text-sm">Open Source Workflow Orchestration</span>
                            </motion.div>

                            <motion.h1
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.6, delay: 0.3}}
                                className="text-white mb-6"
                            >
                                Orchestrate Intelligent Workflows Effortlessly
                            </motion.h1>

                            <motion.p
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.6, delay: 0.4}}
                                className="text-slate-300 text-xl mb-8"
                            >
                                Where AI Agents Meet Business Processes
                            </motion.p>

                            <motion.p
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.6, delay: 0.5}}
                                className="text-slate-400 mb-8"
                            >
                                Fusionize seamlessly blends AI agent orchestration with business process management.
                                Automate complex workflows, coordinate tools and AI agents, and integrate human
                                decision-making — all in one unified platform.
                            </motion.p>

                            <motion.div
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.6, delay: 0.6}}
                                className="flex flex-wrap gap-4"
                            >
                                <button
                                    className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                                    <span>Get Started</span>
                                    <ArrowRight className="w-5 h-5"/>
                                </button>
                                <button
                                    className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg transition-all backdrop-blur-sm border border-white/10">
                                    <Github className="w-5 h-5"/>
                                    <span>View on GitHub</span>
                                </button>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{opacity: 0, scale: 0.9}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{duration: 0.8, delay: 0.4}}
                            className="relative"
                        >
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl blur-2xl"/>
                            <div
                                className="relative bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-white/10 p-2 shadow-2xl">
                                {/*<iframe width="560" height="315"*/}
                                {/*        src="https://www.youtube.com/embed/VvUGPZ2WhMk?si=ydmGPr244QMJWTl-"*/}
                                {/*        title="YouTube video player" frameBorder="0"*/}
                                {/*        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
                                {/*        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>*/}
                                <img
                                    src="https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBuZXR3b3JrfGVufDF8fHx8MTc2NDMxODE1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                    alt="Workflow visualization"
                                    className="rounded-lg w-full"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>

            </section>


            {/* Footer */}

            <footer className="py-12 px-6 text-center border-t border-white/10 backdrop-blur-sm ">
                <div
                    className="max-w-4xl mx-auto justify-center"
                >
                    <div className="flex justify-center gap-3 mb-2">
                        <motion.button initial={{scale: 0}} whileInView={{scale: 1}}>
                            <img src={"/web-app-manifest-192x192.png"} className={"w-[32px] md:w-[42px]"}/>
                        </motion.button>
                        <h3 className="text-white text-4xl m-0"> Fusionize</h3>
                    </div>

                    <p className="text-primary-secondary text-xs mt-16">
                        © 2026 Fusionize.<br/>Fusionize is open source under the Apache 2.0 License.
                    </p>
                </div>
            </footer>
            <div style={{height: "100px"}}></div>
        </section>
)
}