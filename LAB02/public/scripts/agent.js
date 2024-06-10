const getData = async () => {
  fetch("https://localhost:3000/Products/GetAllProducts").then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  });
};
