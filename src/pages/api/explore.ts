import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../_app'
import { Condition, ConditionTypeNumber, ConditionTypeString, FeaturesENUM } from '@/types/GlobalTypes'

export type ConditionsQuery = {
  conditions: Condition[]
}
type NextApiRequestWithPage = NextApiRequest & {
  query: ConditionsQuery
}

export default async function handler(
  req: NextApiRequestWithPage,
  res: NextApiResponse<any>
) {

  const conditions : Condition[] = req.body.conditions
  let baseRequest = supabase.from('products').select('*')

  if (!conditions || conditions.length == 0 ) {
    res.status(200).json({})
    return
  }

  conditions.forEach(condition => {
    const colName = FeaturesENUM[condition.feature.name]

    if (condition.feature.type == 0) {

      if (condition.selected == ConditionTypeString.CONTIENT) {
        baseRequest.ilike(colName.toLowerCase(), `%${condition.value}%`)
      } else {
        baseRequest.eq(colName.toLowerCase(), `${condition.value}`)
      }
    } else {

      if (condition.selected == ConditionTypeNumber.EGAL) {
        baseRequest.eq(colName.toLowerCase(), `${condition.value}`)
      } else if (condition.selected == ConditionTypeNumber.MOINS) {
        baseRequest.lt(colName.toLowerCase(), `${condition.value}`)
      } else {
        baseRequest.gt(colName.toLowerCase(), `${condition.value}`)
      }
    }
  })

  let { data, error } = await baseRequest.limit(10)
  
  res.status(200).json(data)
}
