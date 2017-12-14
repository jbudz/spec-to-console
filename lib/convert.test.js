const convert = require('./convert');

const clusterHealthSpec = require('../test/fixtures/cluster_health_spec');
const clusterHealthAutocomplete = require('../test/fixtures/cluster_health_autocomplete');

test('convert', () => {
  expect(convert(clusterHealthSpec)).toEqual(clusterHealthAutocomplete);
});
