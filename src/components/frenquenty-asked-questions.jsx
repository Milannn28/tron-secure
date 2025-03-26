import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function FAQ () {
  const data = [
    {
      "title": "Is it accessible?",
      "description": "Yes. It adheres to the WAI-ARIA design pattern."
    },
    {
      "title": "How does gas-free trading work?",
      "description": "TronSecure uses an innovative energy delegation system that allows users to perform a set number of transactions daily without incurring gas fees. This system is powered by our platform's energy pool, which is allocated to users based on their subscription tier."
    },
    {
      "title": "Is my wallet safe with TronSecure?",
      "description": "Absolutely. TronSecure employs state-of-the-art security measures, including advanced multi-factor authentication, real-time security analysis, and blockchain-verified security certificates. We prioritize the safety and privacy of our users' wallets and transactions."
    },
    {
      "title": "What benefits do I get from joining the waitlist?",
      "description": "Waitlist members receive exclusive benefits, including priority access to the platform, an extended free trial period, and additional free transactions. You'll also be among the first to experience our revolutionary gas-free trading system."
    },
    {
      "title": "Can I use TronSecure for cryptocurrencies other than USDT?",
      "description": "Currently, TronSecure is optimized for USDT trading on the Tron network. However, we are constantly working on expanding our services to support more cryptocurrencies and networks in the future."
    },
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="py-24 bg-gradient-to-b from-purple-50 to-white" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 uppercase font-oswald">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <Accordion type="single" collapsible>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="no-underline hover:no-underline flex justify-between font-semibold text-lg items-center w-full text-left p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-200">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-left text-gray-600 rounded-b-lg bg-white shadow-md mt-1 p-4">
                    {item.description}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

