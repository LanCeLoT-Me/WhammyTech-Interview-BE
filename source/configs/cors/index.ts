const whiteList: string[] = ["http://localhost:3000"];

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
