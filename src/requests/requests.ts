export default class HTTPTransport {
  private baseURL: string;

  constructor() {
    this.baseURL = "https://api.green-api.com/";
  }

  post = (url: string, body: string, headers?: Record<string, string>) => {
    console.log(body);
    return this.request(`${this.baseURL}${url}`, "POST", body, headers);
  };
  get = (url: string) => {
    return this.request(`${this.baseURL}${url}`);
  };

  private request = async (
    url: string,
    method: string = "GET",
    body: any = null,
    headers: Record<string, string> = { "Content-Type": "application/json" }
  ) => {
    try {
      const response = await fetch(url, {
        method,
        body,
        headers,
      });

      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
}
