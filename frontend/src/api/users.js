// User specific API calls:
import { apiRequest } from "./client";
export function createUser(payload) {
    return apiRequest('/create-user', {
        method: "POST",
        body: JSON.stringify(payload)
    });
}
