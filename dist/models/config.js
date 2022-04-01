"use strict";
const mongoose_1 = require("mongoose");
// TODO: Ranks might be required
const configSchema = new mongoose_1.Schema({
    leaders: {
        type: Number,
        required: false,
    },
    officers: {
        type: Number,
        required: false,
    },
    giveawayChannel: {
        type: String,
        required: false,
    },
    missionsChannel: {
        type: String,
        required: false,
    },
    starboardChannel: {
        type: String,
        required: false,
    },
    giveawayRole: {
        type: Number,
        required: false,
    },
});
module.exports = configSchema;
