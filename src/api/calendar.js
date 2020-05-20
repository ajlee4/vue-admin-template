import request from "@/utils/request";

export function editUserInfo(id, data) {
    return request({
      url: `http://ih.yourstartup.by/api/records/${id}/update`,
      method: "put",
      data
    });
  }

  export function editRecord( data) {
    return request({
      url: `http://ih.yourstartup.by/api/record-deps/store-deps`,
      method: "post",
      data
    });
  }

  export function disableRecord(data) {
    return request({
      url: `http://ih.yourstartup.by/api/record-deps/destroy-deps`,
      method: "get",
      params: data
    });
  }














 