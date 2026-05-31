import { useEffect, useState } from 'react'
import axios from 'axios'

function PerformancePage() {

  const [teamPerformance, setTeamPerformance] =
    useState([])

  useEffect(() => {

    loadPerformance()

  }, [])

  const loadPerformance = async () => {

    try {

      const res = await axios.get(

        'https://farm-webapp-6ew5.onrender.com/team-performance'

      )

      setTeamPerformance(res.data)

    } catch (error) {

      console.log(error)

    }
  }

  return (

    <div style={{ padding: '20px' }}>

      <h2>
        📊 Team Performance
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          marginTop: '20px'
        }}
      >

        {
          teamPerformance.map((team, index) => (

            <div
              key={index}
              style={{
                background: 'white',
                padding: '22px',
                borderRadius: '20px',
                boxShadow:
                  '0 4px 14px rgba(0,0,0,0.08)'
              }}
            >

              <h2>
                {team.team}
              </h2>

              <p>
                ✅ Completed:
                {' '}
                {team.completed}
              </p>

              <p>
                ⏳ Pending:
                {' '}
                {team.pending}
              </p>

              <p>
                📈 Efficiency:
                {' '}
                {team.efficiency}%
              </p>

            </div>

          ))
        }

      </div>

    </div>
  )
}

export default PerformancePage