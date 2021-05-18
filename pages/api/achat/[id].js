import data from '../../../components/db.json'

let achat = data.achat

export default ({query : {id}}, res) => {
   const filtered = achat.filter((cars) => cars.id === id)

   if (filtered.length > 0){
       res.status(200).json(filtered[0])
   } else {
       res.status(404).json({
           message : `La voiture d'id ${id}, est introuvable !!!`
       })
   }
}