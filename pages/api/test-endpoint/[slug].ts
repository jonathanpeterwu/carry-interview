import type { NextApiRequest, NextApiResponse } from 'next'
import { getAccountByType } from '../../../services/accounts'
import { AccountTypeEnum } from '../../../utils/enums'
import { AccountData } from '../../../utils/interfaces'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ data: AccountData | undefined }>
) {
  if (req.method === 'GET') {
    const { slug } = req.query
    console.log(slug)
    res.status(200).json({ data: {slug } })
  }
}
