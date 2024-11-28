/*
 ** Analysis Example
 ** Get Device List
 **
 ** This analysis retrieves a list of devices from your account and prints it to the console.
 **
 ** How to use:
 ** To analysis works, you need to add a new policy in your account. Steps to add a new policy:
 **  1 - Click the button "Add Policy" at this url: https://admin.tago.io/am;
 **  2 - In the Target selector, select the Analysis with the field set as "ID" and choose your Analysis in the list;
 **  3 - Click the "Click to add a new permission" element and select "Device" with the rule "Access" with the field as "Any";
 **  4 - To save your new Policy, click the save button in the bottom right corner;
 */

const { Analysis, Resources } = require("@tago-io/sdk");

async function startAnalysis(context) {

  // Example of filtering devices by tag.
  // to use this filter, just remove the comment on the line 35
  const filter = {
    tags: [
      {
        key: "key_name", // change by your key name
        value: "key_value", // change by your key value
      },
    ],
    // You also can filter by: name, last_input, last_output, bucket, etc.
  };

  // Searching all devices with tag we want
  const devices = await Resources.devices.list({
    page: 1,
    fields: ["id", "tags"],
    // filter,
    amount: 100,
  });

  if (!devices.length) {
    return console.debug("Devices not found");
  }

  console.debug(JSON.stringify(devices));
}

Analysis.use(startAnalysis);

// To run analysis on your machine (external)
// Analysis.use(myAnalysis, { token: "YOUR-TOKEN" });
