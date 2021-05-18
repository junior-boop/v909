import {locations} from '../../../components/db.json'


export default ({query : {id}}, res) => {
   const filtered = locations.filter((cars) => cars.id === id)

   if (filtered.length > 0){
       res.status(200).json(filtered[0])
   } else {
       res.status(404).json({
           message : `La voiture d'id ${id}, est introuvable !!!`
       })
   }
}