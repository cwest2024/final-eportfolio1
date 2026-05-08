import { useEffect, useState } from 'react'

function ApiCard() {
  // Holds the API data loaded from /public/data/apod.json.
  const [apod, setApod] = useState(null)

  // Tracks loading state so the user sees feedback while data loads.
  const [loading, setLoading] = useState(true)

  // Tracks any errors so the page does not crash if the data is missing.
  const [error, setError] = useState('')

  useEffect(() => {
    // Async function to load the API data file created by Node.js.
    async function loadApodData() {
      try {
        // Fetches the saved API file from the public folder.
        const response = await fetch('/data/apod.json')

        // If the response is not successful, throw an error.
        if (!response.ok) {
          throw new Error('Unable to load NASA API data.')
        }

        // Converts the response into a JavaScript object.
        const data = await response.json()

        // Saves that API object into state.
        setApod(data)
      } catch (err) {
        // Saves any readable error message.
        setError(err.message)
      } finally {
        // Stops the loading state.
        setLoading(false)
      }
    }

    // Run the function one time when the component loads.
    loadApodData()
  }, [])

  return (
    <section className="api-section" aria-labelledby="api-card-heading">
      <h2 id="api-card-heading" className="page-heading">Featured Inspiration</h2>

      {loading && <p>Loading NASA featured content...</p>}
      {error && <p className="error-text">{error}</p>}

      {!loading && !error && apod && (
        <article className="card api-card">
          <div className="api-card-content">
            <p className="api-label">NASA Astronomy Picture of the Day</p>
            <h3>{apod.title}</h3>
            <p className="api-date">{apod.date}</p>

            {apod.media_type === 'image' && (
              <img
                src={apod.url}
                alt={apod.title}
                className="api-image"
              />
            )}

            {apod.media_type === 'video' && (
              <p>
                This APOD entry is a video.
                {' '}
                <a href={apod.url} target="_blank" rel="noreferrer">
                  Watch it here
                </a>
              </p>
            )}

            <p>{apod.explanation}</p>
          </div>
        </article>
      )}
    </section>
  )
}

export default ApiCard