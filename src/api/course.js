import request from "@/utils/request";

export function fetchCourseList(query) {
  return request({
    url: "http://sandbox.alkonosthim.ru/ih/api/courses/category/",
    method: "get",
    params: query
  });
}

export function fetchSubCourseList(query) {
  return request({
    url: "http://sandbox.alkonosthim.ru/ih/api/courses/sub-category/",
    method: "get",
    params: query
  });
}

export function fetchCourse(id) {
  return request({
    url: `http://sandbox.alkonosthim.ru/ih/api/courses/category/${id}/edit`,
    method: "get"
  });
}

export function fetchSubCourse(id) {
  return request({
    url: `http://sandbox.alkonosthim.ru/ih/api/courses/sub-category/${id}/edit`,
    method: "get"
  });
}

export function addCourse(data) {
  return request({
    url: "http://sandbox.alkonosthim.ru/ih/api/courses/category/store",
    method: "post",
    data
  });
}
export function addSubCourse(data) {
  return request({
    url: "http://sandbox.alkonosthim.ru/ih/api/courses/sub-category/store",
    method: "post",
    data
  });
}

export function deleteCourse(id) {
  return request({
    url: `http://sandbox.alkonosthim.ru/ih/api/courses/category/${id}/destroy`,
    method: "delete"
  });
}

export function deleteSubCourse(id) {
  return request({
    url: `http://sandbox.alkonosthim.ru/ih/api/courses/sub-category/${id}/destroy`,
    method: "delete"
  });
}

export function editCourse(id, data) {
  return request({
    url: `http://sandbox.alkonosthim.ru/ih/api/courses/category/${id}/update`,
    method: "put",
    data
  });
}

export function editSubCourse(id, data) {
  return request({
    url: `http://sandbox.alkonosthim.ru/ih/api/courses/sub-category/${id}/update`,
    method: "put",
    data
  });
}
