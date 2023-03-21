export default class LoginService {
  async authenticateUser(body) {
    try {
      const response = await fetch('http://localhost:9090/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async getUserRecomendations() {
    try {
      const response = await fetch('http://localhost:9090/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}

export const createReceipt = async (body) => {
  await fetch(process.env.REACT_APP_BASE_URL + `Receipts`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => {
      console.log(response)
    })
    .catch((err) => {
      console.log(err.message);
    });
};

