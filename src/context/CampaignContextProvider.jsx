import React, {  createContext, useState } from 'react'

export const CampaignContext = createContext(false)

export const CampaignContextProvider = ({children}) => {
    const [showCampaign, setShowCampaign] = useState(false)
  return (
    <CampaignContext.Provider value={{showCampaign, setShowCampaign}} >
        {children}
    </CampaignContext.Provider>
  )
}