A mini utility to convert [Elasticsearch's REST spec](https://github.com/elastic/elasticsearch/blob/master/rest-api-spec) to Console's (Kibana) autocomplete format.  This will be integrated into the Kibana repository when it's functional.


Until it's stable I'm using it to semi-manually update Console's autocompletion rules.



### Retrieving the spec
```
cd es-spec
git init
git remote add origin https://github.com/elastic/elasticsearch
git pull --depth=1 origin master
```

### Usage
```
node bin/spec_to_console.js \
  -g "es-spec/rest-api-spec/src/main/resources/rest-api-spec/api/*.json" \
  -d "../kibana/src/core_plugins/console/api_server/spec/generated"
```
```
node bin/spec_to_console.js \
  -g "es-spec/x-pack/plugin/src/test/resources/rest-api-spec/api/*.json" \
  -d "../kibana/x-pack/plugins/console_extensions/spec/generated/"
```

### Information used in Console that is not available in the REST spec
* Request bodies
* Data fetched at runtime: indices, fields, snapshots, etc
* Ad hoc additions
