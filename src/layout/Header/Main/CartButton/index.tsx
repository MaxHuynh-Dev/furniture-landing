'use client';

import TextV2 from '@/components/TypoV2';
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
          <TextV2 size={10} color="white" weight="medium">
            2
          </TextV2>
        </div>
      </div>
      <div className={styles.main_cart_icon_text}>
        <TextV2 size={11} color="gray7">
          Shopping cart:
        </TextV2>
        <TextV2 size={14} weight="medium" color="gray9">
          $100.00
        </TextV2>
      </div>
    </div>
  );
}

export default CartButton;
