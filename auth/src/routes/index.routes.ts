import { Router} from 'express';

import validate from '../middlewares/validation.middleware';
import authenticate from '../middlewares/authenticate.middleware';

import { signup, signin, currentUser, logout } from '../controllers/index.controller';
import { authSchemas } from '../utils/validators';

const router = Router();

router.post('/sign-up/', validate(authSchemas.signupSchema), signup);
router.post('/sign-in/', validate(authSchemas.signinSchema), signin);
router.get('/current-user/', authenticate, currentUser);
router.patch('/logout/', authenticate, logout);

export default router;
