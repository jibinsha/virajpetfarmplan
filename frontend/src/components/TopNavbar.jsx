function TopNavbar({

  activePage,

  setActivePage

}) {

  const navButtonStyle = (page) => ({

    padding: '12px 18px',

    borderRadius: '12px',

    border: 'none',

    cursor: 'pointer',

    background:
      activePage === page
        ? '#1b4332'
        : '#edf2ef',

    color:
      activePage === page
        ? 'white'
        : '#1b4332',

    fontWeight: '700'

  })

  return (

    <div
      style={{
        display: 'flex',
        gap: '12px',
        padding: '15px',
        background: 'white',
        borderBottom: '1px solid #e5e5e5',
        flexWrap: 'wrap'
      }}
    >

      <button
        onClick={() =>
          setActivePage('dashboard')
        }
        style={navButtonStyle('dashboard')}
      >
        📋 Dashboard
      </button>

      <button
        onClick={() =>
          setActivePage('search')
        }
        style={navButtonStyle('search')}
      >
        🔍 Search Farmer
      </button>

      <button
        onClick={() =>
          setActivePage('performance')
        }
        style={navButtonStyle('performance')}
      >
        📊 Team Performance
      </button>

    </div>
  )
}

export default TopNavbar