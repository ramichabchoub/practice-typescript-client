type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

const returnCorrectRequest = (
  method: Method,
  data: unknown,
): RequestInit => {
  if (method === 'GET') {
    return {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }
  return {
    method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  };
};

export const sendApiRequest = async <T>(
  url: string,
  method: Method,
  data: unknown = {},
): Promise<T> => {
  const response = await fetch(
    url,
    returnCorrectRequest(method, data),
  );
  if (!response.ok) {
    const message = `An error occured while sending the request: ${response.status}.`;
    throw new Error(message);
  }
  // ! WARNING
  // await pause(3000);
  return (await response.json()) as Promise<T>;
};

// ! ONLY USED FOR TESTING
const pause = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
