const MAX_ENDPOINT_CALLS = 5;
const endpointCalls = new WeakMap();

export function queryAPI(endpoint) {
  if (!endpointCalls.has(endpoint)) {
    endpointCalls.set(endpoint, 0);
  }

  const calls = endpointCalls.get(endpoint) + 1;
  endpointCalls.set(endpoint, calls);

  if (calls >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
