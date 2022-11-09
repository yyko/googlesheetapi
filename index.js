//credentials.json corresponds to service account
let {google} = require('googleapis');
let privatekey = require('./credentials.json');

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
async function getAuthToken() {
  const auth = new google.auth.GoogleAuth({
    keyFile:'./credentials.json',
    scopes: SCOPES
  });
  const authToken = await auth.getClient();
  return authToken;
}

const myId = 'YOUR-SPREADSHEET-ID';

const main = async () => {
  const auth = await getAuthToken()
  const client = google.sheets({ version: "v4", "auth": auth });
  const data = await client.spreadsheets.get({ spreadsheetId: myId});
  console.log(data.data)
}
main()
