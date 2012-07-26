function validateNumericId(id) {
  return id != null && id !== undefined && id != '' && !isNaN(id);
}

function validateStringId(id) {
  return id != null && id !== undefined && id != '';
}

exports.validateNumericId = validateNumericId;
exports.validateStringId = validateStringId;
