const CookieTest = () => {
  const login = async () => {
    await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/auth/login', {
      method: 'POST',
      credentials: 'include',
    })
  }
  const confirm = async () => {
    const result = await fetch(
      process.env.NEXT_PUBLIC_API_URL + '/api/auth/logged-in-user',
      {
        method: 'GET',
        credentials: 'include',
      }
    )
    console.log(result)
  }
  return (
    <div>
      <button onClick={login}>login dummy</button>
      <button onClick={confirm}>confirm login</button>
    </div>
  )
}

export default CookieTest
