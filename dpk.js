const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate = TRIVIAL_PARTITION_KEY;

  if (event) {
    candidate = event.partitionKey || createHash(JSON.stringify(event));
    candidate = typeof candidate === "string" ? candidate : JSON.stringify(candidate);
    candidate = candidate.length > MAX_PARTITION_KEY_LENGTH ? createHash(candidate) : candidate;
  }

  return candidate;
};

createHash = (value) => {
  return crypto.createHash("sha3-512").update(value).digest("hex");
}