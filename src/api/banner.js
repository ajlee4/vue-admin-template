import request from "@/utils/request";

export function fetchBannerList(query) {
  return request({
    url: "http://ih.yourstartup.by/api/banners",
    method: "get",
    params: query
  });
}

export function deleteBanner(id) {
  return request({
    url: `http://ih.yourstartup.by/api/banners/${id}/destroy`,
    method: "delete",
    params: { id }
  });
}
export function createBanner(data) {
    return request({
      url: "http://ih.yourstartup.by/api/banners/store",
      method: "post",
      data
    });
  }

export function fetchBanner(id) {
    return request({
      url: `http://ih.yourstartup.by/api/banners/${id}/edit`,
      method: "get"
    });
  }



  export function updateBanner(id, data) {
    return request({
      url: `http://ih.yourstartup.by/api/banners/${id}/update`,
      method: "put",
      data
    });
  }
