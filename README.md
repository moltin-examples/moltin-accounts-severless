## Usage

An endpoint that can be used to fetch accounts from Moltin and add in your own custom filters.  In this example we will filter by created data.

* You will need to have your Moltin keys

* You will need to created a flow for the customers object and added the field createdDate to the flow.  To read more about flows, https://developers.moltin.com/guides/custom-data


* The package is deployed via Serverless.  If you do not have Serverless please go read their documentation to get started https://serverless.com/.  Note you could create the APIGateway and Lambda in the Dashboard if you would like.


* Install packages

```
npm install
```

* Adding keys
```
//handler.js
const Moltin = MoltinGateway({
  client_id: "XXXXX",
  client_secret: "XXXXX"
});
```

* Deploying
```
sls deploy
```
Running sls deploy will deploy the APIGateway and the lambda in this package.


* Usage
This will fetch the accounts for your moltin store and give you a place to add in filtering to the response.  In the example the filter applied grabs only accounts today.



* Testing
In the playground folder you will find a basic html page that can be used to test the endpoint, observe the API behavior and test your own logic.
