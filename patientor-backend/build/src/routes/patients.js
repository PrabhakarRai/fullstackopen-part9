"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const patientService_1 = __importDefault(require("../services/patientService"));
const utils_1 = require("../utils");
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    res.json(patientService_1.default.getEntriesNonSensitive());
});
router.post('/', (req, res) => {
    try {
        const data = utils_1.toNewPatientEntry(req.body);
        const addedPatient = patientService_1.default.addEntry(data);
        res.json(addedPatient);
    }
    catch (e) {
        console.log(e.message);
        res.status(400).send(e.message);
    }
});
exports.default = router;
