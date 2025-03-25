import React from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion"


const frenquentyAskedQuestions = () => {
  return (
    <div class="py-24 bg-gradient-to-b from-purple-50 to-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 uppercase">Frequently Asked Questions</h2>
        <div class="max-w-3xl mx-auto">
          <div class="mb-4">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="no-underline hover:no-underline flex justify-between font-semibold text-lg items-center w-full text-left p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-200">Is it accessible?</AccordionTrigger>
                <AccordionContent className="text-left  text-gray-600 rounded-b-lg bg-white shadow-md mt-1 p-4">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div class="mb-4">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="no-underline hover:no-underline flex justify-between font-semibold text-lg items-center w-full text-left p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-200">
                  How does gas-free trading work?                </AccordionTrigger>
                <AccordionContent className="text-left  text-gray-600 rounded-b-lg bg-white shadow-md mt-1 p-4">
                  TronSecure uses an innovative energy delegation system that allows users to perform a set number of transactions daily without incurring gas fees. This system is powered by our platform's energy pool, which is allocated to users based on their subscription tier.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div class="mb-4">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="no-underline hover:no-underline flex justify-between font-semibold text-lg items-center w-full text-left p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-200">
                  Is my wallet safe with TronSecure?
                </AccordionTrigger>
                <AccordionContent className="text-left  text-gray-600 rounded-b-lg bg-white shadow-md mt-1 p-4">
                  Absolutely. TronSecure employs state-of-the-art security measures, including advanced multi-factor authentication, real-time security analysis, and blockchain-verified security certificates. We prioritize the safety and privacy of our users' wallets and transactions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div class="mb-4">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="no-underline hover:no-underline flex justify-between font-semibold text-lg items-center w-full text-left p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-200">
                  What benefits do I get from joining the waitlist?                </AccordionTrigger>
                <AccordionContent className="text-left  text-gray-600 rounded-b-lg bg-white shadow-md mt-1 p-4">
                  Waitlist members receive exclusive benefits, including priority access to the platform, an extended free trial period, and additional free transactions. You'll also be among the first to experience our revolutionary gas-free trading system.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div class="mb-4">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="no-underline hover:no-underline flex justify-between font-semibold text-lg items-center w-full text-left p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-200">
                  Can I use TronSecure for cryptocurrencies other than USDT?
                </AccordionTrigger>
                <AccordionContent className="text-left  text-gray-600 rounded-b-lg bg-white shadow-md mt-1 p-4">
                  Currently, TronSecure is optimized for USDT trading on the Tron network. However, we are constantly working on expanding our services to support more cryptocurrencies and networks in the future.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>


        </div>
      </div>
    </div>
  )
}

export default frenquentyAskedQuestions
