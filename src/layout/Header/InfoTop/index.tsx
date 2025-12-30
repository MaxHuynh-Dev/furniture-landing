import type React from 'react';

import { Container } from '@/components/Container';
import Text from '@/components/Typo';
import { MapPin } from 'lucide-react';
import styles from './infoTop.module.scss';

function InfoTop(): React.ReactElement {
  return (
    <div className={styles.infoTop}>
      <Container>
        <div className={styles.infoTop_container}>
          <div className={styles.infoTop_container_left}>
            <MapPin color="var(--color-gray-6)" strokeWidth={1.4} />
            <Text size={12} color="gray6">
              Store Location: Lincoln- 344, Illinois, Chicago, USA
            </Text>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default InfoTop;
