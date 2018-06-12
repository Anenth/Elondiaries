import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
