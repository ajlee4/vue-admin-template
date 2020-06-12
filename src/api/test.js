import request from "@/utils/request";

// CATEGORIES
export function fetchTestCategoryList(query) {
  return request({
    url: "/api/tests/categories",
    method: "get",
    params: query
  });
}
export function fetchCurrentTestCategory(id) {
  return request({
    url: `/api/tests/categories/${id}/edit`,
    method: "get"
  });
}
export function createTestCategory(data) {
  return request({
    url: "/api/tests/categories/store",
    method: "post",
    data
  });
}
export function deleteTestCategory(id) {
  return request({
    url: `/api/tests/categories/${id}/destroy`,
    method: "delete"
  });
}
export function updateTestCategory(id, data) {
  return request({
    url: `/api/tests/categories/${id}/update`,
    method: "put",
    data
  });
}

//

// LEVEL
export function fetchTestGradesList(query) {
  return request({
    url: "/api/tests/grades",
    method: "get",
    params: query
  });
}
export function fetchCurrentTestGrades(id) {
  return request({
    url: `/api/tests/grades/${id}/edit`,
    method: "get"
  });
}
export function createTestGrades(data) {
  return request({
    url: "/api/tests/grades/store",
    method: "post",
    data
  });
}
export function deleteTestGrades(id) {
  return request({
    url: `/api/tests/grades/${id}/destroy`,
    method: "delete"
  });
}
export function updateTestGrades(id, data) {
  return request({
    url: `/api/tests/grades/${id}/update`,
    method: "put",
    data
  });
}

//

// Question
export function fetchTestQuestion(query) {
    return request({
      url: "/api/tests/questions",
      method: "get",
      params: query
    });
  }
  export function fetchCurrentTestQuestion(id) {
    return request({
      url: `/api/tests/questions/${id}/edit`,
      method: "get"
    });
  }
  export function createTestQuestion(data) {
    return request({
      url: "/api/tests/questions/store",
      method: "post",
      data
    });
  }
  export function deleteTestQuestion(id) {
    return request({
      url: `/api/tests/questions/${id}/destroy`,
      method: "delete"
    });
  }
  export function updateTestQuestion(id, data) {
    return request({
      url: `/api/tests/questions/${id}/update`,
      method: "put",
      data
    });
  }
  export function fetchTestLevelList(query) {
    return request({
      url: "/api/tests/lists",
      method: "get",
      params: query
    });
  }
  //

  // ANSWER
  export function createTestAnswer(data) {
    return request({
      url: "/api/tests/answers/store",
      method: "post",
      data
    });
  }

  export function fetchTestAnswer(query) {
    return request({
      url: "/api/tests/answers",
      method: "get",
      params: query
    });
  }
  export function deleteTestAnswer(id) {
    return request({
      url: `/api/tests/answers/${id}/destroy`,
      method: "delete"
    });
  }
  export function fetchCurrentTestAnswer(id) {
    return request({
      url: `/api/tests/answers/${id}/edit`,
      method: "get"
    });
  }