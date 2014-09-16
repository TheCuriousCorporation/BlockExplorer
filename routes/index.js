
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index',{
  	title: 'Blockbit',
  	phrase: 'Find any Bitcoin transaction on the Blockchain'
  });
};