"use client"

export default function Error({error, reset}) {
  return (
    <div>
        Page not loading, error message: {error.message}
        <button onClick={() => reset()}>Reload</button>
    </div>
  )
}
