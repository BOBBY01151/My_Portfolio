import { useState, useEffect, useCallback } from 'react'
import axiosInstance from '../lib/axiosInstance'

export const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await axiosInstance.get(url, options)
      setData(response.data.data)
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred')
    } finally {
      setLoading(false)
    }
  }, [url, options])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const refetch = useCallback(() => {
    fetchData()
  }, [fetchData])

  return { data, loading, error, refetch }
}

export const useMutation = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const mutate = useCallback(async (mutationFn) => {
    try {
      setLoading(true)
      setError(null)
      const result = await mutationFn()
      return { success: true, data: result.data }
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'An error occurred'
      setError(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      setLoading(false)
    }
  }, [])

  return { mutate, loading, error }
}
