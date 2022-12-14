

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import { images } from '../obrazky';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Tým na který se můžete spolehnout" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-white"
      >
        <span className="font-extrabold text-white"></span> Jsme tým  zkušených developerů, designérů a expertů v oboru s nadšením pro{' '}
        <span className="font-extrabold text-white">
          moderní technologie
        </span>{' '}
        Vyvíjíme úspěšné{' '}
        <span className="font-extrabold text-green-100">moderní webové aplikace</span> pro vás na míru.
        Naším cílem je dělat    
        {' '}
        <span className="font-extrabold text-white"> kvalitní a úspěšné aplikace</span> pro spokojenost našich zákazníků.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src={images.arrowdown}
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;