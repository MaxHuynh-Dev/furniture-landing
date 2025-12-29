import { cva, type VariantProps } from 'class-variance-authority';
import type React from 'react';
import styles from './typo.module.scss';
const textVariants = cva(styles.text, {
  variants: {
    size: {
      12: styles.text__12,
      14: styles.text__14,
      16: styles.text__16,
      18: styles.text__18,
      24: styles.text__24,
      30: styles.text__30,
      48: styles.text__48,
      36: styles.text__36,
    },

    weight: {
      thin: styles.weight__thin,
      extralight: styles.weight__extralight,
      light: styles.weight__light,
      normal: styles.weight__regular,
      medium: styles.weight__medium,
      semibold: styles.weight__semibold,
      bold: styles.weight__bold,
      extrabold: styles.weight__extrabold,
    },
    transform: {
      uppercase: styles.transform__uppercase,
      lowercase: styles.transform__lowercase,
      capitalize: styles.transform__capitalize,
    },
    font: {
      body: styles.font__inter,
      heading: styles.font__raleway,
    },

    color: {
      default: styles.text__white,
      black: styles.text__black,
      white: styles.text__white,
      blue: styles.text__blue,
      vani: styles.text__vani,
      darkGrey: styles.text__darkGrey,
    },
  },
  defaultVariants: {
    size: 16,
    weight: 'normal',
    color: 'default',
    font: 'body',
  },
});

type TypoTag = 'p' | 'span' | 'div' | 'label' | 'a' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type TypoOwnProps<TAs extends TypoTag> = VariantProps<typeof textVariants> & {
  Comp: React.ElementType<React.HTMLAttributes<TAs>>;
  className?: string;
  children: React.ReactNode;
  ref?: React.Ref<
    HTMLParagraphElement | HTMLSpanElement | HTMLDivElement | HTMLLabelElement | HTMLHeadingElement
  >;
};

const Text = ({ ...props }: TypoOwnProps<TypoTag>): React.JSX.Element => {
  const { Comp = 'p', className, children, ...restProps } = props;

  return (
    <Comp className={textVariants({ className })} {...restProps}>
      {children}
    </Comp>
  );
};

export default Text;
