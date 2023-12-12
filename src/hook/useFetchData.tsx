import { useState, useEffect } from 'react'

type FetchDataReturnType<T> = {
  data: T | null
  loading: boolean
  error: string | null
}

export function useFetchData<T>(url: string): FetchDataReturnType<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch(url)
        if (response.status === 404) throw new Error
        if (response.status === 403) throw new Error
        const jsonData = await response.json()
        setData(jsonData)
      } catch (e) {
        setError('Error fetching data')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { data, loading, error }
}
