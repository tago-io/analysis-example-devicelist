/*
 ** Analysis Example
 ** Get Device List
 **
 ** This analysis retrieves the device list of your account and print to the console.
 **
 ** How to use:
 ** To analysis works, you need to add a new policy in your account. Steps to add a new policy:
 **  1 - Click in the button "Add Policy" in this url: https://admin.tago.io/am;
 **  2 - In the Target select Analysis with the field Id and choose your analysis in the list;
 **  3 - Click in "Click to add a new permission" and select "Device" with rules "Access" with the field "Any";
 **  4 - To finish click on save;
 */

const { Analysis, Resources } = require("@tago-io/sdk");

async function listDevicesByTag(context) {

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

module.exports = new Analysis(listDevicesByTag);

// To run analysis on your machine (external)
// module.exports = new Analysis(listDevicesByTag, { token: "YOUR-TOKEN" });
