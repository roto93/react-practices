import { useState, useEffect } from 'react'

export const useFetch = (inputUrl) => {
    const [data, setData] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMount = true
        setLoading(true)
        fetch(inputUrl)
            .then(res => res.json())
            .then(res => {
                if (isMount) {
                    setData(res)
                    setError('')
                }
            })
            .catch((e) => {
                if (isMount) {
                    setError(e.error)
                    setData({})

                }
            })
            .finally(() => {
                isMount && setLoading(false)
            })
        return () => { isMount = false; }
    }, [inputUrl])
    return { data, error, loading }
}
