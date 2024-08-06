import FramerMagnetic from "../ui/FramerMagnetic";
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from "react-icons/fa";
// import { FaMedium } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { SiLeetcode } from "react-icons/si";

export const SocialMediaIcons = () => {
    const staggerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
            },
        }),
    }

    return (
        <div className="flex gap-8 max-w-4xl mx-auto pb-2">
            {socialMediaLinks.map((link, index) => (
                <motion.div
                    key={index}
                    custom={index}
                    variants={staggerVariants}
                    initial="hidden"
                    animate="visible">
                    <FramerMagnetic>
                        <Link to={link.url}>
                            {link.iconComponent}
                        </Link>
                    </FramerMagnetic>
                </motion.div>
            ))}
        </div>
    )
}

const socialMediaLinks = [
    {
        url: 'https://www.linkedin.com/in/tusharminche/',
        iconComponent: <FaLinkedin className="fill-white hover:fill-secondary" size={25} />
    },
    {
        url: 'https://github.com/TusharMinche/',
        iconComponent: <FaGithub className="fill-white hover:fill-secondary" size={25} />
    },
    {
        url: 'https://leetcode.com/u/TusharMinche/',
        iconComponent: <SiLeetcode className="fill-white hover:fill-secondary" size={25} />
    },
];
