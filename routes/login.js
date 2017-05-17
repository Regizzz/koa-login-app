
const passport = require('koa-passport');

exports.post = async function(ctx, next) {

  await passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/',
    failureFlash: true
  })(ctx, next);

};
