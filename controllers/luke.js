const axios = require('axios');

exports.lukeController = async (_, res) => {
  try {
    const result = await axios.get('https://swapi.dev/api/people/1');
    res.json(result.data);
  } catch (error) {
    res.json({ message: error });
  }
};
