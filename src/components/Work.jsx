import React from "react";
import { motion } from "framer-motion";
import { workData } from "../assets/assets";

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amout: 0.2 }}
      id="experience"
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Work <span className="text-purple">Experience</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          My professional journey so far
        </p>
        <div max-w-3xl mx-auto>
          <div className="space-y-12">
            {workData.map((data, index) => {
              <div></div>;
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
