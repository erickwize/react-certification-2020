import { useState, useEffect } from 'react'

import { random } from '../fns'

const API_URL = 'http://fortunecookieapi.herokuapp.com/v1/fortunes?limit=10'

function useFortune() {
  const [fortune, setFortune] = useState(null)

  useEffect(() => {
    async function findMyFortune() {
      await fetch(API_URL, {
        mode: 'no-cors',
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          if (response.ok) {
            const fortuneCookies = response.json()
            const randomIndex = random(fortuneCookies.length)
            const currentFortune = fortuneCookies[randomIndex]

            setFortune(currentFortune.message)
          }
        })
        .catch((error) => {
          console.log('Bad fortune: ', error)
        })
    }

    findMyFortune()
    console.clear()
  }, [])

  return { fortune }
}

export { useFortune }
