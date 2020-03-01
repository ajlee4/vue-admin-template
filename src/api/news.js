import request from "@/utils/request";

export function fetchNewsList(query) {
  return request({
    url: "http://sandbox.alkonosthim.ru/ih/api/news/",
    method: "get",
    params: query
  });
}
export function fetchNews(id) {
  return request({
    url: `http://sandbox.alkonosthim.ru/ih/api/news/${id}/edit`,
    method: "get"
  });
}


export function createNews(data) {
  return request({
    url: "http://sandbox.alkonosthim.ru/ih/api/news/store",
    method: "post",
    data
  });
}

export function deleteNews(id) {
  return request({
    url: `http://sandbox.alkonosthim.ru/ih/api/news/${id}/destroy`,
    method: "delete",
    params: { id }
  });
}

export function updateNews(id, data) {
  return request({
    url: `http://sandbox.alkonosthim.ru/ih/api/news/${id}/update`,
    method: "put",
    data
  });
}
