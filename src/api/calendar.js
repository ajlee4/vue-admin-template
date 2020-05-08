import request from "@/utils/request";

export function editUserInfo(id, data) {
    return request({
      url: `http://sandbox.alkonosthim.ru/ih/api/records/${id}/update`,
      method: "put",
      data
    });
  }