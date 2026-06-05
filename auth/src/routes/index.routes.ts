import { Router} from 'express';

import validate from '../middlewares/validation.middleware';
import { signup } from '../controllers/sign-up.controller';
import { signin } from '../controllers/sign-in.controller';
import { authSchemas } from '../utils/validators';

const router = Router();

router.post('/sign-in/', validate(authSchemas.signinSchema), signin);
router.post('/sign-up/', validate(authSchemas.signupSchema), signup);

export default router;
