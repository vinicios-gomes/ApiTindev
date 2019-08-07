const Dev = require("../models/Dev");
module.exports = {
  async store(req, res, params) {
    const { user } = req.headers;
    const { devId } = req.params;

    // console.log(req.headers.user);

    const loggedDev = await Dev.findById(user);
    const targetDev = await Dev.findById(devId);

    if (!targetDev) {
      return res.status(400).json({ error: "Dev not exists " });
    }

    if (targetDev.likes.includes(user)) {
      console.log("Deu math");
    }

    loggedDev.likes.push(targetDev._id);

    await loggedDev.save();

    return res.json(loggedDev);
  }
};
