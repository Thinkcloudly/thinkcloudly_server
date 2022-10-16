const { fetchGoogleSheetData } = require("../services/GoogleSheetApis");

const fetchStudentDataFromGoogleSheetController = async (req, res) => {
  try {
    // const spreadsheetId = '1Z1YOITDrdFO9GsyCIKbo41tMwzM1rUOxJ9HuTJ-DRAE';
    // const range = "Sheet1";
    const { spreadsheetId, range } = req.query;
    const result = await fetchGoogleSheetData(spreadsheetId, range);
    res.status(200).json(result.values);
  } catch (e) {
    res.status(500).json({ e });
  }
};

module.exports = fetchStudentDataFromGoogleSheetController;
