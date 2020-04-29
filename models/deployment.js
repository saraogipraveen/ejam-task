const mongoose = require('mongoose');

let deploymentSchema = mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  templateName: {
    type: String,
    required: true
  },
  version: {
    type: Array,
    required: true
  },
  deployedAt: {
    type: Date,
    default: Date.now
  },
})

module.exports = mongoose.model('Deployment', deploymentSchema);