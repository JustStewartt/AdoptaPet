function count(req,res,next) {
    var categoria = req.params.id
    Solicitud.aggregate([
      {'$match': { 'idMascota': idMascota}}, 
      {'$count': 'total'}
    ]).then(r => {
      res.status(200).send(r)
    })
    .catch(next)
  }