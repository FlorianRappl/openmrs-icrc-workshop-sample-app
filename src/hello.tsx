/**
 * From here, the application is pretty typical React, but with lots of
 * support from `@openmrs/esm-framework`. Check out `Greeter` to see
 * usage of the configuration system, and check out `PatientGetter` to
 * see data fetching using the OpenMRS FHIR API.
 *
 * Check out the Config docs:
 *   https://openmrs.github.io/openmrs-esm-core/#/main/config
 */

import React from 'react';
import styles from './hello.css';
import { Greeter } from './greeter/greeter';
import { PatientGetter } from './patient-getter/patient-getter';
import { store } from './store';
import { useStoreState } from '@openmrs/esm-framework';

const Hello: React.FC<any> = ({ getPatient }) => {
  const count = useStoreState(store, (s) => s.count);

  return (
    <div className={`omrs-main-content ${styles.container}`}>
      <Greeter />
      <PatientGetter getPatient={getPatient} />
      <h1>Count: {count}</h1>
    </div>
  );
};

export default Hello;
