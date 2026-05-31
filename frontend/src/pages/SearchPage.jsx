import { useState } from 'react'
import axios from 'axios'

function SearchPage() {

  const [query, setQuery] = useState('')

  const [results, setResults] = useState([])

  const searchFarmer = async () => {

    try {

      const res = await axios.get(

        `https://farm-webapp-6ew5.onrender.com/search/${query}`

      )

      setResults(res.data)

    } catch (error) {

      console.log(error)

    }
  }

  return (

    <div style={{ padding: '20px' }}>

      <div
        style={{
          background: 'white',
          padding: '20px',
          borderRadius: '20px'
        }}
      >

        <h2>
          🔍 Search Farmer
        </h2>

        <div
          style={{
            display: 'flex',
            gap: '10px',
            marginTop: '20px'
          }}
        >

          <input

            type="text"

            placeholder="Search BP Number / Name / Village"

            value={query}

            onChange={(e) =>
              setQuery(e.target.value)
            }

            style={{

              flex: 1,

              padding: '14px',

              borderRadius: '12px',

              border: '1px solid #ccc'

            }}
          />

          <button

            onClick={searchFarmer}

            style={{

              padding: '14px 20px',

              borderRadius: '12px',

              border: 'none',

              background: '#1b4332',

              color: 'white',

              fontWeight: '700',

              cursor: 'pointer'

            }}
          >
            Search
          </button>

        </div>

        <div style={{ marginTop: '20px' }}>

          {
            results.map((farmer, index) => (

              <div
                key={index}
                style={{
                  background: '#f8faf9',
                  padding: '18px',
                  borderRadius: '16px',
                  marginBottom: '14px'
                }}
              >

                <h3>
                  {farmer.bp_number}
                </h3>

                <p>
                  {farmer.farmer_name}
                </p>

                <p>
                  📍 {farmer.village}
                </p>

                <p>
                  📅 Day: {farmer.day}
                </p>

                <p>
                  👥 Team: {farmer.team}
                </p>

              </div>

            ))
          }

        </div>

      </div>

    </div>
  )
}

export default SearchPage