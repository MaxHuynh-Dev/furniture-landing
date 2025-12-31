import classnames from 'clsx';
import { Separator as SeparatorRadix } from 'radix-ui';
import styles from './styles.module.scss';

interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  color?: string;
}

function Separator({
  orientation = 'horizontal',
  className,
  color = 'var(--color-gray-1)',
}: SeparatorProps): React.ReactElement {
  return (
    <SeparatorRadix.Root
      className={classnames(styles.separator, className)}
      decorative
      orientation={orientation}
      style={{ backgroundColor: color }}
    />
  );
}

export default Separator;
