const SERVER_SECRET = 'secretoQueSoloConoceElServer';
const passport = require('passport');
const passportJwt = require('passport-jwt');
const JWTStrategy = passportJwt.Strategy;
const ExtractJWT = passportJwt.ExtractJwt;

/* Metodo el cual realizamos la validación de un usuario logeado.
 */
passport.use(
    new JWTStrategy(
        {
            jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
            secretOrKey : SERVER_SECRET,
        },
        (jwtPayload, done) =>{
            const user = jwtPayload;
            return done(null, user);
        }
        
    )
);

const jwtValidMDW = passport.authenticate('jwt', {session: false})

/* Metodo el cual realizamos la validación del administrador logeado.
 */
const userIsAdminMDW = (req, res, next) => {
    return passport.authenticate(
        'jwt',
        { session: false },
        (err, user, info) => {
            if(err){
                console.err(err);
                return next(err);
            }
            if(user.role === 'admin'){
                req.user = user;
                return next();
            }
            res.status(401).json({
                error: 'User not Admin'});
        })(req, res, next);
};

module.exports = {userIsAdminMDW,SERVER_SECRET, jwtValidMDW};