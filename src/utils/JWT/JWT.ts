import jwt from "jsonwebtoken";
export default abstract class JWT {
  static decode(token: string) {
    let userData = jwt.verify(token.split(" ")[1], process.env.JWTSECRET!) as {
      user_id: string;
      first_name: string;
      last_name: string;
      email: string;
      is_active: boolean;
      account_confirmed: boolean;
    };

    return userData;
  }
}
