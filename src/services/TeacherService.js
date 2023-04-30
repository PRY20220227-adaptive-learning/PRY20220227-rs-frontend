export async function getStudentsByclass(class_code) {
  try {
    const response = await fetch(process.env.REACT_APP_URL + `/users/students/${class_code}`, {
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