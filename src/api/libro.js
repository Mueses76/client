import { basePath, apiVersion } from "./config";

export function getLibrosApi() {
  const url = `${basePath}/${apiVersion}/get-libros`;

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function getLibroDataUdemyApi(id) {
  const baseUrl = `https://www.udemy.com/api-2.0/libros/${id}`;  //revisar Libros
  const librosParams = `?fields[libro]=title,headline,url,price,image_480x270`;  //revisar libros
  const url = baseUrl + librosParams;

  return fetch(url)
    .then(async (response) => {
      return { code: response.status, data: await response.json() };
   })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function deleteLibroApi(token, id) {
  const url = `${basePath}/${apiVersion}/delete-libro/${id}`;

  const params = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function addLibroApi(token, libro) {
  const url = `${basePath}/${apiVersion}/add-libro`;

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    },
    body: JSON.stringify(libro)
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function updateLibroApi(token, id, data) {
  const url = `${basePath}/${apiVersion}/update-libro/${id}`;

  const params = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    },
    body: JSON.stringify(data)
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}
