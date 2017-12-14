A mini utility to convert [Elasticsearch's REST spec](https://github.com/elastic/elasticsearch/blob/master/rest-api-spec) to Console's (Kibana) autocomplete format.  This will be integrated into the Kibana repository when it's functional.


Until it's stable I'm using it to semi-manually update Console's autocompletion rules.



### Retrieving the spec
```
cd es-spec
git init
git remote add origin https://github.com/elastic/elasticsearch
git config core.sparsecheckout true
echo "rest-api-spec/src/main/resources/rest-api-spec/api/*" > .git/info/sparse-checkout
git pull --depth=1 origin master
```

### Usage
```
node bin/spec_to_console.js \
  -g es-spec/rest-api-spec/src/main/resources/rest-api-spec/api/*.json
  -d output
```

### Information used in Console that is not available in the REST spec
* Request bodies
