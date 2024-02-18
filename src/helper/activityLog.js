import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../fireabse";

export default async function logActivity(
  activityType,
  resumeId,
  activityId,
  description,
  userId
) {
  try {
    const logActivityRef = doc(db, "meta", "activityLog");

    await updateDoc(logActivityRef, {
      activities: arrayUnion({
        timestamp: new Date(),
        activityType,
        resumeId,
        activityId,
        description,
        userId,
      }),
    });

    console.log("Activity logged successfully.");
  } catch (error) {
    console.error("Error logging activity:", error);
  }
}
