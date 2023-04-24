# service-property-reviews
Techbricks  property-reviews CRUD service 


## Version
`0.0.1`

## Demo

[Demo](https://packages-trotter-wmdfs7yiwa-lz.a.run.app/)

## Getting started

Clone the project:

```

```

Install dependencies:
```
cd service-property-reviews && yarn install
```

## Get it up and running

In production
```
yarn start
```

In development
```
yarn dev
```

The default port is 8005 so navigate to localhost:8005

## API

GET : Returns an array of all property-reviews
```
/v1/property-review
```
POST: Returns an array of object of the id of new property-review(s) added, accepts an array of
property-review(s) to be created
```
/v1/property-review
```
GET: Returns an array of object of the property-review requested
```
/v1/property-review/:id
```
PATCH: Returns an array of object of the id of the property-review updated, accepts an object of
property-review to be updated
```
/v1/property-review/:id
```
DELETE: Returns an array of object of the id of the property-review deleted
```
/v1/property-review/:id
```


## Testing


Latest coverage report. 03.02.2023
```
------------------|---------|----------|---------|---------|-------------------
File              | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------------|---------|----------|---------|---------|-------------------
All files         |   96.26 |       90 |     100 |      96 |                   
build/filereader |    87.5 |      100 |     100 |    87.5 |                   
index.js        |    87.5 |      100 |     100 |    87.5 | 16                
build/parser     |   97.87 |       90 |     100 |   97.82 |                   
index.js        |   97.87 |       90 |     100 |   97.82 | 18                
filereader       |   85.71 |      100 |     100 |   85.71 |                   
index.ts        |   85.71 |      100 |     100 |   85.71 | 15                
parser           |   97.77 |       90 |     100 |   97.43 |                   
index.ts        |   97.77 |       90 |     100 |   97.43 | 21                
------------------|---------|----------|---------|---------|-------------------`
```
## Design process
