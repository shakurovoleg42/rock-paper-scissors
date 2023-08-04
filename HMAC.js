import { randomBytes, createHmac } from "crypto";

class KeyGenerator {
    static generateKey() {
        return randomBytes(32).toString("hex");
    }
};

class HMACCalculator {
    static calculateHMAC(key, data) {
        const hmac = createHmac("sha256", key);
        hmac.update(data);
        return hmac.digest("hex");
    }
};

export { KeyGenerator, HMACCalculator };