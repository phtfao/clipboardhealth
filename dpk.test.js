const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the partitionKey propertie of event if it's a string and less than MAX_PARTITION_KEY_LENGTH", () => {
    const event = { partitionKey: "teste" };
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("teste");
  });

  it("Returns a stringify of partitionKey propertie if it's NOT a string and less than MAX_PARTITION_KEY_LENGTH", () => {
    const event = { partitionKey: 123456 };
    const stringifiedpartitionKey = JSON.stringify(event.partitionKey);
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe(stringifiedpartitionKey);
  });

  it("Returns a hash of a stringify of event if it has not a partitionKey propertie", () => {
    const event = {data:"teste" };
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey.length).toBe(128);

  });

  it("Returns a hash if size of partitionKey propertie is greater than MAX_PARTITION_KEY_LENGTH", () => {
    let partitionKey = "";
    for (let i = 1; i <= 300; i++) {
      partitionKey += "a";
    }
    const event = { partitionKey: partitionKey };
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey.length).toBe(128);
  });
});