import express from 'express'
import { getSuccessResponse } from '../../utils/response'
export const router = express.Router()

router.get('/', (_, res) => {
  return getSuccessResponse(res, { message: 'Hello World' }, undefined)
})
