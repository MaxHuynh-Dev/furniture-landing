'use client';
import styles from './hero.module.scss';

import PrimaryButton from '@Components/Buttons/PrimaryButton';
import { Container } from '@Components/Container';
import classNames from 'classnames';
import type React from 'react';

import Text from '@/components/Typo';
import ImagePlaceHolder from '@Components/ImagePlaceHolder';

function Hero(): React.ReactElement {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_background}>
        <ImagePlaceHolder src="/images/hero.jpg" alt="Hero Background" width={1000} height={1000} />
      </div>
      <Container className={styles.hero_container}>
        <div className={styles.hero_container_inner}>
          <Text
            Comp={'h1'}
            size={48}
            font="heading"
            weight="semibold"
            color="default"
            transform="uppercase"
            className={classNames(styles.hero_heading)}
          >
            <span className={classNames(styles.hero_heading_word_italic, 'split')}>We create</span>
            <div className={classNames(styles.hero_heading_word_normal, 'split')}>
              interiors that one
            </div>
            <div className={classNames(styles.hero_heading_word_normal, 'split')}>
              wants to live in
            </div>
          </Text>
          <div className={styles.hero_container_inner_bottom}>
            <Text Comp={'p'} size={18} transform="capitalize">
              For more than 30 years, we&apos;ve been <br /> bringing projects to life around the
              world.
            </Text>
            <PrimaryButton text="Explore our work" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
