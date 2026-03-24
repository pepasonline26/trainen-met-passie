exports.handler = async function(event) {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      clientId: process.env.STRAVA_CLIENT_ID
    })
  };
};
