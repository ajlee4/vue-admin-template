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
  export function addRecord(data) {
    return request({
      url: `http://ih.yourstartup.by/api/records/add-record`,
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

  export function getCategoryRecords(data) {
    return request({
      url: `http://ih.yourstartup.by/api/records/all-records`,
      method: "get",
      params: data
    });
  }


  export function deleteRecord(id) {
    return request({
      url: `http://ih.yourstartup.by/api/record-deps/${id}/destroy-single-deps`,
      method: "delete"
    });
  }
 












 