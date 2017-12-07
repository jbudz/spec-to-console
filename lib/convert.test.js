const convert =  require('./convert')

const clusterHealthSpec = require('../test/fixtures/cluster_health_spec');
const clusterHealthAutocomplete = require('../test/fixtures/cluster_health_autocomplete');

test('Cluster health', () => {
  console.log(clusterHealthSpec)
  expect(convert(clusterHealthSpec)).toEqual(clusterHealthAutocomplete);
});
