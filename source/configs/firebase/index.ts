import admin from "firebase-admin";
import { Auth } from "firebase-admin/lib/auth/auth";
import serviceAccount from "./whammytech-interview-firebase-admin-service-account.json";

const firebaseServiceAccount = serviceAccount as admin.ServiceAccount;

admin.initializeApp({
  credential: admin.credential.cert(firebaseServiceAccount),
});

const firebaseAdminAuthentication: Auth = admin.auth();

export default firebaseAdminAuthentication;
