import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../components/ui/carousel";

const stats = [
    { id: 1, label: "Total Wallets Verified", value: 5000000, suffix: "+", icon: "users" },
    { id: 2, label: "Security Score Average", value: 98.5, suffix: "%", icon: "shield" },
    { id: 3, label: "Network Reliability", value: 99.9, suffix: "%", icon: "zap" },
    { id: 4, label: "Current Waitlist", value: 520000, suffix: "+", icon: "clipboard-list" }
];

const icons = {
    users: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    ),
    shield: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        </svg>
    ),
    zap: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
        </svg>
    ),
    "clipboard-list": (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
            <path d="M12 11h4" />
            <path d="M12 16h4" />
            <path d="M8 11h.01" />
            <path d="M8 16h.01" />
        </svg>
    )
};

const Counter = ({ value, suffix, inView }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;

        const duration = 2000;
        const steps = 60;
        const increment = value / steps;
        let current = 0;
        const interval = setInterval(() => {
            current += increment;
            if (current >= value) {
                setCount(value.toLocaleString());
                clearInterval(interval);
            } else {
                setCount(Math.floor(current).toLocaleString());
            }
        }, duration / steps);

        return () => clearInterval(interval);
    }, [inView, value]);

    return <span className="text-3xl font-bold text-gray-900">{count}{suffix}</span>;
};

const Trusted = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <div ref={ref} className='py-24 bg-gradient-to-b from-purple-50 to-white'>
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 uppercase font-oswald">Trusted by Thousands</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Join the growing community of users who trust TronSecure for secure and efficient crypto transactions.</p>
                </div>

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.id}
                            className="bg-white rounded-xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: stat.id * 0.2 }}
                        >
                            <div className="flex items-center space-x-4 mb-4 text-start">
                                <div className="p-3 rounded-lg bg-purple-100 text-purple-500">
                                    {icons[stat.icon]}
                                </div>
                                <h3 className="text-gray-600 font-medium uppercase font-oswald">{stat.label}</h3>
                            </div>
                            <div className="space-y-3 text-left">
                                <Counter value={stat.value} suffix={stat.suffix} inView={inView} />
                                <div className="h-1 bg-purple-100 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-purple-500 rounded-full"
                                        initial={{ width: 0 }}
                                        animate={inView ? { width: "100%" } : {}}
                                        transition={{ duration: 2 }}
                                    ></motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Testimonials Carousel */}
                <div className="max-w-2xl mx-auto">
                    {/* <h3 className="text-2xl font-bold text-center text-gray-900 mb-8 uppercase font-oswald">
            What Our Users Say
          </h3> */}
                    <motion.h3
                        className="text-2xl font-bold text-center text-gray-900 mb-8 uppercase font-oswald"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        What Our Users Say
                    </motion.h3>
                    <Carousel>
                        <div className="relative bg-white rounded-xl shadow-lg border border-purple-100 p-8">
                            <CarouselContent>
                                {[
                                    {
                                        text: "TronSecure has revolutionized my USDT trading experience. I've saved over 40% on transaction fees since joining!",
                                        author: "Alex K.",
                                        role: "Crypto Trader",
                                    },
                                    {
                                        text: "The advanced security features give me peace of mind for all my transactions. It's a game-changer in the crypto world!",
                                        author: "Alex D.",
                                        role: "DeFi Investor",
                                    },
                                ].map((testimonial, index) => (
                                    <CarouselItem key={index}>
                                        <div className="flex items-center space-x-4">
                                            <div className="flex-1 text-start">
                                                <p className="text-gray-900 text-lg mb-2 italic">&quot;{testimonial.text}&quot;</p>
                                                <p className="text-gray-600">
                                                    {testimonial.author} <span className="text-purple-600">{testimonial.role}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <div className="grid justify-between grid-flow-col mt-6">
                                <CarouselPrevious className="relative translate-[initial] left-0 top-0" />
                                <CarouselNext className="relative translate-[initial] right-0 top-0" />
                            </div>
                        </div>
                    </Carousel>
                </div>


            </div>
        </div>
    );
};

export default Trusted;
