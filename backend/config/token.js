import jsonwebtoken from "jsonwebtoken";

const genToken = async (userId) => {
    try {
        const token = await jsonwebtoken.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
        console.log("Token generated successfully", token);
        return token;
    } catch (error) {
        console.log("Token generation failed", error);
        throw error;
    }
};

export default genToken;
