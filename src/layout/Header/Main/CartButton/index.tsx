'use client';

import Text from '@/components/Typo';
import { ShoppingCart } from 'lucide-react';
import type React from 'react';
import { isOpenCartDrawer } from '../../CartDrawer';
import styles from './cartButton.module.scss';

function CartButton(): React.ReactElement {
  return (
    <div className={styles.main_cart}>
      <div
        role="button"
        tabIndex={0}
        onKeyDown={(e): void => {
          if (e.key === 'Enter' || e.key === ' ') {
            isOpenCartDrawer.value = !isOpenCartDrawer.value;
          }
        }}
        className={styles.main_cart_icon}
        onClick={(): void => {
          isOpenCartDrawer.value = !isOpenCartDrawer.value;
        }}
      >
        <ShoppingCart
          color="var(--color-gray-6)"
          strokeWidth={1.4}
          width={'3.2rem'}
          height={'3.2rem'}
        />
        <div className={styles.main_cart_count}>
          <Text size={10} color="white" weight="medium">
            2
          </Text>
        </div>
      </div>
      <div className={styles.main_cart_icon_text}>
        <Text size={11} color="gray7">
          Shopping cart:
        </Text>
        <Text size={14} weight="medium" color="gray9" style={{ lineHeight: '1em' }}>
          $100.00
        </Text>
      </div>
    </div>
  );
}

export default CartButton;
