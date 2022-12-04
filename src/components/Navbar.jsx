
import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';
import { images } from '../obrazky';
const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
      
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        weinvent.
      </h2>
      <a href='#contact'>
      <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
          <img
            src={images.headset}
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          
          <span className="font-normal text-[16px] text-white" >
            Nezávazná konzultace 
          </span>
          
        </button>
        </a>
    </div>
  </motion.nav>
);

export default Navbar;