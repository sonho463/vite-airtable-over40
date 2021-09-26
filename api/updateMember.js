const { table } = require('./utils/airtable');
const formattedReturn = require('./utils/formattedReturn');

exports.handler = async (event) => {
  if (event.httpMethod !== 'PATCH') {
    return formattedReturn(405, 'Bad request');
  }
  const { id, fields } = JSON.parse(event.body);
  try {
    const updatedMember = await table.update([{ id, fields }]);
    return formattedReturn(200, updatedMember);
  } catch (err) {
    console.error(err);
    return formattedReturn(err.statusCode, err.message);
  }
};