'use client';

import { Container } from '@/components/Container';
import TextV2 from '@Components/TypoV2';
import { ROUTER } from '@Constants/router';
import { PhoneCall } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type React from 'react';
import styles from './menu.module.scss';

interface MenuProps {
  variant?: 'dark' | 'light';
}

function Menu({ variant = 'dark' }: MenuProps): React.ReactElement {
  const pathname = usePathname();

  return (
    <div className={styles.menu} data-variant={variant}>
      <Container className={styles.menu_container}>
        <ul className={styles.menu_list}>
          {ROUTER.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link href={item.href}>
                  <TextV2
                    size={14}
                    transform="capitalize"
                    weight="medium"
                    color={isActive ? 'black' : 'gray4'}
                    className={styles.menu_list_item}
                  >
                    {item.label}
                  </TextV2>
                </Link>
              </li>
            );
          })}
        </ul>

        <Link href="tel:+1234567890" className={styles.menu_phone}>
          <PhoneCall color={variant === 'dark' ? 'var(--color-white)' : 'var(--color-gray-9)'} />
          <TextV2 size={14} weight="medium" color={variant === 'dark' ? 'white' : 'gray9'}>
            (219) 555-0114
          </TextV2>
        </Link>
      </Container>
    </div>
  );
}

export default Menu;
