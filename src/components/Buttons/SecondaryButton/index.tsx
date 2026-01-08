import type React from 'react';

import Text from '@/components/Typo';
import { cva, VariantProps } from 'class-variance-authority';
import { ArrowRight } from 'lucide-react';
import s from './styles.module.scss';
const buttonVariants = cva(s.primaryButton, {
  variants: {
    size: {
      small: s.primaryButton_small,
      medium: s.primaryButton_medium,
      large: s.primaryButton_large,
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

type TSecondaryButtonProps = VariantProps<typeof buttonVariants> & {
  text: string;
  className?: string;
  onClick?: () => void;
};

export default function SecondaryButton({ ...props }: TSecondaryButtonProps): React.JSX.Element {
  const { text = '', className, size = 'medium', onClick } = props;

  const primaryButtonClassNames = buttonVariants({ size, className });

  return (
    <button type="button" className={primaryButtonClassNames} onClick={onClick}>
      <Text
        Comp={'label'}
        // size={22}
        transform="capitalize"
        weight="semibold"
        color="primary"
        // className={s.primaryButton_text}
      >
        {text}
      </Text>
      <div className={s.primaryButton_icon}>
        <ArrowRight color="var(--color-primary)" />
      </div>
    </button>
  );
}
