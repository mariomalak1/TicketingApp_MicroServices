import { Router} from 'express';

import { signup } from '../controllers/sign-up.controller';

const router = Router();

router.use('/auth/signup', signup);

export default router;