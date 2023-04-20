import { fetchUtils } from "react-admin";

const apiUrl = "https://api.spaceflightnewsapi.net/v3/";

const dataProvider = {
  getList: (resource: string, params: any) => {
    const url = `${apiUrl}${resource}`;
    const options = {
      method: "GET",
    };
    return fetchUtils.fetchJson(url, options).then(({ json }) => ({
      data: json,
      total: json.length,
    }));
  },
  getOne: (resource: string, params: any) => {
    const url = `${apiUrl}${resource}/${params.id}`;
    const options = {
      method: "GET",
    };
    return fetchUtils.fetchJson(url, options).then(({ json }) => ({
      data: json,
    }));
  },
  getMany: (resource: string, params: any) => {
    const query = {
      ids: params.ids,
    };
    const url = `${apiUrl}${resource}?${JSON.stringify(query)}`;
    const options = {
      method: "GET",
    };
    return fetchUtils.fetchJson(url, options).then(({ json }) => ({
      data: json,
    }));
  },
  getManyReference: (resource: string, params: any) => {
    const query = {
      ...params.filter,
      [params.target]: params.id,
    };
    const url = `${apiUrl}${resource}?${JSON.stringify(query)}`;
    const options = {
      method: "GET",
    };
    return fetchUtils.fetchJson(url, options).then(({ json }) => ({
      data: json,
      total: json.length,
    }));
  },
  update: (resource: string, params: any) => {
    const url = `${apiUrl}${resource}/${params.id}`;
    const options = {
      method: "PUT",
      body: JSON.stringify(params.data),
    };
    return fetchUtils.fetchJson(url, options).then(({ json }) => ({
      data: json,
    }));
  },
  updateMany: (resource: string, params: any) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}${resource}?${JSON.stringify(query)}`;
    const options = {
      method: "PUT",
      body: JSON.stringify(params.data),
    };
    return fetchUtils.fetchJson(url, options).then(({ json }) => ({
      data: json,
    }));
  },
  create: (resource: string, params: any) => {
    const url = `${apiUrl}${resource}`;
    const options = {
      method: "POST",
      body: JSON.stringify(params.data),
    };
    return fetchUtils.fetchJson(url, options).then(({ json }) => ({
      data: json,
    }));
  },
  delete: (resource: string, params: any) => {
    const url = `${apiUrl}${resource}/${params.id}`;
    const options = {
      method: "DELETE",
    };
    return fetchUtils.fetchJson(url, options).then(({ json }) => ({
      data: json,
    }));
  },
  deleteMany: (resource: string, params: any) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}${resource}?${JSON.stringify(query)}`;
    const options = {
      method: "DELETE",
    };
    return fetchUtils.fetchJson(url, options).then(({ json }) => ({
      data: json,
    }));
  },
};

export default dataProvider;
