import React, { createContext, useEffect } from 'react'

const noop = () => {}

const leagueStructure = {
  id: 0,
  title: 'Fake Sport',
  weeks: '14',
  startDate: new Date('1/11/2019'),
  endDate: new Date('1/2/2020'),
  description: 'The Fake Sport of Kings',
  sport: 'fake',
}

const initialState = {
  leagues: [leagueStructure],
  getLeague: id => {
    return leagueStructure
  },
  joinLeague: noop,
  leaveLeague: noop,
}

export const LeagueContext = createContext()

export const LeagueProvider = ({ children }) => {
  useEffect(() => {}, [])

  return (
    <LeagueContext.Provider value={initialState}>
      {children}
    </LeagueContext.Provider>
  )
}
