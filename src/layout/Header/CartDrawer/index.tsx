'use client';

import Text from '@/components/Typo';
import { signal, useSignalEffect } from '@preact/signals-react';
import clsx from 'clsx';
import { X } from 'lucide-react';
import Image from 'next/image';
import type React from 'react';
import { RefObject, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
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
          <div className={styles.cartDrawer_content_body_item}>
            <div className={styles.cartDrawer_content_body_item_image}>
              <Image
                src="https://images.unsplash.com/photo-1761839257661-c2392c65ea72?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Product"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartDrawer;
