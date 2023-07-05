import jwt from 'jsonwebtoken';

const TOKEN_SECRET = process.env.JWT_SECRET || 'YOU_SHALL_NOT_PASS';

type TokenPayload = {
  username: string,
};

function generateToken(payload: TokenPayload): string {
  const token = jwt.sign(payload, TOKEN_SECRET);

  return token;
}

export default {
  generateToken,
};
