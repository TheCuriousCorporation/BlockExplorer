
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index',{
  	title: 'Blockbit',
  	phrase: 'Find any transaction for any Bitcoin on the Blockchain'
  });
};