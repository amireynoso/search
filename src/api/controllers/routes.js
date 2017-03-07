module.exports = class RoutesController {
    static search (req, res) {
        res.status(200).json(res.data);
    }

    static item (req, res) {
        res.status(200).json(res.data);
    }
};