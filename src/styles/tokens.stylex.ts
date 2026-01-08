import * as stylex from '@stylexjs/stylex';

/**
 * 1. MEDIA QUERIES (Breakpoints)
 * StyleX không đặt media query trong defineVars, mà xuất ra dưới dạng hằng số string.
 */
export const MEDIA_MOBILE = '@media (max-width: 767px)';
export const MEDIA_TABLET = '@media (min-width: 768px) and (max-width: 1024px)';
export const MEDIA_DESKTOP = '@media (min-width: 1025px)';

/**
 * 2. COLORS (Bảng màu)
 * Sử dụng defineVars giúp bạn dễ dàng làm Dark Mode sau này (chỉ cần tạo theme đè lên).
 */
export const colors = stylex.defineVars({
  // --- Main Colors ---
  white: '#FFFFFF',
  black: '#000000',

  // Primary (Ví dụ tông Xanh dương, bạn sửa lại mã HEX theo brand của bạn)
  softPrimary: '#84d187', // Blue 50
  primary: '#00b207', // Blue 500
  hardPrimary: '#2c742f', // Blue 800

  // Status
  warning: '#FF9800', // Orange
  danger: '#F44336', // Red
  success: '#4CAF50', // Green

  // --- Grayscale (Màu xám trung tính) ---
  gray9: '#1a1a1a', // Gần đen
  gray8: '#333333',
  gray7: '#4d4d4d',
  gray6: '#666666',
  gray5: '#808080',
  gray4: '#999999',
  gray3: '#b3b3b3',
  gray2: '#cccccc',
  gray1: '#e6e6e6',
  gray0_5: '#f2f2f2', // Gần trắng

  // --- Green Grays (Màu xám ánh xanh - Slate) ---
  greenGray9: '#0b2110',
  greenGray8: '#16331c',
  greenGray7: '#224629',
  greenGray6: '#315c39',
  greenGray5: '#45704e',
  greenGray4: '#5d8566',
  greenGray3: '#7a9c82',
  greenGray2: '#9cb5a2',
  greenGray1: '#c4d6c9',
  greenGray0_5: '#e6f0e9',
});

/**
 * 3. TYPOGRAPHY (Font chữ & Cỡ chữ)
 */
export const fonts = stylex.defineVars({
  primary: 'Poppins, sans-serif',
  //   secondary: 'Arial, sans-serif', // Fallback
});

// export const fontSizes = stylex.defineVars({
//   size10: '10px',
//   size11: '11px',
//   size12: '12px',
//   size14: '14px',
//   size16: '16px',
//   size18: '18px',
//   size20: '20px',
//   size22: '22px',
//   size24: '24px',
//   size30: '30px',
//   size36: '36px',
//   size48: '48px',
//   size60: '60px',
//   size130: '130px',
// });

/**
 * 4. SPACING (Khoảng cách margin/padding) - Tùy chọn thêm
 * Giúp giao diện đồng nhất theo hệ số 4 (4px, 8px, 16px...)
 */
export const spacing = stylex.defineVars({
  xxs: '2px',
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px',
});
