A mini utility to convert [Elasticsearch's REST spec](https://github.com/elastic/elasticsearch/blob/master/rest-api-spec) to Console's (Kibana) autocomplete format.  This will be integrated into the Kibana repository when it's functional.


Until it's stable I'm using it to semi-manually update Console's autocompletion rules.

### Usage
`node bin/spec_to_console.js -g <glob>`

#### Information used in Console that is not available in the REST spec
* Request bodies
