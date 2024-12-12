'use client'
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export function AccordionSection({
  items,
}: {
  items: {
    title: string;
    description: string;
  }[];
}) {
  
  return (
    <Accordion type="single" collapsible className="w-full ">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="bg-white px-4 mb-1 rounded-2xl"
          initial={{ backgroundColor: "#ffff", color:'#00000', }}
          whileHover={{
            color:'#ffff',
            backgroundColor: "#005490",
            transition: { duration: 0.3 }, // Adjust delay based on index
          }}
        >
          <AccordionItem value={"id" + index}>
            <AccordionTrigger>{item?.title}</AccordionTrigger>
            <AccordionContent>{item?.description}</AccordionContent>
          </AccordionItem>
        </motion.div>
      ))}
    </Accordion>
  );
}
