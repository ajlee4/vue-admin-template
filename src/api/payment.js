import request from "@/utils/request";

export function fetchPaymentList(query) {
  return request({
    url: "/api/payments",
    method: "get",
    params: query
  });
}

export function deletePaymentInfo(id) {
  return request({
    url: `/api/payments/${id}/destroy`,
    method: "delete",
    params: { id }
  });
}
export function createPayment(data) {
    return request({
      url: "/api/payments/store",
      method: "post",
      data
    });
  }

export function fetchPayment(id) {
    return request({
      url: `/api/payments/${id}/edit`,
      method: "get"
    });
  }




  export function updatePayment(id, data) {
    return request({
      url: `/api/payments/${id}/update`,
      method: "put",
      data
    });
  }
