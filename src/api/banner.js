import request from "@/utils/request";

export function fetchBannerList(query) {
  return request({
    url: "/api/banners",
    method: "get",
    params: query
  });
}

export function deleteBanner(id) {
  return request({
    url: `/api/banners/${id}/destroy`,
    method: "delete",
    params: { id }
  });
}
export function createBanner(data) {
    return request({
      url: "/api/banners/store",
      method: "post",
      data
    });
  }

export function fetchBanner(id) {
    return request({
      url: `/api/banners/${id}/edit`,
      method: "get"
    });
  }



  export function updateBanner(id, data) {
    return request({
      url: `/api/banners/${id}/update`,
      method: "put",
      data
    });
  }
