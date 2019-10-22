import React, { createContext, useEffect } from 'react'

const noop = () => {}

const teamStructure = {
  id: 0,
  title: 'Fake Sport',
  weeks: '14',
  startDate: new Date('1/11/2019'),
  endDate: new Date('1/2/2020'),
  description: 'The Fake Sport of Kings',
  sport: 'fake',
}

const initialState = {
  teams: leagueId => [teamStructure],
  getTeam: id => teamStructure,
}

export const TeamsContext = createContext()

export const TeamsProvider = ({ children }) => {
  useEffect(() => {}, [])

  return (
    <TeamsContext.Provider value={initialState}>
      {children}
    </TeamsContext.Provider>
  )
}
