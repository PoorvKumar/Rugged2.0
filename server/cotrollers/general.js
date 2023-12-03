import User from '../models/User.js'
import Transaction from '../models/Transaction.js'

export const getUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findById(id)
        res.status(200).json(user)
    }
    catch (e) {
        res.status(404).json({message:e.message})
    }
}
export const getDashboardStats = async (req, res) => {
    try {
        //   Recent Transactions
        const transactions = await Transaction.find().limit(50).sort({ createdOn: -1 })

      res.status(200).json(transactions);
    } catch (e) {
      res.status(404).json({ message: e.message });
    }
}