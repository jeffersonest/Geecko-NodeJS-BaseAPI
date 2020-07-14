const { STATUS_CODES } = require("http")
const { Status } = require("../helpers/StatusCode")

exports.Inspect = (err, req, res, next) => {
    switch (err.name) {
        case "ValidationError":
                let data = Status[4];
                data.body = err.details.body;
                return res.status(200).json(data);
        default:
            return res.status(500).json(err);

    }
}
