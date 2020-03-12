import request from "@/utils/request";

export function fetchReviewsList(query) {
  return request({
    url: "http://sandbox.alkonosthim.ru/ih/api/reviews/",
    method: "get",
    params: query
  });
}

export function deleteReviews(id) {
  return request({
    url: `http://sandbox.alkonosthim.ru/ih/api/reviews/${id}/destroy`,
    method: "delete",
    params: { id }
  });
}

export function fetchReviews(id) {
    return request({
      url: `http://sandbox.alkonosthim.ru/ih/api/reviews/${id}/edit`,
      method: "get"
    });
  }

  export function updateReviews(id, data) {
    return request({
      url: `http://sandbox.alkonosthim.ru/ih/api/reviews/${id}/update`,
      method: "put",
      data
    });
  }
  