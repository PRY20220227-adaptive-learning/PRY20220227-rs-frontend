export async function getRecommendations(user_id, body) {
  try {
    const response = await fetch(process.env.REACT_APP_URL + `/predictions/predict/student/${user_id}`, {
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

export async function getRecommendationsHistoryById(user_id) {
  try {
    const response = await fetch(process.env.REACT_APP_URL + `/predictions/history/user/${user_id}`, {
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