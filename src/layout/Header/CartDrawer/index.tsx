'use client';

import Separator from '@/components/Separator';
import Text from '@/components/Typo';
import { signal, useSignalEffect } from '@preact/signals-react';
import clsx from 'clsx';
import { X } from 'lucide-react';
import type React from 'react';
import { RefObject, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import CartItem from '../components/CartItem';
import styles from './cartDrawer.module.scss';

export const isOpenCartDrawer = signal<boolean>(false);
function CartDrawer(): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useSignalEffect((): void => {
    setIsOpen(isOpenCartDrawer.value);
  });

  useOnClickOutside(ref as RefObject<HTMLDivElement>, (): void => {
    isOpenCartDrawer.value = false;
  });

  return (
    <div className={clsx(styles.cartDrawer, isOpen && styles.active)}>
      <div className={styles.cartDrawer_overlay} />
      <div className={styles.cartDrawer_content} ref={ref}>
        <div className={styles.cartDrawer_content_header}>
          <Text size={20} weight="medium" color="gray9">
            Shopping Card (2)
          </Text>
          <div className={styles.cartDrawer_content_header_close}>
            <X
              width={'2.5rem'}
              height={'2.5rem'}
              onClick={(): void => {
                isOpenCartDrawer.value = false;
              }}
            />
          </div>
        </div>
        <div className={styles.cartDrawer_content_body}>
          <CartItem />
          <Separator />
          <CartItem />
          <Separator />
          <CartItem />
        </div>
      </div>
    </div>
  );
}

export default CartDrawer;
