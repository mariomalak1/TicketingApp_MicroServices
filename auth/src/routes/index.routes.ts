import { Router} from 'express';

import validate from '../middlewares/validation.middleware';
import { signup } from '../controllers/sign-up.controller';
import { signupSchema } from '../utils/validators';

const router = Router();

router.post('/signup', validate(signupSchema), signup);

export default router;
