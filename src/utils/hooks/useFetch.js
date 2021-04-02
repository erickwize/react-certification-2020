import { useEffect, useState } from 'react'

export const useFetch = (searchTarget) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}${searchTarget}`)
        const json = await response.json()
        setData(json.items)
      } catch (e) {
        setError(e)
      }
      setLoading(false)
    }
    getData()
  }, [searchTarget])

  return { data, error, isLoading }
}
