import { initializeApp } from "firebase/app";

export class CloudService {
  constructor() {
    this.config = {
      apiKey: process.env.API_KEY,
      authDomain: "vel-travel-54937.firebaseapp.com",
      projectId: "vel-travel-54937",
      storageBucket: "vel-travel-54937.appspot.com",
      messagingSenderId: "358255097842",
      appId: process.env.APP_ID,
    };

    this.app = initializeApp(this.config);
  }
}

export const cloudService = new CloudService();
