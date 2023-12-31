import * as React from "react";
import { SVGProps } from "react";
import { motion } from 'framer-motion';

const pathVariantsJ = {
    hidden:{
        pathLength: 0,
        pathOffset: 1,
        fill: "rgba(255, 255, 255, 0)"
        
    },
    visible:{
        y:0,
        pathLength: 1,
        pathOffset: 0,
        fill: "rgba(34,81,138, 1)",
        transition:{
            pathLength: { ease: "easeInOut", duration: 3, delay: 1  },
            fill: { duration: 1, delay: 4 , ease: "easeInOut" }
        }
    }
}

const pathVariantsS = {
    hidden:{
        pathLength: 0,
        pathOffset: 1,
        fill: "rgba(255, 255, 255, 0)"
        
    },
    visible:{
      pathLength: 1,
      pathOffset: 0,
        fill: "rgba(187,35,26, 1)",
        transition:{
            pathLength: { ease: "easeInOut", duration: 3, delay: 1  },
            fill: { duration: 1, delay: 4 , ease: "easeInOut" }
        }
    }
}

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
    id="Layer_1"
    x={0}
    y={0}
    viewBox="0 0 250 149.9"
    {...props}
  >

    <g id="Junior_Starters">
      <g id="Starters">
        <motion.path
          variants={pathVariantsS}
          initial="hidden"
          animate="visible"
          id="E"
          d="M147.4 96.1v6.4c0 .8.3 1.1 1.1 1.2 3.3.2 6.7.5 10 .7 1.4.1 2.8.4 4.2.4 1.3.1 2 .9 2.1 2 .2 1.9.7 3.9-1.1 5.4-.6.5-1.4.8-2.1.8-2.4-.1-4.7-.5-7-.7-3.1-.2-6.3-.2-9.4-.3-1.8 0-3.2-.9-3.7-2.6-.3-1-.2-2.2-.2-3.3 0-1.4.2-2.8.3-4.1.1-1.9.2-3.9.2-5.8.2-3.3.3-6.6.5-9.9.2-2.8.4-5.6.7-8.3.3-2.4 2-3.4 4.3-2.9 1.5.3 3.1.5 4.6.6 4 .2 8 .3 12 .5 1.1.1 2.1.4 3.2.7.4.1.9.7 1 1.1.2 1.9.3 3.9-1.3 5.4-1.2 1.2-2.7.6-4.1.6-.4 0-.8-.1-1.3-.2-3.4-.2-6.7-.3-10.1-.5l-3-.3c-.1 1.5-.2 2.9-.4 4.3-.1.7.2 1.1 1 1.1 3.1.1 6.2.3 9.4.5 1.2.1 2.6 1.3 2.6 2.6 0 1.1-.2 2.3-.5 3.3-.4 1.2-1.4 1.9-2.8 1.8-3.4-.2-6.6-.3-10.2-.5z"
          style={{
            stroke: "#BB231A",
            strokeWidth: 0.5,
            strokeMiterlimit: 10,
          }}
        />
        <motion.path
          variants={pathVariantsS}
          initial="hidden"
          animate="visible"
          id="R_00000131332528976077794160000011011701730513383328_"
          d="M189.1 90.6c2.3 1.1 4.1 2.9 5.1 5.3.6 1.6 1.1 3.3 1.3 4.9.3 2.7.4 5.5.5 8.3 0 1-.3 2-.8 2.9-.5 1-1.6 1.6-2.8 1.3-1.2-.3-2-1.2-2.1-2.6-.2-2.6-.3-5.3-.5-7.9-.1-1.7-.1-3.5-1.8-4.5-1.2-.7-2.5-1.2-3.8-1.5-2.3-.5-4.7-.4-6.9.5-1 .4-1.5.6-1.2 2 .6 2.6.9 5.3 1.2 8 .1 1.1.3 2.3 0 3.4-.5 1.7-2 2.4-3.7 2.1-1.1-.2-2.3-1.9-2.5-3.4v-1.3c-.3-2.6-.6-5.3-.9-7.9-.2-1.7-.4-3.4-.5-5-.2-2.6-.3-5.2-.5-7.8-.3-4.8 2.1-7.9 6-10.2 3.5-2.1 7.2-2.7 11.1-1.3 2.8 1 4.7 3.9 5 6.8.2 1.8.1 3.4-.6 5-.4 1.1-1 1.9-1.6 2.9zm-14.2-.7c.5-.1.8-.2 1-.3 3-1.3 6-2.5 8.9-3.9 1.2-.5 1.2-1.7.2-2.5-.5-.4-1.2-.7-1.9-.7-2.7-.3-5 .8-7.2 2.2-.5.3-.9 1.1-1 1.7-.1 1.1 0 2.2 0 3.5z"
          style={{
            stroke: "#BB231A",
            strokeWidth: 0.5,
            strokeMiterlimit: 10,
          }}
        />
                <motion.path
          variants={pathVariantsS}
          initial="hidden"
          animate="visible"
          id="R_00000180326993186837964200000007376286197491528872_"
          d="M98.5 98c.2 1.7.3 3.4.5 5 .3 1.8.7 3.6 1.1 5.4.4 2.5-1.3 4.5-3.6 4.4-1.1 0-2.6-1.4-2.8-2.8-.2-1.2-.1-2.5-.2-3.7-.1-1.2-.2-2.4-.4-3.6-.3-2.4-.7-4.7-.9-7.1-.3-3.3-.4-6.7-.5-10.1 0-.8.2-1.7.4-2.5.6-2.3 2.6-3.6 4.3-5 2.9-2.3 6.2-3.2 9.9-2.9 3 .3 5.2 1.9 6.5 4.5 1.6 3.1 1.5 8-1.5 10.8.6.3 1.2.6 1.8 1 3 2 4.2 5.1 4.6 8.5.3 3.2.4 6.4.5 9.6 0 1.3-.2 2.5-1.5 3.2-2 1.1-3.5-.1-4-1.8-.3-1.3-.4-2.7-.5-4.1-.2-2.2-.4-4.5-.5-6.7-.1-1.6-1.3-2.2-2.4-2.6-3.6-1.5-7.2-1.7-10.8.1.1.3.1.3 0 .4zm-.8-8.2c.5-.1 1-.3 1.4-.4 2.9-1.1 5.9-2 8.5-3.9.3-.2.6-.8.5-1.2-.2-1.3-1-1.8-2.5-1.9-2.4-.1-4.5.7-6.6 1.8-2.1 1.1-2.1 3.7-1.3 5.6z"
          style={{
            stroke: "#BB231A",
            strokeWidth: 0.5,
            strokeMiterlimit: 10,
          }}
        />
                <motion.path
          variants={pathVariantsS}
          initial="hidden"
          animate="visible"
          id="A"
          d="M55.5 108.2c-.3-1.8.9-3.4 1.6-5.2.7-1.9 1.6-3.7 2.2-5.6.3-1 .3-2.1.5-3.1.1-.3.1-.7.3-.8 2.1-1.6 2.6-4.1 3.7-6.3 1.5-3 3-6 4.6-9 .5-1 1.2-1.9 1.9-2.8 1.5-2 4-1.4 5.5-.1 1.9 1.8 2.9 4.2 3.6 6.6 1.3 4.6 2.3 9.3 3.4 13.9.6 2.6 1.2 5.3 1.9 7.9.3 1 .9 1.9 1.5 2.8 1.2 1.9.9 4.7-.7 6.1-1.2 1.1-3.5.8-4.4-.5-1.4-1.9-1.8-4.2-2.3-6.5-.3-1.4-.6-2.8-1-4.2-.2-.9-1-1.1-1.7-1.1-2.1-.1-4.1-.2-6.2-.3-1.3-.1-2.7-.2-4-.2-.4 0-1 .4-1.1.7-1 2.6-2 5.3-3 8-.7 1.8-2.1 3.1-3.6 3-1.8-.1-2.6-.8-2.6-2.7-.1 0-.1-.2-.1-.6zm12.8-16c2.5.1 4.7.2 7.2.3-1.1-2.9-2.2-5.7-3.4-8.7-1.3 3-2.5 5.6-3.8 8.4z"
          style={{
            stroke: "#BB231A",
            strokeWidth: 0.5,
            strokeMiterlimit: 10,
          }}
        />
                <motion.path
          variants={pathVariantsS}
          initial="hidden"
          animate="visible"
          id="S_00000155869554302582239760000007806577835054840722_"
          d="M206.4 112.4c-3.3 0-5.9-.5-7.7-2.5-2.2-2.4-1.9-6.7 0-9.1.6-.7 2.1-.5 2.6.3.1.1.2.2.3.4.7 1.3 1.2 2.9 2.7 3.2 2.3.4 4.7.2 6.8-1.1.7-.4 1.4-.9 2.1-1.4.6-.4.9-1.1 0-1.5-1.5-.7-3-1.4-4.6-1.9-2.2-.8-4.6-1.3-6.8-2.2-3-1.2-5.5-3-6-6.5-.4-3.1.1-6.1 1.8-8.8 2-3.2 4.7-5.4 8.4-6.3 3.3-.8 6.5-.8 9.1 1.8 1.3 1.3 2.1 3 2 4.9-.1 1.4-.1 2.8-.2 4.1-.1 1.4-1.4 2.6-2.7 2.6-1 0-1.6-.6-1.9-1.5-.3-.8-.4-1.7-.3-2.5.1-1.3-.7-2-1.7-2.1-3.6-.7-8 2.3-8.7 5.3-.1.5.4 1.5.9 1.8 1.8.8 3.6 1.4 5.5 1.9 2.7.9 5.4 1.4 7.9 2.9 4.9 3 4.4 9.7 1.5 13-2.6 3-7.6 5.3-11 5.2z"
          style={{
            stroke: "#BB231A",
            strokeWidth: 0.5,
            strokeMiterlimit: 10,
          }}
        />
          <motion.path
          variants={pathVariantsS}
          initial="hidden"
          animate="visible"
          id="S"
          d="M26.6 98.7c-1.5-1.8-3.7-2-5.6-2.6-2.7-.9-5.5-1.6-8-2.9-4.5-2.4-4.8-5-4.5-9.1.3-3.2 1.8-5.9 4.1-8.2 2.2-2.1 4.8-3.3 7.8-3.7 2.5-.4 4.8 0 6.7 1.5 1.6 1.2 2.6 3 2.6 5 0 1.8-.2 3.5-.5 5.3-.3 1.3-1.6 2.1-2.9 1.9-1-.1-1.6-1.1-1.6-2.5 0-.8 0-1.6-.3-2.3-.2-.5-.8-1-1.3-1.1-2.6-.8-4.7.3-6.6 1.8-.9.7-1.7 1.7-2.2 2.7-.7 1.2-.4 2.1 1 2.6 2.2.8 4.4 1.5 6.6 2.1 3.1.9 6.1 1.7 8.4 4.2 1 1.2 1.5 2.5 1.7 4 .4 3.6-1 6.5-3.7 8.7-1.8 1.5-3.8 2.4-6 3.1-2.6.8-5.2.8-7.9.1-4.1-1.1-5.4-5.4-4.3-8.6.2-.7.6-1.4.9-2 .7-1.2 1.9-1.3 2.8-.3.3.3.5.8.7 1.2 1 2 2.5 3.1 4.8 2.7 2.8-.4 5.3-1.4 7.3-3.6z"
          style={{
            stroke: "#BB231A",
            strokeWidth: 0.5,
            strokeMiterlimit: 10,
          }}
        />
          <motion.path
          variants={pathVariantsS}
          initial="hidden"
          animate="visible"
          id="T"
          d="M46.8 82.3c.3 2.7.6 5.4.8 8 .2 2 .3 4.1.5 6.1.4 3.8.9 7.5 1.4 11.3.1.9.1 1.8 0 2.6-.3 1.4-1.4 2-3.3 2-1.4 0-2.9-1-3.1-2.2-.2-1.3-.4-2.7-.5-4.1-.3-3.8-.6-7.5-1-11.3-.2-2.2-.3-4.3-.5-6.5-.1-1.3-.2-2.7-.2-4-.1-1.1-.8-1-1.5-.9-1.7.2-3.4.4-5 .5-1.7.1-2.5-.9-2.8-2.5-.3-1.9 0-3.5 1.4-4.8 1.2-1 2.6-.9 4-1 3.4-.3 6.7-.3 10.1-.5 1.8-.1 3.5-.4 5.2-.7 1.8-.3 3.6 1 3.9 2.9.3 1.7-.2 3.3-1.2 4.6-.9 1.1-2 1.5-3.2.8-1.6-.9-3.2-.7-5-.3z"
          style={{
            stroke: "#BB231A",
            strokeWidth: 0.5,
            strokeMiterlimit: 10,
          }}
        />
                <motion.path
          variants={pathVariantsS}
          initial="hidden"
          animate="visible"
          id="T_00000003081972466570012500000004367283249334616721_"
          d="M125.9 83.1c-1.5.1-3 .1-4.4.4-3 .7-5.2-1.4-4.6-4.5.6-2.9 1.7-3.8 4.7-3.8 4.9-.1 9.8-.1 14.7-.2.6 0 1.2-.2 1.9-.2 2.1 0 3.4 1.4 3.5 3.5.1 1.4-.3 2.6-1 3.8-.9 1.5-2.5 1.8-3.8.8-1.4-1-2.8-.5-4.3-.6-.1 0-.4.5-.4.7.1 3.2.3 6.3.4 9.5v.6c.1 3.7.1 7.5.3 11.2 0 1.3.3 2.6.5 3.9.2 1.4.2 2.8-.9 3.7-.9.8-3.2.6-4.3-.2-.2-.2-.4-.4-.6-.7-.8-1.5-1-3.1-.7-4.9.2-1-.2-2-.2-3.1-.1-4.1-.1-8.2-.3-12.3-.2-2.4-.4-4.9-.5-7.6z"
          style={{
            stroke: "#BB231A",
            strokeWidth: 0.5,
            strokeMiterlimit: 10,
          }}
        />
      </g>
      <g id="Junior">
                <motion.path
          variants={pathVariantsJ}
          initial="hidden"
          animate="visible"
          id="N"
          d="M86.6 40.3c0 5.6 0 11.2-.2 16.9 0 1.6-.4 3.3-1 4.9-.5 1.6-2.1 2.3-3.7 2-1.3-.2-2.3-1.4-2.4-2.9-.1-1.3 0-2.6 0-4 0-4.3-.1-8.7 0-13 .1-4.8.4-9.7.5-14.5 0-2.5-.3-5.1-.2-7.6 0-1.6.3-3.2 1.3-4.6.9-1.2 2.1-1.5 3.6-1 1.6.6 2.5 1.8 3 3.3.9 3 1.6 6 2.6 8.9 1.9 5.6 4.8 10.8 7.9 15.8 1.3 2.1 2.8 4.1 4.2 6.2.1.2.3.4.7.8.1-1.2.3-2.1.3-3 .1-3.3.2-6.5.3-9.8.1-2.4.2-4.8.2-7.2.1-2.8.1-5.6.3-8.3.1-1.8.3-3.7.7-5.4.6-2.5 4-3.4 5.8-1.6.7.7 1.1 2 1.2 3.1.2 2.4.1 4.9 0 7.3 0 1.5-.2 3.1-.3 4.6-.2 4-.5 8-.7 12-.2 2.5-.5 5.1-.7 7.6-.3 3.3-.6 6.6-1 10-.2 2.1-2 4-4 4.4-1.7.3-2.9-.7-3.8-2-3.2-4.6-6.5-9.3-9.5-14.1-1.7-2.7-3-5.7-4.5-8.6-.1-.2-.2-.4-.2-.6-.1 0-.1.1-.2.1-.3 0-.3.1-.2.3z"
          style={{
            stroke: "#22518A",
            strokeWidth: 0.5,
            strokeMiterlimit: 10,
          }}
        />
                <motion.path
          variants={pathVariantsJ}
          initial="hidden"
          animate="visible"
          id="O"
          d="M157.8 62.8c-4 0-7.4-1.6-10.4-4.1-4.9-4-7.7-9.2-9.1-15.2-.7-3.1-.6-6.3-.1-9.5.5-3.3 1.2-6.4 2.7-9.3 2.7-5.5 7.1-8.9 13-10.2 4.5-1 8.9-.8 13.2 1 4.1 1.8 6.8 5 8.5 9.1 1.5 3.8 2.1 7.7 2.2 11.8.1 3.7-.1 7.3-1.3 10.8-1 3.1-2.5 6-4.7 8.5-2.5 2.9-5.5 5-9.1 6.1-1.6.6-3.3.7-4.9 1zm13.5-25c.1-3.7-.7-6.8-2.2-9.3-1.4-2.4-3.3-4.2-6.2-5-2.6-.7-5.1-.6-7.7 0-6.3 1.5-10 6.2-10.5 12.4-.3 3.5.5 6.8 2.2 9.7 2.9 4.8 6.4 8.5 12.8 7.5 2.6-.4 4.9-1.4 6.8-3.1 3.6-3.1 4.8-7.2 4.8-12.2z"
          style={{
            stroke: "#22518A",
            strokeWidth: 0.5,
            strokeMiterlimit: 10,
          }}
        />
                <motion.path
          variants={pathVariantsJ}
          initial="hidden"
          animate="visible"
          id="R"
          d="M206.7 37.4c3.3 1.3 5.7 3.5 7.1 6.7 1.2 2.6 1.8 5.3 1.9 8.2.2 3.2.4 6.4.5 9.6 0 1.9-1 3.9-2.7 4.2-1.2.2-2.7-.2-3.2-1.3-.4-.9-.8-1.9-.9-2.8-.2-1.4-.2-2.8-.3-4.1-.2-2.7-.3-5.3-.7-8-.3-2-1.9-2.9-3.6-3.6-4.7-1.9-9.3-1.8-13.8.4-.4.2-.6 1.3-.5 1.8.7 4 1.6 8 2.3 12.1.4 2.7-1 5.7-4.2 5.4-1.9-.2-2.6-1.7-3.4-3.1-.2-.4-.3-.9-.3-1.4.2-3.6-.5-7.1-1.2-10.6-.5-2.7-.7-5.4-1-8.1-.3-3.3-.7-6.7-.7-10 0-2-.2-4.3 1.1-6 1.4-1.8 3-3.6 4.8-5 3.2-2.7 7-3.9 11.2-3.8 5.2.2 9.6 3.4 10.4 8.9.8 4.8.2 7.1-2.8 10.5zm-18-.5c.2.1.3.1.5.2 1.9-.7 3.8-1.2 5.7-2.1 2.5-1.1 4.8-2.4 7.2-3.7.5-.3 1-1.1 1-1.6 0-1.9-1-2.9-3-3-3.5-.3-6.6.9-9.4 2.8-.9.6-2 1.3-2 2.7.1 1.6 0 3.1 0 4.7z"
          style={{
            stroke: "#22518A",
            strokeWidth: 0.5,
            strokeMiterlimit: 10,
          }}
        />
                <motion.path
          variants={pathVariantsJ}
          initial="hidden"
          animate="visible"
          id="U"
          d="M73.2 13.5c1.2 2.1.9 4.4.8 6.6-.1 1.8-.6 3.6-.6 5.4-.2 6-.3 12-.2 18 0 3.3.6 6.6.9 9.8.1 1.5.1 3.1 0 4.7s-2 2.8-3.8 2.9c-1.6.1-2.8-.9-3.3-2.5-.1-.4-.3-.7-.4-1.1-1.1.8-2.1 1.5-3.2 2.2-3.5 2.2-7.2 3.1-11.2 1.6-2.1-.8-3.7-2.4-4.8-4.4-1.7-3-2.7-6.3-3.3-9.7-.7-3.8-1.1-7.7-1-11.6 0-1.7-.3-3.4-.2-5.1.3-4.2 0-8.5 1.2-12.6.3-.9.6-1.8 1.1-2.7.7-1.3 2.4-1.8 3.8-1.5 1 .3 2 1.6 2 2.9 0 3.6-.1 7.1-.2 10.7-.1 3.5-.6 7-.4 10.4.2 3.8.6 7.6 2 11.2 1.3 3.6 3.8 4.5 7.3 3.6 3.9-1.1 6.3-4 6.3-8.4 0-4.3.1-8.7.2-13 .1-2.9 0-5.7.3-8.6.2-2.7.2-5.5 1.4-8.1.3-.7.7-.9 1.5-.9 1 .3 2.3.2 3.8.2z"
          style={{
            stroke: "#22518A",
            strokeWidth: 0.5,
            strokeMiterlimit: 10,
          }}
        />
                <motion.path
          variants={pathVariantsJ}
          initial="hidden"
          animate="visible"
          id="I"
          d="M127.2 54.4c1.2 0 2 .1 2.8 0 1.4-.2 2.3.5 2.7 1.8 1 3.2.8 5.7-1.9 7.2-.4.2-1 .4-1.4.4-3.4 0-6.8 0-10.1-.3-2.3-.1-4.7-1.5-5.3-3.5-.6-2.1.4-5.9 3-6.3.9-.1 1.8 0 2.7 0 .6-9 1.3-18 1.9-27.1-.7 0-1.4 0-2.2-.1-3.1-.6-3.6-3.1-3.1-5.6.5-3.1 1.8-4 5-3.9 2.6.1 5.2.2 7.7.2 1.3 0 2.6-.3 3.8-.4 1-.1 1.9-.1 2.6.8 1.3 1.4 2.2 2.9 1.9 4.9-.4 2.5-2.1 3.9-4.4 4.6-.5.1-1.1-.1-1.6-.2-.4-.1-.8-.4-1.2-.4-1-.1-1.7-.1-1.7 1.3-.1 2.9-.5 5.7-.7 8.6-.1 5.8-.3 11.8-.5 18z"
          style={{
            stroke: "#22518A",
            strokeWidth: 0.5,
            strokeMiterlimit: 10,
          }}
        />
                <motion.path
          variants={pathVariantsJ}
          initial="hidden"
          animate="visible"
          id="J"
          d="M36.5 24.2c-.3 3.7-.7 7.9-1.1 12.1-.2 2.5-.4 5.1-.7 7.6-.5 3.2-.9 6.3-1.8 9.4-.7 2.5-2.6 4.5-4.5 6.2-1.9 1.7-4 3-6.5 3.7-3.7 1-7.3 1-10.7-1.2-3.5-2.4-3.2-7.4-1-9.8 1.3-1.4 3.9-1.4 4.9.1 1.7 2.4 3.8 2.5 6.2 1.6 2.3-.9 4.4-2.2 5.3-4.7.2-.6.4-1.3.4-1.9.2-2.7.3-5.4.5-8 .3-3.8.6-7.6 1-11.4.2-2.4.3-4.8.8-7.1.2-1.2.8-2.4 1.5-3.3.9-1.2 2.5-1.1 3.6-.7.8.3 1.5 1.4 1.7 2.3.3 1.5.3 3 .4 5.1z"
          style={{
            stroke: "#22518A",
            strokeWidth: 0.5,
            strokeMiterlimit: 10,
          }}
        />
        <motion.path
          variants={pathVariantsJ}
          initial="hidden"
          animate="visible"
          d="M86.6 40.3c0-.2-.1-.3-.1-.5.1 0 .1-.1.2-.1.1.2.2.4.2.6h-.3z"
          style={{
            fill: "#8fa7c4",
            stroke: "#22518A",
            strokeWidth: 0.5,
            strokeMiterlimit: 10,
          }}
        />
      </g>
    </g>
  </svg>
)
export default SvgComponent