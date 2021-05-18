import {locations} from '../../../components/db.json'

export default (req, res) => {
   return res.status(200).json(locations)
}