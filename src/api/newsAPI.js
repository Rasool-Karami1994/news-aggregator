import axios from "axios";

//Gauardian Api
const gauardianApiKey = "f1452d9f-af00-477c-a2cf-01c67b866673";
const gauardianBaseUrl = "https://content.guardianapis.com";
export function getGauardianNews(options = {}) {
  let list = options?.payload;
  const makedOptions = list?.reduce((acc, cur) => {
    acc[cur.key] = cur.selectedValue;
    return acc;
  }, {});

  const { category, date, q } = makedOptions;
  const searchValues = {
    section: category ?? null,
    q: q ?? null,
  };
  let params = {};
  for (const [key, value] of Object.entries(searchValues)) {
    if (
      (Array.isArray(value) && value.length) ||
      (!Array.isArray(value) && value)
    )
      params[`${key}`] = value;
  }
  const paramsHandler = () => {
    if (date === "newest") {
      params["from-date"] = new Date().toISOString().split("T")[0];
    }
    if (date === "oldest") {
      let dateT = new Date();
      dateT
        .setDate(date.getDate() - 1)
        .toISOString()
        .split("T")[0];
      params["to-date"] = dateT;
    }
  };
  paramsHandler();
  const queryString = new URLSearchParams(params).toString();
  const url = `${gauardianBaseUrl}/search?${queryString}&api-key=${gauardianApiKey}`;
  return axios.get(url, {
    headers: { "x-Api-key": gauardianApiKey },
  });
}

//News Api
const newsApiKey = "ed5e7160e76144a991e84b5d57a6cbd3";
const newApiBaseUrl = "https://newsapi.org/v2";
let dateTime = new Date();

export function getNewsApiNews(options = {}) {
  let list = options?.payload;
  const makedOptions = list?.reduce((acc, cur) => {
    acc[cur.key] = cur.selectedValue;
    return acc;
  }, {});

  const { category, date, source, q } = makedOptions;
  const searchValues = {
    q: q ? q : category ? category : null,
    pageSize: 10,
    sources: source ?? null,
    from: date === "newest" ? new Date().toISOString().split("T")[0] : null,
    to:
      date === "oldest"
        ? dateTime
            .setDate(dateTime.getDate() - 1)
            .toISOString()
            .split("T")[0]
        : null,
  };
  let params = {};
  for (const [key, value] of Object.entries(searchValues)) {
    if (
      (Array.isArray(value) && value.length) ||
      (!Array.isArray(value) && value)
    )
      params[`${key}`] = value;
  }

  const queryString = new URLSearchParams(params).toString();
  const url = `${newApiBaseUrl}/everything?${queryString}&apiKey=${newsApiKey}`;
  return axios.get(url, {
    headers: { "x-Api-key": newsApiKey },
  });
}

//Google Api

// const googleApiKey = "e0aba3ed416fb00e9760a9f25100ba46";
// const googleApiBaseUrl = "https://gnews.io/api/v4";
// export function getGoogleApiNews(options = {}) {
//   const { category, newest, oldest, q } = options;
//   const searchValues = {
//     q: q ?? null,
//     category: category ?? null,
//     pageSize: 10,
//     // sources: source ?? null,
//     from: newest ? new Date().toISOString() : null,
//     to: oldest ? date.setDate(date.getDate() - 1).toISOString() : null,
//   };
//   let params = {};
//   for (const [key, value] of Object.entries(searchValues)) {
//     if (
//       (Array.isArray(value) && value.length) ||
//       (!Array.isArray(value) && value)
//     )
//       params[`${key}`] = value;
//   }

//   const queryString = new URLSearchParams(params).toString();
//   const url = `${googleApiBaseUrl}/search?${queryString}&apiKey=${googleApiKey}`;
//   return axios.get(
//     url
//     //   , {
//     //   headers: { "x-Api-key": googleApiKey },
//     // }
//   );
// }
