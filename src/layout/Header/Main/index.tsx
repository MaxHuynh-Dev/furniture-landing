import { Container } from '@/components/Container';
import SvgInsert from '@/components/SvgInsert';
import Link from 'next/link';
import type React from 'react';
import styles from './main.module.scss';

function Main(): React.ReactElement {
  return (
    <div className={styles.main}>
      <Container>
        <div className={styles.main_container}>
          <Link href="/" className={styles.main_logo}>
            <SvgInsert name="logo" src="/images/Logo.svg" />
          </Link>
          <div className="">search</div>
          <div className="">cart</div>
        </div>
      </Container>
    </div>
  );
}

export default Main;
