import request from "@/utils/request";

export function fetchResourcesList(query) {
  return request({
    url: "http://ih.yourstartup.by/api/resources/localization",
    method: "get",
    params: query
  });
}

export function fetchResourseLocalization(id) {
  return request({
    url: `http://ih.yourstartup.by/api/resources/localization/${id}/edit`,
    method: "get"
  });
}


export function createResourse(data) {
  return request({
    url: "http://ih.yourstartup.by/api/resources/localization/store",
    method: "post",
    data
  });
}


export function updateResourse(id, data) {
  return request({
    url: `http://ih.yourstartup.by/api/resources/localization/${id}/update`,
    method: "put",
    data
  });
}