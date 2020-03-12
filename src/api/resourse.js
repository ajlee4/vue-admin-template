import request from "@/utils/request";

export function fetchResourcesList(query) {
  return request({
    url: "http://sandbox.alkonosthim.ru/ih/api/resources/",
    method: "get",
    params: query
  });
}

export function fetchResourse(id) {
  return request({
    url: `http://sandbox.alkonosthim.ru/ih/api/resources/${id}/edit`,
    method: "get"
  });
}


export function createResourse(data) {
  return request({
    url: "http://sandbox.alkonosthim.ru/ih/api/resources/store",
    method: "post",
    data
  });
}


export function updateResourse(id, data) {
  return request({
    url: `http://sandbox.alkonosthim.ru/ih/api/resources/${id}/update`,
    method: "put",
    data
  });
}
