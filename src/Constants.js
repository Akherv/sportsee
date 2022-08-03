/* Setting the API url depending on the environment(development|production). */
const userId = 12; //karl
const userIdMock = 18; //Cecilia

const prod = {
  url: {
    REACT_APP_API_URL_USER: `http://localhost:3000/user/${userId}`,
    REACT_APP_API_URL_ACTIVITY: `http://localhost:3000/user/${userId}/activity`,
    REACT_APP_API_URL_AVERAGESESSION: `http://localhost:3000/user/${userId}/average-sessions`,
    REACT_APP_API_URL_PERFORMANCE: `http://localhost:3000/user/${userId}/performance`,
  },
};

const dev = {
  url: {
    REACT_APP_API_URL_USER: `./datas/user/${userIdMock}/user.json`,
    REACT_APP_API_URL_ACTIVITY: `./datas/user/${userIdMock}/activity.json`,
    REACT_APP_API_URL_AVERAGESESSION: `./datas/user/${userIdMock}/average-sessions.json`,
    REACT_APP_API_URL_PERFORMANCE: `./datas/user/${userIdMock}/performance.json`,
  },
};

console.log(process.env.REACT_APP_MODE);

export const config = process.env.REACT_APP_MODE === "development" ? dev : prod;
