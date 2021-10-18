import { createGlobalStore } from '@openmrs/esm-framework';

const store = createGlobalStore('hello', {
  count: 0,
});

export { store };
