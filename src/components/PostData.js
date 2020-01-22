export function PostData(type, userData) {
  let BaseURL = "http://192.168.9.225:3000/api/";
  return new Promise((resolve, reject) => {
    console.log(userData);
    fetch(BaseURL + type, {
      method: "POST",
      body: JSON.stringify(userData)
    })
      .then(response => response.json())
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
}
