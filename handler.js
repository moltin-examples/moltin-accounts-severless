var AWS = require("aws-sdk");

const MoltinGateway = require("moltin.js").gateway;

//Your Moltin Keys
const Moltin = MoltinGateway({
  client_id: "XXXXXX",
  client_secret: "XXXXXX"
});

function generateResponse(code, accounts) {
  console.log("response", { "accounts created in timeframe": accounts });
  const response = [{ "accounts created in timeframe": accounts }];
  try {
    return {
      statusCode: code,
      headers: {
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(response)
    };
  } catch (err) {
    return generateError(500, err);
  }
}

function generateError(code, err) {
  console.log(err);
  return {
    statusCode: code,
    headers: {
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(err.message)
  };
}

async function getUsers() {
  let accounts = await Moltin.Customers.All();
  return accounts;
}

module.exports.accounts = async event => {
  try {
    //send filter parameters up if you want in the get request or you can switch to a post
    // let form = JSON.parse(event.body);
    const accounts = await getUsers();
    let data = JSON.stringify(accounts);
    const filterCreatedToday = [];
    //filters
    for (let filterdata of accounts.data) {
      const ts = new Date();
      const today = ts.toLocaleDateString();
    if (filterdata.createdDate = today) {
      filterCreatedToday.push(filterdata)
    }
  }
    return generateResponse(200, filterCreatedToday);
  } catch (err) {
    return generateError(500, err);
  }
};
