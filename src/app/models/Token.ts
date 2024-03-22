export interface Token {
    token: string;
    issuedAt: Date;
    expiresAt: Date;
}

export interface AuthToken {
    token: Token;
    refreshToken: Token;
}
