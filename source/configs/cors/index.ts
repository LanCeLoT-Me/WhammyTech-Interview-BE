const whiteList: string[] = [
  "http://localhost:3000",
  "https://whammytech-interview.web.app",
  "https://whammytech-interview.firebaseapp.com",
];

export const corsOptions = {
  origin: function (origin: any, callback: any) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
