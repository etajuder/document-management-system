import UserController from '../controllers/UserController';

const userRouter = (router) => {
  router.route('/users')
  .get(UserController.index)
}

export default userRouter;
