export class LoginData {
    public static readonly PAGE_URL = 'https://the-internet.herokuapp.com/login';
    public static readonly VALID_USERNAME = process.env.VALID_USERNAME || '';
    public static readonly VALID_PASSWORD = process.env.VALID_PASS || '';
    public static readonly INVALID_USERNAME = process.env.INVALID_USERNAME || '';
    public static readonly INVALID_PASSWORD = process.env.INVALID_PASS || '';

    static assertConfiguration() {
        const config = {
            VALID_USERNAME: this.VALID_USERNAME,
            VALID_PASSWORD: this.VALID_PASSWORD,
            INVALID_USERNAME: this.INVALID_USERNAME,
            INVALID_PASSWORD:  this.INVALID_PASSWORD
        };
        Object.entries(config).forEach(([key, value]) => {
            if (!value) throw new Error(`Environment variable ${key} is missing!`);
        });
    }
}