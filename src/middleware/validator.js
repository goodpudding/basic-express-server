'use strict';

function validator(request, response, next) {
  let name = request.query.name;
  if (name){
    next();
  } else {
    throw new Error ('You need to input a name!');
  }
}

module.exports = validator;

/*'use strict';
const validator = (req, res, next) => {
  //   console.log("validator");    
  if (req.params.name){        
    next();
      } else {        
        throw new Error ('wrong name!');    }};
module.exports = {  validator,};*/