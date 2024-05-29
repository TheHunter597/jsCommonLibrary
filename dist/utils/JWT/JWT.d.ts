export default abstract class JWT {
    static decode(token: string): {
        user_id: string;
        first_name: string;
        last_name: string;
        email: string;
        is_active: boolean;
        account_confirmed: boolean;
    };
}
