import { navigate } from '@openmrs/esm-framework';
import { HeaderGlobalAction } from 'carbon-components-react';
import PlayOutline20 from '@carbon/icons-react/es/play--outline/20';
import React from 'react';
import styles from './link.style.css';
import { store } from './store';

export default () => (
  <HeaderGlobalAction
    onClick={() => {
      navigate({
        to: '${openmrsSpaBase}/hello',
      });
      store.setState({
        count: store.getState().count + 1,
      });
    }}
    className={styles.link}
    aria-label="Hello!"
    aria-labelledby="Hello"
    name="HelloIcon">
    <PlayOutline20 />
  </HeaderGlobalAction>
);
