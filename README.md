# How to install

- clone the repo.
- make sure you have postgres installed
- open a terminal and type `createdb issue-test`
- install with `npm/yarn`
- run `start` script
- browse to `http://localhost:4000/graphql` and try either `query` or `mutation` it should fail and display a message like:`"Service with \"MaybeConstructable<UserResolver>\" identifier was not found in the container. Register it before usage via explicitly calling the \"Container.set\" function or using the \"@Service()\" decorator."`
