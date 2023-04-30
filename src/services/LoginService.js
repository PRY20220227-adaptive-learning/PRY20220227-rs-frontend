export async function authenticateUser(body) {
  try {
    const response = await fetch(process.env.REACT_APP_URL + '/users/login', {
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

