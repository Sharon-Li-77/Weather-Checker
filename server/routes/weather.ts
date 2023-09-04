import express from 'express'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    res.json('Welcome to weather check!')
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).send((err as Error).message)
    } else {
      res.status(500).send('Something went wrong!')
    }
  }
})

export default router
