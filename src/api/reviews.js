import request from "@/utils/request";

export function fetchReviewsList(query) {
  return request({
    url: "/api/reviews/",
    method: "get",
    params: query
  });
}

export function deleteReviews(id) {
  return request({
    url: `/api/reviews/${id}/destroy`,
    method: "delete",
    params: { id }
  });
}

export function fetchReviews(id) {
    return request({
      url: `/api/reviews/${id}/edit`,
      method: "get"
    });
  }

  export function updateReviews(id, data) {
    return request({
      url: `/api/reviews/${id}/update`,
      method: "put",
      data
    });
  }
  export function createReviews(data) {
    return request({
      url: "/api/reviews/store",
      method: "post",
      data
    });
  }