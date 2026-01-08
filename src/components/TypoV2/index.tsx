import * as stylex from '@stylexjs/stylex';
import type React from 'react';
import { colors } from '../../styles/tokens.stylex';

// --- PHẦN 1: ĐỊNH NGHĨA STYLES ---

// Mẹo: Trong dự án thực tế, bạn nên define màu sắc ra file 'tokens.stylex.ts'
// Ở đây tôi dùng biến CSS (var(--...)) để mô phỏng các biến SCSS cũ của bạn.

const baseStyles = stylex.create({
  root: {
    margin: 0,
    padding: 0,
    fontFamily: 'Poppins, sans-serif', // Default font
    // Các style mặc định khác từ class .text cũ của bạn
  },
});

const sizeStyles = stylex.create({
  10: { fontSize: '1rem', lineHeight: '1em' },
  11: { fontSize: '1.1rem', lineHeight: '1.2em' },
  12: { fontSize: '1.2rem', lineHeight: '1.3em' },
  14: { fontSize: '1.4rem', lineHeight: '1.5' },
  16: { fontSize: '1.6rem', lineHeight: '1.5em', letterSpacing: '-0.048rem' },
  18: { fontSize: '1.8rem', lineHeight: '1.5em', letterSpacing: '-0.054rem' },
  20: { fontSize: '2rem', lineHeight: '1.5em', letterSpacing: '-0.06rem' },
  22: { fontSize: '2.2rem', lineHeight: '1.5em', letterSpacing: '-0.066rem' },
  24: { fontSize: '2.4rem', lineHeight: '1.2em', letterSpacing: '-0.024rem' },
  30: { fontSize: '3rem', lineHeight: '1.26667', letterSpacing: '-0.03rem' },
  36: { fontSize: '3.6rem', lineHeight: '1.22222', letterSpacing: '-0.072rem' },
  48: { fontSize: '4.8rem', lineHeight: '1.2em' },
  60: { fontSize: '6rem', lineHeight: '1.2em', letterSpacing: '-0.06rem' },
  130: { fontSize: '13rem', lineHeight: '1.2em', letterSpacing: '-0.13rem' },
});

const weightStyles = stylex.create({
  thin: { fontWeight: 100 },
  extralight: { fontWeight: 200 },
  light: { fontWeight: 300 },
  normal: { fontWeight: 400 },
  medium: { fontWeight: 500 },
  semibold: { fontWeight: 600 },
  bold: { fontWeight: 700 },
  extrabold: { fontWeight: 800 },
});

const transformStyles = stylex.create({
  uppercase: { textTransform: 'uppercase' },
  lowercase: { textTransform: 'lowercase' },
  capitalize: { textTransform: 'capitalize' },
});

const colorStyles = stylex.create({
  white: { color: colors.white },
  black: { color: colors.black },
  softPrimary: { color: colors.softPrimary }, // Thay bằng mã màu hex thực tế
  primary: { color: colors.primary },
  hardPrimary: { color: colors.hardPrimary },
  warning: { color: colors.warning },
  danger: { color: colors.danger },

  // Grays
  gray9: { color: colors.gray9 },
  gray8: { color: colors.gray8 },
  gray7: { color: colors.gray7 },
  gray6: { color: colors.gray6 },
  gray5: { color: colors.gray5 },
  gray4: { color: colors.gray4 },
  gray3: { color: colors.gray3 },
  gray2: { color: colors.gray2 },
  gray1: { color: colors.gray1 },
  gray0_5: { color: colors.gray0_5 },

  // Green Grays
  greenGray9: { color: colors.greenGray9 },
  greenGray8: { color: colors.greenGray8 },
  greenGray7: { color: colors.greenGray7 },
  greenGray6: { color: colors.greenGray6 },
  greenGray5: { color: colors.greenGray5 },
  greenGray4: { color: colors.greenGray4 },
  greenGray3: { color: colors.greenGray3 },
  greenGray2: { color: colors.greenGray2 },
  greenGray1: { color: colors.greenGray1 },
  greenGray0_5: { color: colors.greenGray0_5 },
});

// --- PHẦN 2: TYPES ---

type TypoTag = 'p' | 'span' | 'div' | 'label' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

// StyleX cho phép override style từ bên ngoài thông qua prop style hoặc xstyle
type TextProps = Omit<React.HTMLAttributes<HTMLElement>, 'style' | 'color'> & {
  Comp?: TypoTag;
  children: React.ReactNode;
  // Dùng keyof typeof để lấy type tự động từ object StyleX đã tạo
  size?: keyof typeof sizeStyles;
  weight?: keyof typeof weightStyles;
  transform?: keyof typeof transformStyles;
  color?: keyof typeof colorStyles;
  // Prop đặc biệt để override styles trong StyleX (tương đương className cũ nhưng mạnh hơn)
  style?: stylex.StyleXStyles;
};

// --- PHẦN 3: COMPONENT ---

const TextV2 = ({
  Comp = 'p',
  children,
  size = 16,
  weight = 'normal',
  transform,
  color = 'greenGray9',
  style, // Style override từ bên ngoài (nếu có)
  className, // Giữ lại để tương thích nếu dùng kèm thư viện khác, nhưng hạn chế dùng
  ...restProps
}: TextProps): React.JSX.Element => {
  const stylexProp = stylex.props(
    baseStyles.root, // 1. Style gốc
    sizeStyles[size], // 3. Size
    weightStyles[weight], // 4. Weight
    transform && transformStyles[transform], // 5. Transform (có thể undefined)
    colorStyles[color], // 6. Color
    style // 7. Override từ bên ngoài (quan trọng nhất)
  );

  return (
    <Comp
      {...restProps}
      {...stylexProp}
      className={[stylexProp.className, className].filter(Boolean).join(' ')}
    >
      {children}
    </Comp>
  );
};

export default TextV2;
